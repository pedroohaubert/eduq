import { Stripe } from 'stripe';
import { db } from '../db/db';
import { usersTable } from '../db/schema';
import { eq } from "drizzle-orm";
import { redirect } from 'next/navigation';
const PUBLIC_URL = process.env.NEXT_PUBLIC_WEBSITE_URL ? process.env.NEXT_PUBLIC_WEBSITE_URL : "https://subtly-oriented-eft.ngrok-free.app"
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
export async function getStripePlan(email: string) {

    const users = await db.select().from(usersTable).where(eq(usersTable.email, email))
    
    if (!users.length) {
        throw new Error(`No user found with email: ${email}`)
    }

    if (!users[0].plan) {
        throw redirect(`${PUBLIC_URL}/subscribe`)
    }

    const subscription = await stripe.subscriptions.retrieve(users[0].plan)
    const productId = subscription.items.data[0].plan.product as string
    const product = await stripe.products.retrieve(productId)
    return product.name
}

export async function createStripeCustomer(id: string, email: string, name?: string) {
    const customer = await stripe.customers.create({
        name: name ? name : "",
        email: email,
        metadata: {
            supabase_id: id
        }
    });
    // Create a new customer in Stripe
    return customer.id
}

export async function createStripeCheckoutSession(email: string) {
    const user = await db.select().from(usersTable).where(eq(usersTable.email, email))
    const customerSession = await stripe.customerSessions.create({
        customer: user[0].stripe_id,
        components: {
            pricing_table: {
                enabled: true,
            },
        },
    });
    return customerSession.client_secret
}

export async function generateStripeBillingPortalLink(email: string) {
    const user = await db.select().from(usersTable).where(eq(usersTable.email, email))
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: user[0].stripe_id,
        return_url: `${PUBLIC_URL}/dashboard`,
    });
    return portalSession.url
}
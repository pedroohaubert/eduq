import { db } from '@/utils/db/db'
import { usersTable } from '@/utils/db/schema'
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
    console.log('Webhook received')
    try {
        const response = await request.json()
        console.log(response)

        // Handle different webhook events
        switch (response.type) {
            case 'customer.subscription.created':
            case 'customer.subscription.updated':
            case 'invoice.payment_succeeded':
                // On subscribe or update, write subscription ID to db
                await db.update(usersTable)
                    .set({ plan: response.data.object.subscription })
                    .where(eq(usersTable.stripe_id, response.data.object.customer));
                break;
                
            case 'customer.subscription.deleted':
                // On subscription cancellation, set plan to null
                await db.update(usersTable)
                    .set({ plan: null })
                    .where(eq(usersTable.stripe_id, response.data.object.customer));
                break;

            default:
                console.log(`Unhandled event type: ${response.type}`);
        }
    } catch (error: any) {
        return new Response(`Webhook error: ${error.message}`, {
            status: 400,
        })
    }
    return new Response('Success', { status: 200 })
}
'use server'
import Stripe from 'stripe'

export interface StripeProduct {
    id: string;
    name: string;
    description: string | null;
    features: string[];
    price: Stripe.Price;
}
 
export async function getStripeProducts(): Promise<StripeProduct[]> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-06-20'
    });
  
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price']
    });
  
    return products.data.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      features: product.metadata?.features ? JSON.parse(product.metadata.features) : [],
      price: product.default_price as Stripe.Price
    }));
  }
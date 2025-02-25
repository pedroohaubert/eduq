"use client"
import React, { useState, useEffect } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'pricing-table-id'?: string;
                'publishable-key'?: string;
                'customer-session-client-secret'?: string;
            };
        }
    }
}
export default function StripePricingTable({ checkoutSessionSecret }: { checkoutSessionSecret: string }) {

    return (
        <stripe-pricing-table
            pricing-table-id={process.env.STRIPE_PRICING_TABLE_ID}
            publishable-key={process.env.STRIPE_PUBLISHABLE_KEY}
            customer-session-client-secret={checkoutSessionSecret}
        >
        </stripe-pricing-table>
    )


};

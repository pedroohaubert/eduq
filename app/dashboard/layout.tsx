import DashboardHeader from "@/components/DashboardHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation"
import { db } from '@/utils/db/db'
import { usersTable } from '@/utils/db/schema'
import { eq } from "drizzle-orm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SAAS Starter Kit",
    description: "SAAS Starter Kit with Stripe, Supabase, Postgres",
};

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Check if user has plan selected. If not redirect to subscibe
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // check user plan in db
    const checkUserInDB = await db.select().from(usersTable).where(eq(usersTable.email, user!.email!))
    if (checkUserInDB[0].plan === null) {
        console.log("User has no plan selected")
        return redirect('/subscribe')
    }


    return (
        <>
            <DashboardHeader />
            <main className="container py-6 px-4 md:px-6">{children}</main>
        </>
    );
}

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function Dashboard() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/')
    }

    return (
        <main className="flex-1">
            <div className="container">
                Hello {data.user.email}
            </div>
        </main>)

}
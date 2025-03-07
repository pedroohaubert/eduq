import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import SignupForm from "@/components/SignupForm"
import ProviderSigninBlock from "@/components/ProviderSigninBlock"

export default function Signup() {
    return (
        <div className="flex items-center justify-center bg-muted min-h-screen">

            <Card className="w-[350px] mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/10">
                <CardHeader className="space-y-1 pb-2">
                    <div className="flex justify-center py-4">
                        <Link href='/' className="transition-transform hover:scale-105 duration-300">
                            <Image src="/logo.png" alt="logo" width={50} height={50} />
                        </Link>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Signup</CardTitle>
                    <CardDescription className="text-center">Create your account now!</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 px-8">
                    <SignupForm />
                    <div className="relative my-2">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-primary/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-4 text-muted-foreground font-medium">Or continue with</span>
                        </div>
                    </div>
                    <ProviderSigninBlock />
                </CardContent>
                <CardFooter className="flex-col text-center pb-6">
                    <Link className="w-full text-sm text-muted-foreground hover:text-primary transition-colors" href="/login">
                        Have an account? Login
                    </Link>
                </CardFooter>
            </Card>
        </div >

    )
}
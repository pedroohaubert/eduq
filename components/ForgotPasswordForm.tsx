"use client"
import { useActionState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { forgotPassword } from '@/app/auth/actions'
export default function ForgotPasswordForm() {
    const initialState = {
        message: ''
    }
    const [formState, formAction] = useActionState(forgotPassword, initialState)
    return (<>
        <form action={formAction}>
            <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    name="email"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full mt-4 p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out"
                style={{
                    background: 'linear-gradient(to right, #ff4d79, #ff6b8b)',
                    border: 'none',
                    color: 'white'
                }}
            >
                Redefinir Senha
            </button>
            {formState?.message && (
                <p className="text-sm text-red-500 text-center py-2">{formState.message}</p>
            )}
        </form >
    </>)
}
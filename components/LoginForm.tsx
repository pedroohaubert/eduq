"use client"

import { useActionState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginUser } from '@/app/auth/actions'
import { useEffect } from "react";
export function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
    const initialState = {
        message: ''
    }
    const [formState, formAction] = useActionState(loginUser, initialState)
    
    useEffect(() => {
        // If login was successful (no error message) and we have a callback, call it
        if (formState && !formState.message && onSuccess) {
            onSuccess();
        }
    }, [formState, onSuccess]);
    
    return (
        <div className="flex flex-col h-[400px]">
            <form action={formAction} className="flex flex-col flex-1">
                {/* Placeholder div to match the height of the name field in SignupForm */}
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
                <div className="grid gap-2 mt-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Sua senha"
                        name="password"
                        required
                    />
                </div>
                <div className="h-[72px]"></div>
                
                
                <button
                    type="submit"
                    className="w-full mt-4 p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out group relative overflow-hidden"
                    style={{
                        background: 'none',
                        border: '1px solid var(--input)',
                        color: 'var(--foreground)',
                        position: 'relative'
                    }}
                >
                    <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        background: 'linear-gradient(to right, #ff4d79, #ff6b8b)'
                    }}></div>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">Entrar</span>
                </button>
                {formState?.message && (
                    <p className="text-sm text-red-500 text-center py-2">{formState.message}</p>
                )}
            </form>
        </div>
    )
}
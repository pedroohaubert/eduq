
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { resetPassword } from '@/app/auth/actions'
import { useSearchParams } from "next/navigation";
import { Suspense, useActionState } from "react";

function GetCodeHiddenInput() {
    const searchParams = useSearchParams();
    return <Input type="hidden" name="code" value={searchParams.get('code')!} />
}

export default function ResetPasswordForm() {
    const initialState = {
        message: ''
    }
    const [formState, formAction] = useActionState(resetPassword, initialState)
    return (<>
        <form action={formAction}>
            <div className="grid gap-2">
                <Label htmlFor="email">Senha</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Digite Nova Senha"
                    name="password"
                    required
                />
                <Input
                    id="confirm_password"
                    type="password"
                    placeholder="Confirme a Senha"
                    name="confirm_password"
                    required
                />
                <Suspense>
                    <GetCodeHiddenInput />
                </Suspense>
            </div>
            <button
                className="w-full mt-4 p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out"
                style={{
                    background: 'linear-gradient(to right, #ff4d79, #ff6b8b)',
                    border: 'none',
                    color: 'white'
                }}
                type="submit"
            >
                Atualizar Senha
            </button>
            {formState?.message && (
                <p className="text-sm text-red-500 text-center py-2">{formState.message}</p>
            )}
        </form >
    </>)
}
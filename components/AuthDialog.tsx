"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import Image from 'next/image';

export function AuthDialog({ children }: { children?: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children || (
                    <div
                        className='group flex items-center justify-center px-4 py-2 cursor-pointer rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-all duration-500 ease-in-out'
                    >
                        <span className='transition-colors duration-500'>Entrar</span>
                    </div>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] h-[470px] overflow-hidden p-6 transition-all duration-300 ease-in-out">
                <div className="flex items-center h-20 justify-center mb-6">
                    <div className="flex items-center justify-center text-3xl">
                        <p>Eduq</p>

                        <div className="ml-6 relative">
                            <Image src="/eduq.svg" alt="Logo Eduq" width={70} height={70} />
                        </div>
                    </div>
                </div>
                <style jsx global>{`
          @keyframes pulseBorder {
            0% {
              box-shadow: 0 0 10px rgba(255, 77, 121, 0.4);
              background-position: 0% 50%;
            }
            50% {
              box-shadow: 0 0 15px rgba(255, 77, 121, 0.6);
              background-position: 100% 50%;
            }
            100% {
              box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
              background-position: 0% 50%;
            }
          }
          .animate-pulse-border {
            animation: pulseBorder 5s ease-in-out infinite;
          }
        `}</style>
                <DialogTitle className="sr-only">Autenticação</DialogTitle>
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Entrar</TabsTrigger>
                        <TabsTrigger value="signup">Criar conta</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="transition-all duration-300 ease-in-out">
                        <LoginForm />
                    </TabsContent>

                    <TabsContent value="signup" className="transition-all duration-300 ease-in-out">
                        <SignupForm />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getStripeProducts, StripeProduct } from './actions';
import { useEffect, useState } from 'react';
import { ArrowDownToDot, ArrowRight, BookCheck, LogIn, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AuthDialog } from '@/components/AuthDialog';
 
// Removed revalidate directive as it's not compatible with client components

export default function LandingPage() {
  const [products, setProducts] = useState<StripeProduct[]>([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getStripeProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center">
      <header className="w-full flex justify-end items-center p-4 gap-2">
        <ThemeToggle />
        <AuthDialog />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="flex text-[108px] relative">
            Eduq          
          <div className="ml-10 relative">
            <Image src="/eduq.svg" alt="ExamAI logo" width={200} height={200} />
          </div>
        </div>

        <p className="text-xl text-center max-w-lg mt-4 text-muted-foreground mb-8">
          Revolucione a criação de provas com nossa plataforma de IA.
          Gere questões personalizadas, gerencie bancos de questões e exporte em diversos formatos.
        </p>

        <div className='flex flex-col px-2 items-center justify-center'>
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
          <AuthDialog>
            <div
              className='group flex items-center px-8 gap-2 p-3 cursor-pointer rounded-full animate-pulse-border transition-all duration-500 ease-in-out'
              style={{
                border: 'none',
                background: 'linear-gradient(to right, #ff4d79, #ff6b8b)',
                boxShadow: '0 0 12px rgba(255, 77, 121, 0.5)',
                position: 'relative',
                zIndex: 1,
                backgroundSize: '200% 100%'
              }}
            >
              <div className="absolute inset-0 rounded-full bg-background group-hover:bg-transparent m-[2px] z-[-1] transition-all duration-500 box-border"></div>
              <p className='text-xl group-hover:text-white transition-colors duration-500'>Comece Agora</p>
              <BookCheck className="w-5 h-5 group-hover:text-white transition-colors duration-500" />
            </div>
          </AuthDialog>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
          {[
            { title: "Assistente inteligente", description: "Converse com a IA para criar provas personalizadas com questões relevantes e diversificadas" },
            { title: "Banco de Questões", description: "Gerencie facilmente suas questões com nossa interface intuitiva de arrastar e soltar" },
            { title: "Exportação Flexível", description: "Exporte suas provas em diversos formatos como Google Docs, PDF e muito mais" }
          ].map((feature, i) => (
            <div key={i} className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Eduq. Todos os direitos reservados.
      </footer>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MovingBorder } from '@/components/ui/moving-border';
import { HeroPill } from '@/components/ui/hero-pill';
import { StarBorder } from './star-border';
import Link from 'next/link';

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ['inteligente', 'novo', 'moderno', 'eficiente', 'inovador'], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div>
            <HeroPill
              href="#"
              label="Demonstração em vídeo"
              announcement="📣 Novidade"
              isExternal
              className="bg-[hsl(187,80.8%,34.7%)]/20 ring-[hsl(210,40%,96.1%)] [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-[hsl(187,80.8%,34.7%)] [&_svg_path]:fill-[hsl(187,80.8%,34.7%)]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-3xl text-center text-5xl tracking-tighter md:text-7xl">
              <span className="text-spektr-cyan-50">Ensine de um jeito</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="max-w-3xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              Crie provas de forma <span className="font-semibold text-spektr-cyan-500">rápida e inteligente</span>! Nosso <span className="font-semibold text-spektr-cyan-700">agente de inteligência artificial </span>
              gera avaliações alinhadas às bases curriculares, com questões organizadas de forma
              randômica e <span className="font-semibold text-spektr-cyan-700">correção automatizada</span> via escaneamento de gabarito. <br /><br />
              <span className="font-medium text-muted-foreground relative inline-block">
                <span className="relative z-10 text-gray-800">Mais eficiência para você, mais aprendizado para seus alunos.</span>
                <span className="absolute inset-0 bg-blue-200 opacity-80 z-0" style={{
                  clipPath: "polygon(0% 30%, 15% 10%, 30% 35%, 45% 15%, 60% 35%, 75% 15%, 90% 30%, 100% 20%, 100% 80%, 90% 90%, 75% 70%, 60% 85%, 45% 65%, 30% 80%, 15% 65%, 0% 80%)",
                }}></span>
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/login">
            <StarBorder className="w-60 bg-spektr-cyan-500 text-white font-bold shadow-lg shadow-spektr-cyan-300/50 hover:shadow-xl hover:shadow-spektr-cyan-400/60 transition-all duration-300 hover:bg-spektr-cyan-600 hover:scale-105">
              Comece agora
            </StarBorder>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

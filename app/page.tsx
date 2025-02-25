'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import { Star, Check, Coins, UserCheck, Database } from 'lucide-react';
import Stripe from 'stripe';
import { Hero } from '@/components/ui/animated-hero';
import { getStripeProducts, StripeProduct } from './actions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Footer } from "@/components/ui/footer"
import { Hexagon, Github, Twitter } from "lucide-react"

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
    <div className="flex min-h-[100dvh] flex-col bg-[#FAFAFA]">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <Hero />
        </motion.div>
      </AuroraBackground>
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Awesome Corp"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2024 Awesome Corp",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

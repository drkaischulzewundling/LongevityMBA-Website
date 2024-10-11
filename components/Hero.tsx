"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function Hero() {
  const [email, setEmail] = useState('');
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail('');
  };

  return (
    <div className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The science-based</span>{' '}
                <span className="block text-primary xl:inline">longevity newsletter</span>
              </h1>
              <p className="mt-3 text-base text-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Actionable insights from the latest scientific discoveries. Quick, 3-minute reads every Tuesday. For free.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <form onSubmit={handleSubscribe} className="sm:flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary sm:max-w-xs"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button type="submit" className="w-full">
                      Subscribe for free
                    </Button>
                  </div>
                </form>
              </div>
              <p className="mt-3 text-sm text-foreground">
                Trusted by 2,563 other evidence-based health enthusiasts
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Scientific research"
        />
      </div>
    </div>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LongevityMBA - Science-based Longevity Newsletter',
  description: 'Actionable insights from the latest scientific discoveries in longevity and health science. Quick, 3-minute reads every Tuesday.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
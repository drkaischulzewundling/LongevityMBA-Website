import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="/logo.png"
              alt="LongevityMBA"
            />
            <p className="text-foreground text-base">
              Actionable insights from the latest scientific discoveries in longevity and health science.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/insights" className="text-base text-foreground hover:text-primary">
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/playbooks" className="text-base text-foreground hover:text-primary">
                      Playbooks
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/faq" className="text-base text-foreground hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-foreground hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-base text-foreground hover:text-primary">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-foreground hover:text-primary">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-foreground hover:text-primary">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-foreground xl:text-center">
            &copy; 2023 LongevityMBA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
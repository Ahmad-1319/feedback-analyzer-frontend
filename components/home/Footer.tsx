import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded bg-primary flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">FeedbackNexus</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The modern platform for customer feedback analysis. Turn insight
              into growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Product</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Integrations
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Company</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Support</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  API
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
          <p>
            © {new Date().getFullYear()} FeedbackNexus. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              GitHub
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

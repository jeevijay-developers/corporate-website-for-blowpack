import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#leadership" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
  ],
  products: [
    { name: "Round Bottles", href: "#products" },
    { name: "Jerry Can", href: "#products" },
    { name: "Cap", href: "#products" },
    { name: "MCup", href: "#products" },
  ],
  services: [
    { name: "Blow Moulding", href: "#services" },
    { name: "Custom Design", href: "#services" },
    { name: "Mould Development", href: "#services" },
    { name: "Quality Assurance", href: "#services" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:gap-8 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/apple-icon.png"
                alt="Shri Navkar Blowpack Logo"
                width={60}
                height={60}
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Delivering HDPE and multilayer barrier packaging solutions for agrochemical and pesticide packaging needs.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+912646221638"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+91-2646-221638</span>
              </a>
              <a
                href="mailto:info@blowpack.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>info@blowpack.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Unit-Il, Plot No, 120-121/11 & 12, GIDC Ind. Estate, Ankleshwar-393002. Gujarat, INDIA
                  </span>
              </div>
            </div>
          </div>

          {/* Links - 3 columns on tablet+, 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Products
              </h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-foreground">
                Services
              </h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:mt-12 sm:flex-row sm:pt-8">
          <p className="text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
            &copy; {new Date().getFullYear()} Shri Navkar Blowpack. All rights
            reserved.
          </p>

         
         
        </div>
      </div>
    </footer>
  );
}

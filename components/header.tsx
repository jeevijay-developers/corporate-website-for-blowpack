"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL || "#";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Store", href: storeUrl, external: true },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur transition-shadow supports-backdrop-filter:bg-background/60 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
      {/* Top bar - hidden on mobile */}
      <div className="hidden border-b border-border/40 bg-muted/50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <a
            href="tel:+912646221638"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>+91-2646-221638</span>
          </a>
          <a
            href="tel:+916358940904"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>+91 6358 940 904</span>
          </a>
          <a
            href="mailto:info@blowpack.com"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            <span>info@blowpack.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/apple-icon.png"
            alt="Shri Navkar Blowpack Logo"
            width={60}
            height={60}
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const linkProps = item.external
              ? {
                  prefetch: false,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                {...linkProps}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`${storeUrl}`}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Visit our store
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`h-full w-[70%] max-w-sm transform bg-background shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto px-5 py-6 gap-6">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="rounded-full border border-border p-2 text-muted-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              {navigation.map((item) => {
                const linkProps = item.external
                  ? {
                      prefetch: false,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                    {...linkProps}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto border-t border-border pt-4">
              <div className="mb-4 space-y-2">
                <a
                  href="tel:+912646221638"
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91-2646-221638</span>
                </a>
                <a
                  href="tel:+916358940904"
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 6358 940 904</span>
                </a>
                <a
                  href="mailto:info@blowpack.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@blowpack.com</span>
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full bg-transparent">
                  Request Quote
                </Button>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  // Show CTA after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-4 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 bg-transparent"
          asChild
        >
          <a href="tel:+916358940904">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button
          size="lg"
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          asChild
        >
          <a href="#contact">Get Quote</a>
        </Button>
      </div>
    </div>
  );
}

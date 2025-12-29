"use client";

import { useState } from "react";
import {
  Package,
  Layers,
  Truck,
  Sparkles,
  Settings,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Multilayer COEX Technology",
    description:
      "Advanced multilayer bottles with EVOH and PA barriers providing superior resistance to oxygen ingress, solvent permeation, and aroma loss.",
  },
  {
    icon: Layers,
    title: "UN-Certified Packaging",
    description:
      "UN-certified bottles and jerrycans for hazardous goods, meeting international safety and regulatory standards.",
  },
  {
    icon: Settings,
    title: "Custom Development",
    description:
      "Extensive customization in size, shape, neck finish, color, and barrier structure to achieve optimal performance and brand differentiation.",
  },
  {
    icon: Sparkles,
    title: "Closure & Dosing Solutions",
    description:
      "Complete range of caps, closures, and measuring cups designed for secure sealing, accurate dosing, and tamper evidence.",
  },
  {
    icon: Truck,
    title: "Global Supply",
    description:
      "Advanced manufacturing facilities with precision and consistency to serve global markets across agrochemical and specialty industries.",
  },
  {
    icon: Shield,
    title: "Sustainable Practices",
    description:
      "Recyclable materials and responsible manufacturing processes delivering durable, future-ready packaging solutions.",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  const handleSwipe = () => {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchEndX - touchStartX;
    const threshold = 40;
    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="services" className="bg-muted/30 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Capabilities
          </p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Advanced Manufacturing Solutions
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Specialized technologies and advanced facilities delivering
            innovative packaging for demanding industrial applications.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 sm:hidden">
          <div className="relative overflow-hidden rounded-xl bg-background touch-pan-x">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
              onTouchEnd={() => handleSwipe()}
            >
              {services.map((service) => (
                <div key={service.title} className="min-w-full p-5">
                  <div className="group relative rounded-lg border border-border bg-background p-5 transition-all hover:border-accent/50 hover:shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-serif text-base font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              aria-label="Previous service"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow"
              onClick={prev}
            >
              <span className="sr-only">Previous</span>
              ‹
            </button>
            <button
              type="button"
              aria-label="Next service"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow"
              onClick={next}
            >
              <span className="sr-only">Next</span>
              ›
            </button>
          </div>
        </div>

        {/* Tablet/desktop grid */}
        <div className="mt-10 hidden gap-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-lg border border-border bg-background p-5 transition-all hover:border-accent/50 hover:shadow-lg sm:rounded-xl sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground sm:h-12 sm:w-12">
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-3 font-serif text-base font-semibold text-foreground sm:mt-4 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "UN-Certified Packaging",
  "Multilayer COEX Technology",
  "Global Quality Standards",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-muted/50 to-background pt-[80px]">
      <div className="mx-auto max-w-400 px-4 py-12 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="grid items-start pt-10 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-start text-center lg:items-start lg:text-left">
            
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground sm:align-center ">
                <span className="mr-2 h-2 w-2 rounded-full bg-accent" />
               Trusted Global Partner in Plastic Packaging
              </div>

            <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              High-Performance Packaging for{" "}
              <span className="text-accent">
                Agrochemical & Specialty Industries
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              We manufacture HDPE and multilayer COEX bottles with EVOH and PA
              barrier technologies, delivering reliable and compliant packaging
              solutions for agrochemicals, pesticides, lubricants, and specialty
              products.
            </p>

            {/* Feature badges - stack on mobile */}
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-2 text-[12px] text-foreground ${
                    index === 2
                      ? "col-span-2 justify-center sm:col-span-1 sm:justify-start"
                      : ""
                  }`}
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs - full width on mobile */}
            <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:mt-10 sm:w-auto sm:flex sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="w-full rounded-[999px] bg-primary px-6 py-3 text-primary-foreground shadow"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-[999px] bg-transparent px-6 py-3"
              >
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="aspect-4/3 overflow-hidden rounded-xl bg-muted sm:rounded-2xl lg:aspect-4/5">
              <img
                src="/industrial-plastic-packaging-manufacturing-facilit.jpg"
                alt="Modern plastic packaging manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Stats overlay - repositioned for mobile */}
            <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-border bg-background p-4 shadow-lg sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto sm:rounded-xl sm:p-6">
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 sm:h-12 sm:w-12">
                  <span className="font-serif text-lg font-bold text-accent sm:text-xl">
                    UN
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Certified Packaging
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    For Hazardous Goods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

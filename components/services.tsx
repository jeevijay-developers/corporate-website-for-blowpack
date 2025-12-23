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

        {/* Services grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
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

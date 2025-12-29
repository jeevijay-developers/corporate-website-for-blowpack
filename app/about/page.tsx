import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Target,
  Eye,
  Package,
  CheckCircle,
  Settings,
  Shield,
  Gauge,
  Award,
  Users,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "40+" },
  { label: "Manufacturing Facilities", value: "2" },
  { label: "Quality Standards", value: "100%" },
  { label: "Customer Satisfaction", value: "98%" },
];

const facilities = [
  {
    icon: Factory,
    title: "Blow Moulding Machines",
    description:
      "Fully automatic Blow Moulding Machines for Multilayer Coex Bottles with advanced precision and efficiency.",
  },
  {
    icon: Settings,
    title: "Automated Processing",
    description:
      "Online De-flashing, Trimming, and Leak Testing capabilities ensuring superior product quality.",
  },
  {
    icon: Package,
    title: "Injection Moulding",
    description:
      "Injection Blow Moulding and Injection Moulding machines for caps, closures, and specialized components.",
  },
];

const qualityTests = [
  {
    icon: Gauge,
    title: "Weight Check",
    description: "Precise weight verification for consistency and compliance.",
  },
  {
    icon: CheckCircle,
    title: "Thickness Measurement",
    description:
      "Uniform thickness testing ensuring structural integrity across products.",
  },
  {
    icon: Shield,
    title: "Leakage Testing",
    description:
      "Comprehensive leak testing to guarantee product containment and safety.",
  },
  {
    icon: Award,
    title: "Drop Testing",
    description:
      "Rigorous drop testing to validate durability and performance standards.",
  },
];

const products = [
  "Monolayer and Multilayer bottles and containers",
  "Industry-standard and customized bottles",
  "Caps, closures, and measuring cups",
  "Rigid packaging solutions for liquids and powders",
  "Agrochemicals and Pesticides packaging",
  "Fungicides and Bio-nutrients containers",
  "Farm Chemicals and specialty products",
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Supply Chain Manager",
    company: "AgriChem Solutions Pvt. Ltd.",
    content:
      "Shri Navkar Blowpack has been our trusted partner for over 5 years. Their multilayer COEX bottles provide the perfect barrier protection our agrochemical products need. The quality is consistently excellent.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Quality Control Head",
    company: "GreenCrop Industries",
    content:
      "The UN-certified packaging from Navkar ensures our hazardous materials meet all international safety standards. Their attention to detail and commitment to quality is unmatched.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Production Director",
    company: "BioNutrients India",
    content:
      "From custom bottle design to timely delivery, Navkar Blowpack exceeds expectations. Their technical expertise helped us develop the perfect packaging solution for our new product line.",
    rating: 5,
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col pt-[80px]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                <span className="mr-2 h-2 w-2 rounded-full bg-accent" />
                About Our Industry
              </div>
              <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Four Decades of Excellence in{" "}
                <span className="text-accent">Plastic Packaging</span>
              </h1>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Established in 1984, Shri Navkar Blowpack has been at the
                forefront of providing high-quality packaging solutions to
                industries that demand reliability and precision.
              </p>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-bold text-accent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Our Journey
                </p>
                <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  From Humble Beginnings to Industry Leadership
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Shri Navkar Blowpack was established in 1984 with a vision
                    to provide high-quality packaging solutions to industries
                    that demand reliability and precision. Starting with our
                    first facility in Ankleshwar, we have expanded our
                    capabilities to include a second facility in Panoli,
                    ensuring we meet growing demands and maintain our position
                    as a leader in the industry.
                  </p>
                  <p>
                    With manufacturing facilities in Ankleshwar and Panoli, we
                    specialize in providing custom-made and industry-standard
                    packaging solutions for Agrochemicals, Pesticides,
                    Fungicides, Bio-nutrients, Farm Chemicals, and more.
                  </p>
                  <div className="mt-8 flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <Award className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        40+ Years
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Experience in the Industry
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/industrial-plastic-packaging-manufacturing-facilit.jpg"
                    alt="Manufacturing facility"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="bg-muted/30 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Specialized Solutions
                </p>
                <h2 className="text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Advanced Manufacturing Capabilities
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We have advanced manufacturing facilities capable of delivering specialized solutions for a wide range of industrial applications using specially developed technologies. Our capabilities allow us to support complex and demanding projects with precision and consistency.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We continuously adapt and innovate to meet evolving customer requirements, offering customized development solutions aligned with users’ changing needs.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(30rem_30rem_at_20%_20%,var(--color-accent)/10,transparent)]" />
                <div className="relative space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Factory className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Specialized Production</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Purpose-built lines for high-complexity projects with tight tolerances.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Gauge className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Precision & Consistency</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Quality systems tuned for repeatability across demanding runs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Adaptive Development</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Rapid iteration to align with evolving customer and market needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Expertise
              </p>
              <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                What We Do
              </h2>
              <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                We specialize in the design and manufacturing of Blow and
                Injection moulded plastic products.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-accent/50"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="bg-muted/30 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                State-of-the-Art Infrastructure
              </p>
              <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Our Facilities
              </h2>
              <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                Advanced manufacturing capabilities across two strategic
                locations in Gujarat, India.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {facilities.map((facility) => (
                <div
                  key={facility.title}
                  className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Quality First
              </p>
              <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Rigorous Quality Control
              </h2>
              <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                Every product undergoes comprehensive testing to ensure it meets
                the highest standards.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {qualityTests.map((test) => (
                <div
                  key={test.title}
                  className="rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <test.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {test.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {test.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/30 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Client Testimonials
              </p>
              <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                Hear what our clients have to say about our packaging solutions
                and services.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-accent px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="text-balance font-serif text-2xl font-bold tracking-tight text-accent-foreground sm:text-3xl lg:text-4xl">
                  Ready to Elevate Your Packaging?
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-accent-foreground/90 sm:text-lg">
                  Let's discuss how our innovative packaging solutions can meet
                  your specific requirements.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Contact Us Today
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent-foreground/20 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,var(--color-accent),transparent)]/20" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

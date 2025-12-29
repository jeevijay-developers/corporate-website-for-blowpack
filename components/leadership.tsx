import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Suresh Nahar",
    role: "Founder",
    bio: "Our journey began in 1984 with a vision to revolutionize the packaging industry. With dedication and innovation, we've built a legacy of trust, quality, and customer satisfaction that continues to guide us today.",
    image: "/suresh.png",
  },
  {
    name: "Deepak Nahar ",
    role: "Partnership",
    bio: "At Shri Navkar Blowpack, we strive for excellence by blending cutting-edge technology with customer-centric solutions. Together, we aim to deliver packaging that sets industry benchmarks and fosters long-term partnership.",
    image: "/deepak.png",
  },
];

export function Leadership() {
  return (
    <section className="bg-muted/30 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Founders & Partnerships
          </p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Leadership That Shapes Our Vision
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Guiding Shri Navkar Blowpack with innovation, trust, and enduring
            partnerships.
          </p>
        </div>

        {/* Leaders grid - 1 col mobile, 2 tablet, 3 desktop */}
        <div className="mt-10 flex justify-center gap-6 sm:mt-16 lg:gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover:shadow-lg sm:rounded-xl"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden bg-muted">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {leader.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                  {leader.bio}
                </p>

                {/* Social links */}
                {/* <div className="mt-3 flex gap-2 sm:mt-4 sm:gap-3">
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn profile</span>
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

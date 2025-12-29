const visionMission = {
  vision: [
    "To become a trusted global partner in plastic packaging through consistent quality, integrity, and customer-centric collaboration.",
    "To deliver innovative and reliable packaging solutions that protect products, ensure safety, and enhance performance across applications.",
    "To lead with sustainability by adopting responsible materials, efficient processes, and eco-conscious practices across operations.",
    "To support evolving needs of agrochemical and specialty chemical industries with compliance-driven, future-ready packaging.",
    "To create value through innovation and trust.",
  ],
  mission: [
    "To manufacture high-quality HDPE and multilayer barrier packaging solutions that meet international safety, regulatory, and performance standards.",
    "To provide customized bottles, jerrycans, caps, and measuring solutions that enhance product protection, ease of use, and customer value.",
    "To continuously invest in technology, quality systems, and people to ensure consistent excellence and operational efficiency.",
    "To promote sustainable practices through recyclable materials, responsible manufacturing, and long-term partnerships with our customers.",
  ],
};

const milestones = [
  {
    year: "Foundation",
    title: "Quality Focus",
    description:
      "Established with a commitment to manufacturing high-performance plastic packaging solutions.",
  },
  {
    year: "Growth",
    title: "Capacity Expansion",
    description:
      "Expanded manufacturing capacity with advanced machinery and larger facilities.",
  },
  {
    year: "Certification",
    title: "UN & ISO Standards",
    description:
      "Achieved UN certification for hazardous goods and ISO quality management standards.",
  },
  {
    year: "Innovation",
    title: "COEX Technology",
    description:
      "Invested in multilayer COEX technology with EVOH and PA barrier capabilities.",
  },
  {
    year: "Sustainability",
    title: "Green Initiative",
    description:
      "Implemented recyclable materials and responsible manufacturing processes.",
  },
  {
    year: "Global",
    title: "Market Expansion",
    description:
      "Serving global markets across agrochemical and specialty chemical industries.",
  },
];

export function Timeline() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Foundation
          </p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Vision & Mission
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Driving innovation and sustainability in plastic packaging solutions
            for a better tomorrow.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {visionMission.vision.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {visionMission.mission.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section header */}
        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Journey
          </p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Committed to Excellence
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            A legacy built on quality, innovation, and customer trust.
          </p>
        </div>

        {/* Timeline - Desktop horizontal */}
        <div className="mt-12 hidden lg:mt-16 lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-border" />

            {/* Milestones */}
            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex w-40 flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-accent text-sm font-bold text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-4 font-serif text-sm font-semibold text-foreground">
                    {milestone.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {milestone.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Descriptions */}
          <div className="mt-8 grid grid-cols-6 gap-4">
            {milestones.map((milestone) => (
              <p
                key={milestone.year}
                className="text-center text-sm text-muted-foreground"
              >
                {milestone.description}
              </p>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet vertical */}
        <div className="mt-8 sm:mt-12 lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-border sm:left-6" />

            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative flex gap-4 sm:gap-6"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-background bg-accent text-xs font-bold text-accent-foreground sm:h-12 sm:w-12 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      {milestone.year}
                    </p>
                    <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

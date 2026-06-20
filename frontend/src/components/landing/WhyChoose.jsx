import {
  Layers,
  Sparkles,
  FileX2,
  Plane,
  Rocket,
  Crown,
} from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Replace Multiple Subscriptions",
    desc: "Stop paying for five different apps. Consolidate everything into one.",
  },
  {
    icon: Sparkles,
    title: "One Simple Service",
    desc: "A single, unified platform for all your entertainment needs.",
  },
  {
    icon: FileX2,
    title: "No Contracts",
    desc: "Total freedom. Stay because you love it, not because you're locked in.",
  },
  {
    icon: Plane,
    title: "Watch From Anywhere",
    desc: "At home or traveling the world — your content follows you.",
  },
  {
    icon: Rocket,
    title: "Fast Activation",
    desc: "Get up and running in minutes, not days.",
  },
  {
    icon: Crown,
    title: "Premium Experience",
    desc: "Buttery-smooth, high-definition streaming built for true fans.",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-omg-green/5 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 text-center">
          <span className="font-display text-xs tracking-[0.3em] text-omg-green">
            WHY OMGTV
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            The smarter way to watch
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                data-testid={`why-card-${i}`}
                className="card-hover glass flex gap-4 rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-omg-green/10 text-omg-green ring-1 ring-omg-green/20">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-zinc-400">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

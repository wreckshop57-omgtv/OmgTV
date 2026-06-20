import {
  Tv,
  Trophy,
  Swords,
  Film,
  Clapperboard,
  Globe2,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Live TV",
    desc: "Thousands of live channels streaming in crystal-clear HD, 24/7.",
    span: "lg:col-span-2",
  },
  {
    icon: Trophy,
    title: "Premium Sports",
    desc: "Every league, every match. Never miss the action.",
    span: "",
  },
  {
    icon: Swords,
    title: "PPV Events",
    desc: "Major fights & exclusive events included.",
    span: "",
  },
  {
    icon: Film,
    title: "Movies",
    desc: "A massive on-demand library of blockbusters and classics.",
    span: "",
  },
  {
    icon: Clapperboard,
    title: "TV Series",
    desc: "Binge complete seasons of trending shows.",
    span: "",
  },
  {
    icon: Globe2,
    title: "International Channels",
    desc: "Content from around the world, in your language.",
    span: "lg:col-span-2",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Device Support",
    desc: "Watch on TV, phone, tablet and laptop seamlessly.",
    span: "",
  },
  {
    icon: Zap,
    title: "Fast Streaming",
    desc: "Lightning-fast servers with zero buffering.",
    span: "",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-16 text-center">
        <span className="font-display text-xs tracking-[0.3em] text-omg-green">
          THE COMPLETE PACKAGE
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          One subscription.{" "}
          <span className="text-omg-green">Endless entertainment.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-zinc-400">
          Everything you love to watch, unified into a single premium experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              data-testid={`feature-card-${i}`}
              className={`card-hover glass group rounded-2xl p-6 ${f.span}`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-omg-green/10 text-omg-green ring-1 ring-omg-green/20 transition-all group-hover:bg-omg-green/20">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {f.title}
              </h3>
              <p className="mt-2 font-body text-sm text-zinc-400">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

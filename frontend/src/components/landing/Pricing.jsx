import { Check, Star } from "lucide-react";

const perks = [
  "Live TV + Premium Sports",
  "PPV Events Included",
  "Movies & TV Series Library",
  "International Channels",
  "Multi-Device Support",
  "Fast HD/4K Streaming",
  "Instant Activation",
  "No Contracts — Cancel Anytime",
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-16 text-center">
        <span className="font-display text-xs tracking-[0.3em] text-omg-green">
          SIMPLE PRICING
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Choose your plan
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-zinc-400">
          One flat price. Everything included. No hidden fees, ever.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Quarterly — highlighted */}
        <div
          data-testid="pricing-card-quarterly"
          className="neon-border relative rounded-3xl bg-gradient-to-b from-omg-green/[0.08] to-black/40 p-8 backdrop-blur-xl md:scale-105"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-omg-green px-4 py-1.5 font-display text-xs font-bold text-omg-void shadow-[0_0_20px_rgba(0,255,102,0.6)]">
              <Star size={13} fill="currentColor" /> MOST POPULAR
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-white">Quarterly</h3>
          <div className="mt-4 flex items-end gap-1">
            <span className="font-display text-5xl font-extrabold text-omg-green neon-text">
              $130
            </span>
            <span className="mb-1.5 font-body text-sm text-zinc-400">
              / 3 months
            </span>
          </div>
          <p className="mt-2 font-body text-sm text-zinc-400">
            Best value for committed streamers.
          </p>

          <a
            href="#order"
            data-testid="pricing-quarterly-cta"
            className="neon-btn mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-omg-green px-6 py-3.5 font-display font-bold text-omg-void"
          >
            Get Started
          </a>

          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-omg-green/20 text-omg-green">
                  <Check size={13} />
                </span>
                <span className="font-body text-sm text-zinc-200">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Annual */}
        <div
          data-testid="pricing-card-annual"
          className="glass relative rounded-3xl p-8"
        >
          <h3 className="font-display text-xl font-bold text-white">Annual</h3>
          <div className="mt-4 flex items-end gap-1">
            <span className="font-display text-5xl font-extrabold text-white">
              $480
            </span>
            <span className="mb-1.5 font-body text-sm text-zinc-400">/ year</span>
          </div>
          <p className="mt-2 font-body text-sm text-zinc-400">
            Lock in a full year of entertainment.
          </p>

          <a
            href="#order"
            data-testid="pricing-annual-cta"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-omg-green/50 bg-white/5 px-6 py-3.5 font-display font-bold text-omg-green transition-all hover:bg-omg-green/10"
          >
            Get Started
          </a>

          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-zinc-300">
                  <Check size={13} />
                </span>
                <span className="font-body text-sm text-zinc-300">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

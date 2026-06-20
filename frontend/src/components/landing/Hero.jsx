import { FaTelegramPlane } from "react-icons/fa";
import { ChevronRight, PlayCircle } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";
import { LOGO_SRC, TELEGRAM_URL, scrollToId } from "@/lib/site";

const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <MatrixRain />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute inset-0 bg-omg-void/70" />
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-omg-green/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <div className="fade-up mb-8 flex justify-center">
          <img
            src={LOGO_SRC}
            alt="OMGTV"
            data-testid="hero-logo"
            className="tv-power h-36 w-auto sm:h-44 lg:h-56"
          />
        </div>

        <div
          className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-omg-green/30 bg-omg-green/5 px-4 py-1.5"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-omg-green" />
          <span className="font-display text-xs tracking-widest text-omg-green">
            STREAMING. REINVENTED.
          </span>
        </div>

        <h1
          className="fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.2s" }}
          data-testid="hero-headline"
        >
          Everything You Watch.
          <br />
          <span className="neon-text text-omg-green">One Service.</span>
        </h1>

        <p
          className="fade-up mx-auto mt-6 max-w-2xl font-body text-base text-zinc-300 sm:text-lg"
          style={{ animationDelay: "0.3s" }}
          data-testid="hero-subheadline"
        >
          Live TV, Premium Sports, PPV Events, Movies, TV Series, and On-Demand
          Entertainment — all in one place.
        </p>

        <div
          className="fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-get-started"
            className="neon-btn flex w-full items-center justify-center gap-2 rounded-full bg-omg-green px-8 py-4 font-display text-base font-bold text-omg-void sm:w-auto"
          >
            <FaTelegramPlane size={18} />
            Get Started
            <ChevronRight size={18} />
          </a>
          <button
            onClick={() => scrollToId("pricing")}
            data-testid="hero-view-plans"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-omg-green/50 bg-white/5 px-8 py-4 font-display text-base font-bold text-omg-green backdrop-blur-sm transition-all hover:bg-omg-green/10 sm:w-auto"
          >
            <PlayCircle size={18} />
            View Plans
          </button>
        </div>

        <div
          className="fade-up mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-zinc-400"
          style={{ animationDelay: "0.5s" }}
        >
          <span>⚡ Instant Activation</span>
          <span>📺 All Your Devices</span>
          <span>🌍 Watch Anywhere</span>
          <span>🚫 No Contracts</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

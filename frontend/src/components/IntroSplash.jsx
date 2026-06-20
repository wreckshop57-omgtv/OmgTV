import { useEffect, useMemo, useState } from "react";

const INTRO_SRC = "/omgtv-intro.png";

const IntroSplash = ({ onFinish }) => {
  const [leaving, setLeaving] = useState(false);

  // Pre-compute ember particles bursting from the logo area
  const embers = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.4;
        const dist = 220 + Math.random() * 460;
        const size = 3 + Math.random() * 7;
        const warm = Math.random() > 0.5 ? "#ff6a2b" : "#ffd27a";
        return {
          id: i,
          ex: `${Math.cos(angle) * dist}px`,
          ey: `${Math.sin(angle) * dist}px`,
          size,
          color: warm,
          dur: `${1.1 + Math.random() * 1.4}s`,
          delay: `${0.15 + Math.random() * 0.4}s`,
        };
      }),
    []
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const leaveTimer = setTimeout(() => setLeaving(true), 3500);
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish();
    }, 4200);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  const skip = () => {
    setLeaving(true);
    setTimeout(() => {
      document.body.style.overflow = "";
      onFinish();
    }, 500);
  };

  return (
    <div
      data-testid="intro-splash"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black ${
        leaving ? "intro-fade-out" : ""
      }`}
    >
      {/* Explosion artwork */}
      <div className="intro-shake absolute inset-0">
        <img
          src={INTRO_SRC}
          alt="OMGTV"
          className="intro-image-in h-full w-full object-cover"
        />
      </div>

      {/* Vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />

      {/* White blast flash */}
      <div className="intro-flash pointer-events-none absolute inset-0 bg-white" />

      {/* Shockwave rings */}
      <div className="pointer-events-none absolute left-[72%] top-[32%]">
        <span className="intro-shockwave absolute h-[70vmax] w-[70vmax] rounded-full border-orange-400/70" />
        <span
          className="intro-shockwave absolute h-[70vmax] w-[70vmax] rounded-full border-red-500/50"
          style={{ animationDelay: "0.45s" }}
        />
      </div>

      {/* Ember particles */}
      <div className="pointer-events-none absolute left-[72%] top-[32%]">
        {embers.map((e) => (
          <span
            key={e.id}
            className="ember absolute rounded-full"
            style={{
              width: e.size,
              height: e.size,
              background: e.color,
              boxShadow: `0 0 ${e.size * 2}px ${e.color}`,
              "--ex": e.ex,
              "--ey": e.ey,
              "--edur": e.dur,
              "--edelay": e.delay,
            }}
          />
        ))}
      </div>

      <button
        data-testid="intro-skip"
        onClick={skip}
        className="absolute bottom-6 right-6 z-10 rounded-full border border-white/30 bg-black/40 px-5 py-2 font-display text-xs tracking-widest text-white/80 backdrop-blur-sm transition-colors hover:border-white/70 hover:text-white"
      >
        SKIP INTRO →
      </button>
    </div>
  );
};

export default IntroSplash;

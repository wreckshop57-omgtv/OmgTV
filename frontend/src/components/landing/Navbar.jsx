import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_SRC, TELEGRAM_URL, scrollToId } from "@/lib/site";

const links = [
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "Why OMGTV", id: "why" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <img src={LOGO_SRC} alt="OMGTV logo" className="h-10 w-auto sm:h-11" />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-body text-sm text-zinc-300 transition-colors hover:text-omg-green"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-get-started"
            className="neon-btn rounded-full bg-omg-green px-6 py-2.5 font-display text-sm font-bold text-omg-void"
          >
            Get Started
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="text-zinc-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="mobile-menu"
          className="glass-strong border-t border-white/10 px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="text-left font-body text-base text-zinc-200"
              >
                {l.label}
              </button>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-nav-get-started"
              className="mt-2 rounded-full bg-omg-green px-6 py-3 text-center font-display font-bold text-omg-void"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

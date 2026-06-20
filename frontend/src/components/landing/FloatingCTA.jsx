import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "@/lib/site";

const FloatingCTA = () => {
  return (
    <>
      {/* Floating Telegram bubble */}
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-telegram-button"
        aria-label="Join on Telegram"
        className="float-pulse fixed bottom-36 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-omg-green text-omg-void shadow-[0_0_24px_rgba(0,255,102,0.55)] transition-transform hover:scale-110 sm:bottom-6"
      >
        <FaTelegramPlane size={26} />
      </a>

      {/* Sticky mobile Get Started bar */}
      <div className="fixed bottom-0 left-0 z-40 w-full px-4 pb-3 md:hidden">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="sticky-mobile-get-started"
          className="neon-btn flex w-full items-center justify-center gap-2 rounded-full bg-omg-green py-3.5 font-display text-base font-bold text-omg-void"
        >
          <FaTelegramPlane size={18} /> Get Started
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;

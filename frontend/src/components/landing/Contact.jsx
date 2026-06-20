import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "@/lib/site";
import MatrixRain from "@/components/MatrixRain";

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="absolute inset-0 opacity-30">
        <MatrixRain />
      </div>
      <div className="absolute inset-0 bg-omg-void/80" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-omg-green/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          data-testid="contact-headline"
          className="font-display text-3xl font-extrabold tracking-tighter text-white sm:text-5xl"
        >
          Ready to Start <span className="neon-text text-omg-green">Watching?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base text-zinc-300 sm:text-lg">
          Join OMGTV today and unlock every channel, every game, and every show —
          all in one premium service. Message us on Telegram to get started.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-telegram-cta"
            className="neon-btn flex items-center gap-3 rounded-full bg-omg-green px-10 py-4 font-display text-lg font-bold text-omg-void"
          >
            <FaTelegramPlane size={22} />
            Join on Telegram
          </a>
        </div>

        <p className="mt-6 font-body text-sm text-zinc-500">
          Instant replies • Fast activation • No contracts
        </p>
      </div>
    </section>
  );
};

export default Contact;

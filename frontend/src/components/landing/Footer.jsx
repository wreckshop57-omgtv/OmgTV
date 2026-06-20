import { LOGO_SRC, TELEGRAM_URL, scrollToId } from "@/lib/site";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="border-t border-white/10 bg-omg-void px-5 py-12 sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <img src={LOGO_SRC} alt="OMGTV" className="h-10 w-auto" />
          <p className="font-body text-sm text-zinc-500">
            Everything you watch. One service.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-body text-sm text-zinc-400">
          <button onClick={() => scrollToId("features")} className="hover:text-omg-green">
            Features
          </button>
          <button onClick={() => scrollToId("pricing")} className="hover:text-omg-green">
            Pricing
          </button>
          <button onClick={() => scrollToId("faq")} className="hover:text-omg-green">
            FAQ
          </button>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-telegram"
            className="flex items-center gap-2 text-omg-green hover:brightness-110"
          >
            <FaTelegramPlane size={15} /> Telegram
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center">
        <p className="font-body text-xs text-zinc-600">
          © {new Date().getFullYear()} OMGTV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

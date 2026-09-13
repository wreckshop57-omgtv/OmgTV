const SmsOptIn = () => {
  return (
    <section
      id="sms-updates"
      className="border-y border-white/10 bg-omg-void px-5 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-omg-green">
          AG Media Services SMS Updates
        </p>

        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Stay Connected
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-zinc-300">
          Text <strong className="text-white">JOIN</strong> to{" "}
          <strong className="text-white">[YOUR TWILIO NUMBER]</strong> to receive
          service information, account updates, support messages, web design
          information, and occasional promotional offers from AG Media Services.
        </p>

        <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-6 text-zinc-400">
          Message frequency varies. Message and data rates may apply. Reply STOP
          to opt out or HELP for help. Consent is not a condition of purchase.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 font-body text-sm">
          <a href="/privacy" className="text-omg-green hover:underline">
            Privacy Policy
          </a>

          <a href="/terms" className="text-omg-green hover:underline">
            Terms & Conditions
          </a>
        </div>

        <p className="mt-6 font-body text-xs text-zinc-500">
          OmgTV is operated by AG Media Services.
        </p>
      </div>
    </section>
  );
};

export default SmsOptIn;

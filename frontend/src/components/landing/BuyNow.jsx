import { ShoppingCart, Truck, ShieldCheck } from "lucide-react";

const BuyNow = () => {
  return (
    <section
      id="order"
      data-testid="order-section"
      className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-12 text-center">
        <span className="font-display text-xs tracking-[0.3em] text-omg-green">
          BUY NOW
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Order your <span className="text-omg-green">OMGTV</span> device
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-zinc-400">
          Fill out the form below and we'll ship a fully programmed device
          straight to your door — ready to stream out of the box.
        </p>
      </div>

      {/* Trust strip */}
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { icon: Truck, t: "Shipped Ready-to-Go" },
          { icon: ShieldCheck, t: "2 Devices Per Account" },
          { icon: ShoppingCart, t: "Fast Activation" },
        ].map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.t}
              className="glass flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-center"
            >
              <Icon size={16} className="text-omg-green" />
              <span className="font-body text-xs text-zinc-300">{b.t}</span>
            </div>
          );
        })}
      </div>

      {/* Response-O-Matic form */}
      <form
        encType="multipart/form-data"
        method="post"
        action="https://www.response-o-matic.com/mail.php"
        acceptCharset="UTF-8"
        data-testid="order-form"
        className="glass rounded-3xl border-omg-green/20 p-6 sm:p-8"
      >
        <input type="hidden" name="acctid" id="acctid" value="y2bd5koy5x3ae8v5" />
        <input type="hidden" name="formid" id="formid" value="2007036" />
        <input
          type="hidden"
          name="required_vars"
          id="required_vars"
          value="name,email,field-a5ba3cf448a2a4a,field-4d1c1145a781c7f"
        />

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-display text-sm font-semibold text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              data-testid="order-name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-omg-green/60"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-display text-sm font-semibold text-white"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="email"
              id="email"
              required
              data-testid="order-phone"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-omg-green/60"
              placeholder="(555) 555-5555"
            />
          </div>

          {/* Shipping Address */}
          <div>
            <label
              htmlFor="field-e79d463b74f053b"
              className="mb-2 block font-display text-sm font-semibold text-white"
            >
              Shipping Address
            </label>
            <input
              type="text"
              name="field-e79d463b74f053b"
              id="field-e79d463b74f053b"
              data-testid="order-address"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-body text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-omg-green/60"
              placeholder="Street, City, State, ZIP"
            />
          </div>

          {/* Service Term */}
          <div>
            <span className="mb-1 block font-display text-sm font-semibold text-white">
              Service Term
            </span>
            <span className="mb-3 block font-body text-xs text-omg-green">
              2 Devices per Account
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 transition-colors has-[:checked]:border-omg-green/70 has-[:checked]:bg-omg-green/5">
                <input
                  type="radio"
                  name="field-a5ba3cf448a2a4a"
                  id="field-a5ba3cf448a2a4a_0"
                  value="3 Months - $130"
                  required
                  data-testid="order-term-quarterly"
                  className="h-4 w-4 accent-omg-green"
                />
                <span className="font-body text-sm text-zinc-200">
                  3 Months — <span className="font-semibold text-white">$130</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 transition-colors has-[:checked]:border-omg-green/70 has-[:checked]:bg-omg-green/5">
                <input
                  type="radio"
                  name="field-a5ba3cf448a2a4a"
                  id="field-a5ba3cf448a2a4a_1"
                  value="1 Year - $480"
                  data-testid="order-term-annual"
                  className="h-4 w-4 accent-omg-green"
                />
                <span className="font-body text-sm text-zinc-200">
                  1 Year — <span className="font-semibold text-white">$480</span>
                </span>
              </label>
            </div>
          </div>

          {/* Devices Fully Programmed */}
          <div>
            <label
              htmlFor="field-4d1c1145a781c7f"
              className="mb-1 block font-display text-sm font-semibold text-white"
            >
              Devices Fully Programmed
            </label>
            <span className="mb-3 block font-body text-xs text-zinc-400">
              Need more TVs connected? Add another account.
            </span>
            <select
              name="field-4d1c1145a781c7f"
              id="field-4d1c1145a781c7f"
              data-testid="order-devices"
              className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-body text-sm text-white outline-none transition-colors focus:border-omg-green/60"
            >
              <option value="1 - One time fee: $50">1 — One time fee: $50</option>
              <option value="2 - One time fee: $80">2 — One time fee: $80</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label
              htmlFor="field-80a79efeae783ff"
              className="mb-2 block font-display text-sm font-semibold text-white"
            >
              Payment Method
            </label>
            <select
              name="field-80a79efeae783ff"
              id="field-80a79efeae783ff"
              data-testid="order-payment"
              className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-body text-sm text-white outline-none transition-colors focus:border-omg-green/60"
            >
              <option value="Venmo">Venmo</option>
              <option value="Zelle">Zelle</option>
              <option value="CashApp 3% Fee Added">CashApp — 3% Fee Added</option>
            </select>
          </div>

          <button
            type="submit"
            data-testid="order-submit"
            className="neon-btn flex w-full items-center justify-center gap-2 rounded-full bg-omg-green px-6 py-4 font-display text-base font-bold text-omg-void"
          >
            <ShoppingCart size={18} /> Submit Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default BuyNow;

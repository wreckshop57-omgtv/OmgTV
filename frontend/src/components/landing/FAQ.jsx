import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What devices are supported?",
    a: "Firesticks and OnnTV 4K — you'll have a fully programmed device shipped to you ready to go!",
  },
  {
    q: "Is PPV available?",
    a: "Yes. Premium pay-per-view events are included in your subscription, so you never miss a major fight or exclusive event.",
  },
  {
    q: "How quickly do I receive access?",
    a: "Activation is fast — most members are up and watching within minutes of getting started.",
  },
  {
    q: "Can I watch while traveling?",
    a: "Absolutely. Your OMGTV experience travels with you. Stream your favorite content from virtually anywhere in the world.",
  },
  {
    q: "Is there a contract?",
    a: "No contracts, ever. You stay because you love the service — cancel anytime with zero hassle.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-12 text-center">
        <span className="font-display text-xs tracking-[0.3em] text-omg-green">
          GOT QUESTIONS?
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Frequently asked
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            data-testid={`faq-item-${i}`}
            className="glass rounded-2xl border-white/10 px-5"
          >
            <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-white hover:text-omg-green hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm leading-relaxed text-zinc-400">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;

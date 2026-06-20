import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Sports Fan",
    avatar:
      "https://images.unsplash.com/photo-1610659128929-fa69328744e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc4MTkyMTc3OXww&ixlib=rb-4.1.0&q=85",
    quote:
      "I cancelled three streaming apps after switching to OMGTV. Every game, every PPV fight — all in one spot. Best decision I've made.",
  },
  {
    name: "Priya K.",
    role: "Movie Lover",
    avatar:
      "https://images.unsplash.com/photo-1614010966237-74489a16848b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxwZXJzb24lMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc4MTkyMTc3OXww&ixlib=rb-4.1.0&q=85",
    quote:
      "The movie and series library is huge and streams in perfect quality. Activation took minutes and it just works on every device.",
  },
  {
    name: "David R.",
    role: "Frequent Traveler",
    avatar:
      "https://images.pexels.com/photos/1327482/pexels-photo-1327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    quote:
      "I travel constantly and OMGTV follows me everywhere. No contracts, no hassle, just premium entertainment wherever I land.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-16 text-center">
        <span className="font-display text-xs tracking-[0.3em] text-omg-green">
          LOVED BY VIEWERS
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Join thousands who switched
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            data-testid={`testimonial-card-${i}`}
            className="card-hover glass flex flex-col rounded-2xl p-7"
          >
            <div className="mb-4 flex gap-1 text-omg-green">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="flex-1 font-body text-sm leading-relaxed text-zinc-200">
              "{t.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-omg-green/30"
              />
              <div>
                <p className="font-display text-sm font-bold text-white">
                  {t.name}
                </p>
                <p className="font-body text-xs text-zinc-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

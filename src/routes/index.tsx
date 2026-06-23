import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import botanicalImg from "@/assets/botanical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patrick & Caryl · September 14, 2025" },
      {
        name: "description",
        content:
          "Patrick and Caryl are getting married. RSVP, schedule, and travel details for our wedding day.",
      },
      { property: "og:title", content: "Patrick & Caryl · September 14, 2025" },
      { property: "og:description", content: "Join us as we say I do." },
    ],
  }),
  component: Index,
});

const WEDDING_DATE = new Date("2025-09-14T16:00:00");

function useCountdown() {
  const now = new Date();
  const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  return { days, hours, minutes };
}

function Nav() {
  const links = [
    ["Story", "#story"],
    ["Details", "#details"],
    ["Schedule", "#schedule"],
    ["RSVP", "#rsvp"],
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif italic text-lg tracking-wide">
          P &amp; C
        </a>
        <ul className="hidden md:flex gap-10 text-xs uppercase tracking-[0.28em]">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-accent transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#rsvp"
          className="text-xs uppercase tracking-[0.28em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
        >
          RSVP
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        width={1600}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/80" />
      <div className="relative z-10 text-center px-6 animate-fade-up">
        <p className="eyebrow text-primary-foreground/90 mb-8">Together with their families</p>
        <h1 className="font-serif text-primary-foreground text-7xl sm:text-8xl md:text-[10rem] leading-[0.95] tracking-tight">
          Patrick
          <span className="block italic font-light text-5xl sm:text-6xl md:text-7xl my-4 md:my-6 text-primary-foreground/90">
            &amp;
          </span>
          Caryl
        </h1>
        <div className="mt-10 flex items-center justify-center gap-4 text-primary-foreground/90 text-sm tracking-[0.32em] uppercase">
          <span className="hairline" />
          <span>Sept 14 · 2025</span>
          <span className="hairline" />
        </div>
        <p className="mt-4 text-primary-foreground/80 font-serif italic text-lg">
          Hudson Valley, New York
        </p>
      </div>
      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-[10px] uppercase tracking-[0.4em] z-10"
      >
        Scroll
      </a>
    </section>
  );
}

function Countdown() {
  const { days, hours, minutes } = useCountdown();
  const items = [
    [days, "Days"],
    [hours, "Hours"],
    [minutes, "Minutes"],
  ] as const;
  return (
    <section className="py-20 border-y border-border/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow mb-10">Counting the days</p>
        <div className="grid grid-cols-3 gap-6 md:gap-16">
          {items.map(([n, label]) => (
            <div key={label}>
              <div className="font-serif text-5xl md:text-7xl text-foreground">
                {String(n).padStart(2, "0")}
              </div>
              <div className="eyebrow mt-3">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-6">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            A quiet coffee shop, a rainy afternoon, and the rest of our lives.
          </h2>
          <div className="space-y-5 text-foreground/80 leading-relaxed max-w-md">
            <p>
              Test, both reaching for the last almond croissant. Patrick offered it to Caryl. Caryl
              offered to split it. We sat by the window and talked until the rain stopped.
            </p>
            <p>
              Since then we've moved twice, adopted a stubborn rescue terrier named Olive, and
              learned that the best decisions are usually the slowest ones.
            </p>
            <p className="font-serif italic text-lg text-foreground">
              And now, with the people we love most, we're making the next one.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <img
            src={botanicalImg}
            alt="Eucalyptus and olive branches"
            loading="lazy"
            width={1200}
            height={1400}
            className="w-full h-[28rem] md:h-[36rem] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-background px-8 py-6 border border-border">
            <p className="font-serif italic text-2xl">est. 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Details() {
  const items = [
    {
      label: "The Ceremony",
      time: "4:00 PM",
      place: "Stone Chapel at Willow Ridge",
      detail: "412 Orchard Lane, Rhinebeck, NY",
    },
    {
      label: "The Reception",
      time: "6:00 PM",
      place: "The Glasshouse Pavilion",
      detail: "Dinner, dancing, and a few surprises",
    },
    {
      label: "Dress Code",
      time: "Garden Formal",
      place: "Soft tones, comfortable shoes",
      detail: "The grounds are grass — wedges welcome",
    },
  ];
  return (
    <section id="details" className="py-28 md:py-40 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">The Day</p>
          <h2 className="font-serif text-4xl md:text-6xl">Where &amp; When</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {items.map((it) => (
            <div key={it.label} className="bg-background p-10 md:p-12">
              <p className="eyebrow mb-6">{it.label}</p>
              <p className="font-serif text-3xl md:text-4xl mb-3">{it.time}</p>
              <p className="font-medium text-foreground mb-2">{it.place}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const events = [
    ["3:30", "Guests arrive", "Welcome drinks on the lawn"],
    ["4:00", "Ceremony", "Stone Chapel"],
    ["4:45", "Cocktail hour", "Garden terrace"],
    ["6:00", "Dinner", "Glasshouse Pavilion"],
    ["8:00", "First dance", "And then everyone's dance"],
    ["11:30", "Send-off", "Sparklers under the stars"],
  ];
  return (
    <section id="schedule" className="py-28 md:py-40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">An Evening Together</p>
          <h2 className="font-serif text-4xl md:text-6xl">Schedule</h2>
        </div>
        <ol className="relative">
          {events.map(([time, title, sub], i) => (
            <li
              key={i}
              className="grid grid-cols-[5rem_1fr] gap-8 py-7 border-b border-border last:border-b-0"
            >
              <div className="font-serif text-2xl text-accent">{time}</div>
              <div>
                <div className="font-medium text-foreground">{title}</div>
                <div className="text-sm text-muted-foreground mt-1">{sub}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="py-28 md:py-40 bg-foreground text-background">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="eyebrow text-background/60 mb-4">Kindly Reply</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6">RSVP</h2>
          <p className="text-background/70 font-serif italic">Please respond by August 1, 2025</p>
        </div>

        {submitted ? (
          <div className="text-center py-16 border border-background/20 px-8">
            <p className="font-serif italic text-3xl mb-4">Thank you.</p>
            <p className="text-background/70">
              {attending === "yes"
                ? "We can't wait to celebrate with you."
                : "We'll miss you, but appreciate you letting us know."}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-8">
            <Field label="Full name">
              <input required type="text" name="name" className="rsvp-input" />
            </Field>
            <Field label="Email">
              <input required type="email" name="email" className="rsvp-input" />
            </Field>

            <fieldset>
              <legend className="eyebrow text-background/60 mb-4">Will you attend?</legend>
              <div className="grid grid-cols-2 gap-3">
                {(["yes", "no"] as const).map((v) => (
                  <button
                    type="button"
                    key={v}
                    onClick={() => setAttending(v)}
                    className={`py-4 border text-sm uppercase tracking-[0.28em] transition-colors ${
                      attending === v
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-background/30 hover:border-background"
                    }`}
                  >
                    {v === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                  </button>
                ))}
              </div>
            </fieldset>

            {attending === "yes" && (
              <>
                <Field label="Number of guests (including you)">
                  <input
                    required
                    type="number"
                    min={1}
                    max={4}
                    defaultValue={1}
                    name="guests"
                    className="rsvp-input"
                  />
                </Field>
                <Field label="Dietary restrictions or notes">
                  <textarea name="notes" rows={3} className="rsvp-input resize-none" />
                </Field>
              </>
            )}

            <button
              type="submit"
              disabled={!attending}
              className="w-full py-5 bg-background text-foreground uppercase tracking-[0.32em] text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send Response
            </button>
          </form>
        )}
      </div>

      <style>{`
        .rsvp-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid color-mix(in oklab, var(--background) 30%, transparent);
          padding: 0.75rem 0;
          color: var(--background);
          font-family: var(--font-sans);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .rsvp-input:focus {
          border-bottom-color: var(--accent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-background/60 block mb-2">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="py-16 text-center">
      <p className="font-serif italic text-2xl mb-3">Patrick &amp; Caryl</p>
      <p className="eyebrow">September 14 · 2025 · Hudson Valley</p>
      <p className="mt-8 text-xs text-muted-foreground">
        Questions? Reach us at{" "}
        <a href="mailto:hello@patrickandcaryl.com" className="underline hover:text-accent">
          hello@patrickandcaryl.com
        </a>
      </p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Countdown />
      <Story />
      <Details />
      <Schedule />
      <RSVP />
      <Footer />
    </div>
  );
}

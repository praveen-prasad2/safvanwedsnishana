import WeddingCountdown from "./WeddingCountdown";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const VENUE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=TKH+Convention+Centre+Venniyur+Kerala";

function VintageDivider() {
  return (
    <div className="flex items-center justify-center gap-2 w-full my-2">
      <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent via-gold/50 to-gold/30" />
      <svg
        className="h-2 w-2 text-gold/70 shrink-0"
        viewBox="0 0 12 12"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
      </svg>
      <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent via-gold/50 to-gold/30" />
    </div>
  );
}

export default function WeddingInvitation() {
  return (
    <section className="h-dvh w-full overflow-hidden bg-black bg-cover bg-center flex items-center justify-center p-3 sm:p-4">
      <article className="invitation-card group relative flex h-full max-h-full w-full max-w-[min(128mm,100%)] flex-col bg-[url('/frame.jpeg')] bg-cover bg-center bg-no-repeat shadow-card transition-all duration-500 ease-out hover:shadow-card-hover">
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-7 sm:px-8 sm:py-9 mx-3 my-4 sm:mx-5 sm:my-6">
          <header className="flex shrink-0 flex-col items-center text-center">
            <Image
              src="/arabic.svg"
              alt="Bismillah calligraphy"
              width={130}
              height={40}
              className="opacity-85 mb-1.5 h-auto w-[7.5rem] sm:w-[8.5rem]"
              priority
            />
            <p className="font-marcellus text-[0.45rem] sm:text-[0.5rem] tracking-[0.18em] uppercase text-charcoal/45 leading-snug max-w-[300px] mb-4">
              In the Name of Allah,
              <br />
              the Most Beneficent, the Most Merciful
            </p>
          </header>

          <section className="flex shrink-0 flex-col items-center text-center gap-0.5">
            <h1 className="font-rustic text-[2.5rem] sm:text-[2.75rem] text-charcoal leading-none tracking-wide">
              Safvan
            </h1>
            <FaHeart
              className="text-rose-300/80 text-lg my-0.5 animate-pulse mt-5 -rotate-12"
              aria-hidden="true"
            />
            <h1 className="font-rustic text-[2.5rem] sm:text-[2.75rem] text-charcoal leading-tight tracking-wide">
              Nishana Sherin
            </h1>
          </section>

          <section className="flex flex-col shrink-0 w-full text-center">
            <p className="font-marcellus text-[0.5rem] tracking-[0.22em] uppercase text-charcoal/45 mb-1">
              Wedding Celebration on
            </p>
            <p className="font-playfair text-2xl sm:text-3xl font-medium tracking-[0.1em] text-charcoal leading-none">
              July 06
            </p>
            <p className="font-playfair text-base sm:text-lg tracking-[0.18em] text-charcoal/65 mt-0.5">
              2026
            </p>
            <p className="font-marcellus text-[0.55rem] tracking-[0.25em] uppercase text-charcoal/45 mt-1">
              Monday
            </p>

            <VintageDivider />

            <div className="mb-2">
              <p className="font-marcellus text-[0.5rem] tracking-[0.2em] uppercase text-charcoal/40 mb-1">
                Venue
              </p>
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-marcellus text-xs sm:text-sm tracking-[0.16em] uppercase text-charcoal/75">
                  TKH Auditorium
                </span>
                <span className="font-marcellus text-[0.6rem] tracking-[0.22em] uppercase text-charcoal/50">
                  Venniyur
                </span>
                <a
                  href={VENUE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 font-marcellus text-[0.55rem] tracking-[0.2em] uppercase text-charcoal/70 border border-gold/50 bg-cream/60 px-3 py-1 rounded-sm transition-colors duration-300 hover:bg-gold/10 hover:border-gold/70 hover:text-charcoal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60"
                  aria-label="Get directions to TKH Auditorium Venniyur"
                >
                  Get Direction
                </a>
              </div>
            </div>

            <WeddingCountdown />
          </section>

          <footer className="shrink-0 text-center">
            <p className="font-cormorant italic text-xs sm:text-sm text-charcoal/35 tracking-wide">
              you are invited
            </p>
          </footer>
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-b from-gold-light/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        />
      </article>
    </section>
  );
}

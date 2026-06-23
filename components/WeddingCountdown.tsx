"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date(2026, 6, 6, 0, 0, 0);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0 min-w-[2rem] sm:min-w-[2.25rem]">
      <span className="font-playfair text-lg sm:text-xl text-charcoal tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-marcellus text-[0.45rem] tracking-[0.16em] uppercase text-charcoal/40">
        {label}
      </span>
    </div>
  );
}

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const isPast = Object.values(timeLeft).every((v) => v === 0);

  return (
    <div className="text-center">
      <p className="font-marcellus text-[0.5rem] tracking-[0.2em] uppercase text-charcoal/45 mb-2">
        {isPast ? "The day has arrived" : "Counting down to"}
      </p>
      {!isPast && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="font-playfair text-sm text-gold/50 -mt-3">·</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="font-playfair text-sm text-gold/50 -mt-3">·</span>
          <CountdownUnit value={timeLeft.minutes} label="Mins" />
          <span className="font-playfair text-sm text-gold/50 -mt-3">·</span>
          <CountdownUnit value={timeLeft.seconds} label="Secs" />
        </div>
      )}
    </div>
  );
}

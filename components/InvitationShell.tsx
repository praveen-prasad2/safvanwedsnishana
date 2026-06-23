"use client";

import { useEffect, useState } from "react";
import FlowerLoader from "./FlowerLoader";
import WeddingInvitation from "./WeddingInvitation";

const ASSETS = ["/bg-pattern.jpg", "/frame.jpeg", "/arabic.svg"];
const MAX_LOAD_MS = 5000;

function preloadAssets() {
  return Promise.all(
    ASSETS.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  );
}

export default function InvitationShell() {
  const [ready, setReady] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const maxDelay = new Promise<void>((resolve) => setTimeout(resolve, MAX_LOAD_MS));

    Promise.race([preloadAssets(), maxDelay]).then(() => {
      setReady(true);
      setTimeout(() => setHideLoader(true), 600);
    });
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-cream transition-opacity duration-700 ease-out ${
          ready ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${hideLoader ? "hidden" : ""}`}
        aria-hidden={ready}
        aria-live="polite"
        aria-busy={!ready}
      >
        <div className="absolute inset-0 bg-[url('/bg-pattern.jpg')] bg-cover bg-center opacity-30" />
        <FlowerLoader />
      </div>

      <div
        className={`h-full transition-opacity duration-700 ease-in ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <WeddingInvitation />
      </div>
    </div>
  );
}

"use client";

import { img } from "@/lib/utils";

const logos = [
  "Gett", "Hysolate", "Atera-3", "Lunar", "Pendo", "Optitex", "Carbyne",
  "Pipelbiz", "Ummanu", "LQFI", "Real", "Grin", "Careology", "Aetrex",
  "Aerospheres", "Perception", "Mend",
];

export default function ClientLogos() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 overflow-hidden">
      <p className="text-center text-text-muted text-sm uppercase tracking-widest mb-10">
        Trusted by innovative teams
      </p>
      <div className="relative">
        <div
          className="flex items-center gap-16 w-max"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {doubled.map((name, i) => (
            <img
              key={`${name}-${i}`}
              src={img(`/logos/${name}.svg`)}
              alt={name}
              className="h-8 opacity-40 hover:opacity-80 transition-all duration-300 [filter:brightness(0)_invert(1)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

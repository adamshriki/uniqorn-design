"use client";

import { img } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <img src={img("/logo.svg")} alt="Uniqorn Design" className="h-6" />
          <nav className="flex gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-text-muted hover:text-text text-sm transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="text-text-muted text-sm text-center md:text-right">
          <p>Made with ❤️ by Uniqorn Design</p>
          <p className="mt-1">© 2026 Uniqorn Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

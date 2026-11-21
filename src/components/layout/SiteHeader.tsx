import { useState } from "react";
import Icon from "../ui/Icon";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#102b29]/8 bg-[#f8faf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Common Ground home">
          <img src="/gat4ml-icon.png" alt="" className="size-11 object-contain" />
          <span className="text-[18px] font-bold tracking-[-0.03em]">GAT4ML</span>
        </a>

        <nav
          className="hidden items-center gap-6 text-sm font-semibold text-[#102b29]/70 md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          <a className="transition-colors hover:text-[#377197]" href="#about-us">
            ABOUT US
          </a>
          <a className="transition-colors hover:text-[#377197]" href="#approach">
            NEWS
          </a>
          <a className="transition-colors hover:text-[#377197]" href="#progress">
            PROGRESS
          </a>
          <a className="transition-colors hover:text-[#377197]" href="#publications">
            PUBLICATIONS
          </a>
          <a className="transition-colors hover:text-[#377197]" href="#insights">
            TEAM
          </a>
          <a className="transition-colors hover:text-[#377197]" href="#about">
            CONTACT
          </a>
        </nav>

        <button
          className="grid size-11 place-items-center rounded-full border border-[#102b29]/15 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </div>
      {menuOpen && (
        <nav
          className="absolute inset-x-0 top-full border-b border-[#102b29]/10 bg-[#f8faf8] p-5 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {[
              { label: "ABOUT US", href: "#about-us" },
              { label: "NEWS", href: "#approach" },
              { label: "PROGRESS", href: "#progress" },
              { label: "PUBLICATIONS", href: "#publications" },
              { label: "TEAM", href: "#insights" },
              { label: "CONTACT", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

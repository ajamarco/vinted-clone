"use client";

import { useState } from "react";

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4 lg:gap-6">
          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Clearout home">
            <span className="w-8 h-8 rounded-lg bg-[#005d4b] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-150">
              <i className="fa-solid fa-rotate text-white text-sm" aria-hidden="true" />
            </span>
            <span className="text-[1.35rem] font-extrabold tracking-tight text-[#005d4b] leading-none select-none">Clearout</span>
          </a>

          {/* ── Search Bar ── */}
          <div className="flex-1 min-w-0">
            <div
              className={[
                "relative flex items-center rounded-full border transition-all duration-200",
                searchFocused ? "border-[#005d4b] bg-white shadow-[0_0_0_3px_rgba(0,93,75,0.12)]" : "border-gray-200 bg-gray-100 hover:border-gray-300",
              ].join(" ")}
            >
              <i
                className={[
                  "fa-solid fa-magnifying-glass absolute left-4 text-sm pointer-events-none transition-colors duration-200",
                  searchFocused ? "text-[#005d4b]" : "text-gray-400",
                ].join(" ")}
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search for brands, items, or sellers..."
                aria-label="Search Clearout"
                className="w-full bg-transparent pl-10 pr-5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none rounded-full caret-[#005d4b]"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* ── Action Area ── */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Sell Now */}
            <button
              type="button"
              className="bg-[#005d4b] text-white text-sm font-semibold px-5 py-2.5 rounded-full
                         hover:bg-[#00705a] hover:shadow-md hover:-translate-y-px
                         active:translate-y-0 active:shadow-sm
                         transition-all duration-150 whitespace-nowrap focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-[#005d4b] focus-visible:ring-offset-2"
            >
              <i className="fa-solid fa-tag mr-1.5 text-xs" aria-hidden="true" />
              Sell Now
            </button>

            {/* User Profile */}
            <button
              type="button"
              aria-label="Your account"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#005d4b]
                         hover:bg-[#005d4b]/10 active:bg-[#005d4b]/20
                         transition-colors duration-150 focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-[#005d4b] focus-visible:ring-offset-2"
            >
              <i className="fa-solid fa-circle-user text-[1.55rem]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

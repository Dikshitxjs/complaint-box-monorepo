"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Contact"];

  return (
    <>
      {/* NAVBAR */}
      <nav
            role="navigation"
            className="sticky top-0 z-50 bg-gradient-to-r
             from-slate-900 via-slate-800 to-slate-900
            shadow-md backdrop-blur"
            >
        <div className="mx-auto max-w-7xl h-18 flex items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* BRAND */}
          <Link
                href="/"
                className="flex items-center shrink-0 rounded-lg
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
  {/* LOGO */}
  <div className="relative w-20 h-20 sm:w-20 sm:h-20 shrink-0">
    <Image
      src="/logo.png"
      alt="ComplaintBox logo"
      fill
      priority
      className="object-contain drop-shadow-md"
    />
  </div>

  {/* BRAND TEXT */}
  <span className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-none">
    <span className="text-blue-400">Complaint</span>Box
  </span>
</Link>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative font-medium text-white/80 transition
                  hover:text-white rounded-md
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  after:absolute after:left-0 after:-bottom-1 after:h-0.5
                  after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {item}
              </button>
            ))}

            <Link
              href="/login"
              className="rounded-lg bg-blue-500 px-6 py-2.5 font-semibold text-white
                shadow transition
                hover:bg-blue-600 hover:shadow-lg hover:-translate-y-px
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Login
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-lg border border-white/30 px-3 py-2
              text-white transition hover:bg-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 w-full
          bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
          border-t border-white/10 transition-transform duration-300 md:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{ top: "4.5rem" }}
      >
        <div className="space-y-4 py-6 text-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="block w-full py-3 text-white/80 transition hover:text-white
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item}
            </button>
          ))}

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3 font-semibold text-blue-400 transition hover:text-blue-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

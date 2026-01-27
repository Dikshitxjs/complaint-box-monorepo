"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AboutImg from "@/public/1f8779d7-b23f-402d-a7b8-e12e22dad069.png";

export default function HeroSection() {
  // ======= Stats Count-Up Card =======
  const StatCard = ({ label, value }: { label: string; value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(value / 40);
        if (start >= value) {
          start = value;
          clearInterval(interval);
        }
        setCount(start);
      }, 25);
      return () => clearInterval(interval);
    }, [value]);

    return (
      <div className="bg-[#14184A] rounded-xl p-4 sm:p-5 text-center">
        <h3 className="text-white text-2xl sm:text-3xl font-bold">
          {count}+
        </h3>
        <p className="mt-2 text-white text-xs sm:text-sm">
          {label}
        </p>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#0C0F2D] text-white overflow-hidden">
      {/* ================= HERO GRID ================= */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-10 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* ================= VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onCanPlay={(e) => {
                const video = e.currentTarget;
                if (video.paused) video.play().catch(() => {});
              }}
            >
              <source src="/Video.mp4" type="video/mp4" />
            </video>

            {/* Soft blend layer */}
            <div className="absolute inset-0 bg-[#0C0F2D]/10 pointer-events-none" />

            {/* Gradients */}
            <div className="absolute top-0 left-0 w-full h-20 sm:h-24 bg-linear-to-b from-[#0C0F2D] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-28 sm:h-32 bg-linear-to-t from-[#0C0F2D] via-[#0C0F2D]/40 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 h-full w-8 sm:w-10 bg-linear-to-r from-[#0C0F2D] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-10 sm:w-14 bg-linear-to-l from-[#0C0F2D] to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* ================= TEXT ================= */}
        <div className="order-2 md:order-1 text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold leading-snug"
          >
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              Speak Up. Be Heard.
            </span>
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-1">
              Get Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed"
          >
            A secure place to raise complaints and receive verified
            responses from officials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <Link
              href="/login"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition text-sm text-center"
            >
              Get Started
            </Link>

            <Link
              href="/queries"
              className="px-6 py-3 border border-gray-400 hover:bg-white hover:text-black rounded-lg font-semibold transition text-sm text-center"
            >
              Browse Queries
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="mt-12 sm:mt-16 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <StatCard label="Complaints Filed" value={1200} />
          <StatCard label="Resolved Cases" value={980} />
          <StatCard label="Active Users" value={450} />
          <StatCard label="Authorities Connected" value={35} />
        </div>
      </div>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="mt-12 sm:mt-16 max-w-7xl mx-auto px-5 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          {/* Text */}

          
          <div className="md:flex-1 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              About Complaint Box
            </h2>
            <p className="text-white leading-relaxed text-sm sm:text-base mb-4">
              Complaint Box bridges the gap between citizens and authorities.
              It ensures transparency, accountability, and faster resolutions
              through a secure digital platform.
            </p>
            <Link
              href="/about"
              className="inline-block mt-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-sm transition"
            >
              Know More
            </Link>
          </div>
{/* Image - Balanced & Responsive */}
          <div className="md:flex-1 rounded-3xl flex justify-center md:justify-end relative w-10 h-48 sm:w-48 md:w-56 lg:w-64 aspect-[4/3] hidden sm:flex">
            <Image
              src={AboutImg}
              alt="About Complaint Box"
              className="object-contain "
              fill
            />
          </div>
          
        </motion.div>
      </section>
    </section>
  );
}

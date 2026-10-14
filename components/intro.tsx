"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/Headshot2.png"
              width="192"
              height="192"
              priority={true}
              alt="Jake Gardner Portrait"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <span className="absolute bottom-0 right-0  text-4xl">👋</span>
        </div>
      </div>
    </section>
  );
}

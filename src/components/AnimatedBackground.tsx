"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Slow-moving gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #7C3AED, transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 200, 100, 0],
          y: [0, 100, 250, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #06B6D4, transparent 70%)",
          bottom: "10%",
          right: "-5%",
        }}
        animate={{
          x: [0, -150, -50, 0],
          y: [0, -100, -200, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #10B981, transparent 70%)",
          top: "40%",
          left: "30%",
        }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -150, 50, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #F59E0B, transparent 70%)",
          top: "60%",
          right: "20%",
        }}
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

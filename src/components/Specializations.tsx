"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { img } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const specs = [
  {
    title: "SaaS",
    subtitle: "Software as a Service",
    description:
      "By creating an intuitive and visually appealing design, humans are more likely to engage with your product and stay longer, resulting in increased user retention. Through an iterative design process, focusing on user behavior insights, we can effectively meet both business objectives and customers' needs.",
    image: "/images/spec-saas.png",
    accent: "#7C3AED",
    projects: 18,
  },
  {
    title: "Cybersecurity",
    subtitle: "Security Products",
    description:
      "Identifying and mitigating vulnerabilities, improving usability, enhancing security measures, educating users, and increasing user adoption by creating intuitive interfaces and well-crafted user flows can increase your product's engagement and ease of use.",
    image: "/images/spec-cyber.png",
    accent: "#06B6D4",
    projects: 12,
  },
  {
    title: "Healthtech",
    subtitle: "Digital Health",
    description:
      "Researching the needs of patients and healthcare providers to create interfaces that support better communication, decision-making, and outcomes, with the goal of improving the experience, enhancing functionality, increasing adoption, meeting compliance standards (HIPAA & GDPR), and enhancing brand value.",
    image: "/images/spec-health.png",
    accent: "#10B981",
    projects: 9,
  },
  {
    title: "Fintech / Crypto",
    subtitle: "Financial Technology",
    description:
      "Increasing trust with sensitive financial information and transactions, improving user experience with secure authentication payment methods, encryption, and access control features, as well as tailored data visualizations / infographics to simplify complicated data.",
    image: null,
    accent: "#F59E0B",
    projects: 14,
  },
];

function SpecCard({
  spec,
  index,
}: {
  spec: (typeof specs)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="group relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10"
        style={{ background: `radial-gradient(ellipse at center, ${spec.accent}15, transparent 70%)` }}
      />

      <div
        className={`relative flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center p-6 lg:p-10 rounded-3xl border border-border-light hover:border-opacity-50 transition-all duration-500 bg-bg-surface/30 backdrop-blur-sm`}
        style={{
          borderColor: `${spec.accent}20`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${spec.accent}60`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${spec.accent}20`;
        }}
      >
        {/* Image side */}
        <motion.div style={{ y }} className="w-full lg:w-1/2 flex-shrink-0">
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            style={{
              boxShadow: `0 20px 60px ${spec.accent}20`,
            }}
          >
            {spec.image ? (
              <img
                src={img(spec.image)}
                alt={spec.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${spec.accent}30, ${spec.accent}10)`,
                }}
              >
                <span
                  className="font-display text-7xl font-bold opacity-20"
                  style={{ color: spec.accent }}
                >
                  {spec.title.charAt(0)}
                </span>
              </div>
            )}
            {/* Accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(90deg, ${spec.accent}, transparent)` }}
            />
          </div>
        </motion.div>

        {/* Content side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span
            className="text-sm font-medium uppercase tracking-widest mb-2"
            style={{ color: spec.accent }}
          >
            {spec.subtitle}
          </span>
          <h3 className="font-display text-3xl lg:text-5xl font-bold mb-6">
            {spec.title}
          </h3>
          <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8">
            {spec.description}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/uniqorn-design/work"
              className="inline-flex items-center gap-2 font-medium group/link"
              style={{ color: spec.accent }}
            >
              See projects
              <ArrowRight
                size={18}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </a>
            <span className="text-text-muted text-sm">
              {spec.projects} projects
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Specializations() {
  return (
    <section
      className="py-32 px-6 relative"
      id="about"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
            We specialize in{" "}
            <span className="bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent">
              what matters
            </span>
          </h2>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            Deep domain expertise across the industries that need great design the most.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {specs.map((spec, i) => (
            <SpecCard key={spec.title} spec={spec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Learn our mission and approach to curating practical design
          principles, patterns, and resources for building clear, consistent,
          accessible products.`;

function page() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build Designs <br /> the Right Way
          <TextGenerateEffect
            words={words}
          />
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default page

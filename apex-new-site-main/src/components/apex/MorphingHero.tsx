import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Database } from "lucide-react";
import { Suspense, useState, useCallback } from "react";
import { MorphingParticlesV2, type Phase } from "@/components/animations/MorphingParticlesV2";
import { type TabId } from "./TabNavigation";

interface MorphingHeroProps {
  onTabChange?: (tab: TabId) => void;
}

const MorphingHero = ({ onTabChange }: MorphingHeroProps) => {
  const [phase, setPhase] = useState<Phase>("idle");

  const handlePhaseChange = useCallback((newPhase: Phase) => {
    setPhase(newPhase);
  }, []);

  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-20 md:min-h-[70vh]">

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="mb-6"
            >
              <p className="font-mono text-5xl font-light uppercase tracking-[0.2em] text-primary md:text-6xl">
                ALICE
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-mono text-4xl font-light leading-[1.15] tracking-tightest text-foreground md:text-5xl lg:text-6xl"
            >
              The Award-Winning Agent
              <br />
              for Capital Markets
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground"
            >
              Trusted by Global Institutions managing $10T+ in combined AUM. Powered by APEX:E3
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => onTabChange?.("ALICE")}
                className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary/20"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onTabChange?.("ALICE")}
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                See Platform
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 flex flex-wrap items-center gap-5 text-xs text-white/50"
            >
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary/70" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="h-3.5 w-3.5 text-primary/70" />
                <span>On-Premise</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-primary/70" />
                <span>$10T+ AUM</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative hidden h-[500px] lg:block">
            <Suspense
              fallback={
                <div className="h-full w-full animate-pulse rounded-lg bg-slate-800/50" />
              }
            >
              <MorphingParticlesV2
                className="h-full w-full"
                onPhaseChange={handlePhaseChange}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorphingHero;

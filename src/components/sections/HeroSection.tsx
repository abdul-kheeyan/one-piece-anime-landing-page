import type { MouseEventHandler } from 'react';
import { motion, type MotionValue, type MotionProps } from 'framer-motion';
import { Anchor, ArrowRight } from 'lucide-react';
import { imagePath } from '../../data/content';

type HeroSectionProps = {
  pointer: { x: number; y: number };
  prefersReducedMotion: boolean;
  onPointerMove: MouseEventHandler<HTMLDivElement>;
  heroY: MotionValue<number>;
  heroScale: MotionValue<number>;
};

export function HeroSection({ pointer, prefersReducedMotion, onPointerMove, heroY, heroScale }: HeroSectionProps) {
  const imageMotion: MotionProps = prefersReducedMotion ? {} : {
    animate: { x: pointer.x * 1.2, y: pointer.y * 1.2, rotate: pointer.x * 0.28 },
    transition: { type: 'spring', stiffness: 80, damping: 15 },
  };

  return (
    <section id="home" className="relative isolate min-h-[72vh] overflow-hidden bg-[#04131d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(64,138,181,0.32),_transparent_30%),linear-gradient(180deg,_rgba(2,10,18,0.12)_0%,_rgba(2,10,18,0.65)_100%)]" />
      <div className="absolute inset-0 opacity-70">
        <div className="wave wave-one" />
        <div className="wave wave-two" />
        <div className="fog" />
      </div>

      <motion.div
        style={{ y: heroY, scale: heroScale }}
        className="absolute inset-0 h-full w-full"
        onMouseMove={onPointerMove}
      >
        <motion.img
          src={imagePath('41.jpeg')}
          alt="Luffy"
          {...imageMotion}
          className="h-full w-full object-cover object-center drop-shadow-[0_30px_60px_rgba(255,76,56,0.35)]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center justify-center px-4 pb-4 pt-10 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-white/5 px-4 py-2 text-[0.6rem] uppercase tracking-[0.42em] text-amber-100/80 backdrop-blur-sm">
            <Anchor className="h-3.5 w-3.5 text-amber-300" />
            Grand voyage
          </div>
          <h1 className="font-serif text-5xl uppercase tracking-[0.28em] text-amber-100 sm:text-6xl lg:text-8xl">
            Luffy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm uppercase tracking-[0.38em] text-slate-200/90 sm:text-base">
            Set sail beyond the horizon. Chase dreams. Find your crew. Become free.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#story" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-amber-500 px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-white shadow-[0_22px_50px_rgba(220,88,30,0.38)] transition hover:scale-[1.02]">
              Enter the Grand Line
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#crew" className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-slate-950/30 px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-slate-100 backdrop-blur-sm transition hover:border-amber-200/40 hover:text-amber-200">
              Meet the Crew
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.5em] text-white/70">
        Scroll
      </div>
      <div className="absolute bottom-4 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
    </section>
  );
}

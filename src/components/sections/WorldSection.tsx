import { motion } from 'framer-motion';
import { MapPinned, Sailboat } from 'lucide-react';
import type { WorldStop } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader';

type WorldSectionProps = {
  worldStops: WorldStop[];
  prefersReducedMotion: boolean;
};

export function WorldSection({ worldStops, prefersReducedMotion }: WorldSectionProps) {
  return (
    <section id="world" className="relative overflow-hidden bg-[#061821] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="World"
          title="Grand Line"
          eyebrowClassName="text-sky-200/75"
          titleClassName="text-white"
          trailing={(
            <>
              <MapPinned className="h-4 w-4 text-sky-300" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em]">Route map</span>
            </>
          )}
        />

        <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/10 bg-[radial-gradient(circle_at_center,_rgba(30,130,176,0.35),_rgba(3,14,20,0.96)_62%)] p-6 shadow-[0_32px_90px_rgba(1,17,27,0.8)] md:p-10">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(116,186,219,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(116,186,219,0.08) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

          <div className="relative min-h-[540px] overflow-hidden rounded-[1.5rem] border border-sky-100/10 bg-slate-950/15">
            <div className="absolute left-[12%] top-[15%] h-52 w-52 rounded-full border border-sky-200/10 bg-sky-300/5 blur-3xl" />
            <div className="absolute left-[60%] top-[24%] h-44 w-44 rounded-full border border-sky-200/10 bg-indigo-300/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,72,104,0.8),_transparent_50%)]" />

            <div className="absolute left-[15%] top-[28%] h-[2px] w-[68%] rotate-[18deg] bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
            <div className="absolute left-[22%] top-[52%] h-[2px] w-[58%] rotate-[-12deg] bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
            <div className="absolute left-[46%] top-[18%] h-[2px] w-[42%] rotate-[8deg] bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

            <motion.div
              animate={prefersReducedMotion ? {} : { x: [0, 20, 0], y: [0, -8, 0] }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
              className="absolute left-[18%] top-[65%] z-20 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-[0.55rem] uppercase tracking-[0.26em] text-sky-100"
            >
              <Sailboat className="h-4 w-4 text-amber-300" />
              Straw Hat
            </motion.div>

            {worldStops.map((stop) => (
              <div key={stop.name} className="absolute" style={{ left: stop.x, top: stop.y }}>
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]" />
                  <span className="text-[0.57rem] uppercase tracking-[0.22em] text-sky-100/80">{stop.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

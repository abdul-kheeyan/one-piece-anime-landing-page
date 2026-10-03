import { AnimatePresence, motion } from 'framer-motion';
import { Compass, Sword } from 'lucide-react';
import type { StoryArc } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader';

type StorySectionProps = {
  storyArcs: StoryArc[];
  activeArc: number;
  activeStory: StoryArc;
  onSelectArc: (index: number) => void;
};

export function StorySection({ storyArcs, activeArc, activeStory, onSelectArc }: StorySectionProps) {
  return (
    <section id="story" className="relative overflow-hidden bg-[#f2ebdc] px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,162,90,0.18),_transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Journey"
          title="Saga Timeline"
          eyebrowClassName="text-slate-700"
          titleClassName="text-slate-900"
          trailing={(
            <>
              <Compass className="h-4 w-4 text-amber-700" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em]">Grand Line</span>
            </>
          )}
        />

        <div className="mb-10 flex flex-wrap gap-3">
          {storyArcs.map((arc, index) => (
            <button
              key={arc.title}
              type="button"
              onClick={() => onSelectArc(index)}
              className={`rounded-full border px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em] transition ${activeArc === index ? 'border-amber-700 bg-slate-900 text-amber-100' : 'border-slate-700/30 bg-white/50 text-slate-700 hover:border-slate-700/60'}`}
            >
              {arc.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.title}
            initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(12px)' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="grid gap-8 rounded-[2rem] border border-slate-800/10 bg-[#f8f2e8] p-6 shadow-[0_30px_70px_rgba(27,18,9,0.12)] md:grid-cols-[1.1fr_0.9fr] md:p-10"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img src={activeStory.image} alt={activeStory.title} className="h-full min-h-[320px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-700/10 to-transparent" />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.38em] text-slate-600">{activeStory.years}</p>
              <h3 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-slate-900">{activeStory.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">{activeStory.description}</p>
              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-700">
                <Sword className="h-4 w-4 text-amber-700" />
                The crew grows stronger.
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

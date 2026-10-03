import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { DevilFruit } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader';

type DevilFruitSectionProps = {
  devilFruits: DevilFruit[];
  prefersReducedMotion: boolean;
};

export function DevilFruitSection({ devilFruits, prefersReducedMotion }: DevilFruitSectionProps) {
  return (
    <section id="devil-fruits" className="relative bg-[#071621] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Power"
          title="Devil Fruits"
          eyebrowClassName="text-sky-200/75"
          titleClassName="text-white"
          trailing={(
            <>
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em]">Mystic abilities</span>
            </>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {devilFruits.map((fruit, index) => (
            <motion.article
              key={fruit.name}
              whileHover={prefersReducedMotion ? {} : { y: -8, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 180, damping: 16 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_60px_rgba(11,17,27,0.5)]"
            >
              <div className={`absolute inset-x-4 top-0 h-32 rounded-b-[50%] bg-gradient-to-br ${fruit.accent} opacity-70 blur-2xl`} />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-3">
                <img src={fruit.image} alt={fruit.name} className="h-64 w-full rounded-[1rem] object-cover transition duration-500 group-hover:scale-105" />
                <div className="mt-5 flex items-center justify-between gap-2">
                  <span className="text-[0.62rem] uppercase tracking-[0.35em] text-sky-200/80">{fruit.type}</span>
                  <span className="rounded-full border border-sky-300/20 bg-sky-200/10 px-2 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-sky-100">{index + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[0.12em] text-white">{fruit.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{fruit.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

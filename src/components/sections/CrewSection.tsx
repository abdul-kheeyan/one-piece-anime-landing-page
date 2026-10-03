import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { CircularTestimonials } from '../ui/circular-testimonials';
import type { CrewMember } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader';

type CrewSectionProps = {
  crew: CrewMember[];
  activeMember: CrewMember;
  activeCrew: number;
  onSelectCrew: (index: number) => void;
};

export function CrewSection({ crew, activeMember, activeCrew, onSelectCrew }: CrewSectionProps) {
  return (
    <section id="crew" className="relative bg-[#091a27] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Crew"
          title="Straw Hat Pirates"
          eyebrowClassName="text-amber-200/80"
          titleClassName="text-white"
          trailing={(
            <>
              <Star className="h-4 w-4" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em]">New World</span>
            </>
          )}
        />

        <motion.div viewport={{ once: true, amount: 0.25 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <CircularTestimonials
            testimonials={crew.map((member) => ({ ...member, designation: member.role, quote: member.description }))}
            autoplay
            colors={{ name: '#f7f7ff', designation: '#e4c88e', testimony: '#f5f3f0', arrowBackground: '#0d2030', arrowForeground: '#f7d99c', arrowHoverBackground: '#d6452d' }}
            fontSizes={{ name: '28px', designation: '16px', quote: '20px' }}
          />
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            key={activeMember.name}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative self-start overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_28px_72px_rgba(2,8,18,0.7)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,89,30,0.2),_transparent_38%)]" />
            <div className="relative grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-amber-200/20 bg-slate-900">
                <img src={activeMember.src} alt={activeMember.name} className="h-full min-h-[280px] w-full object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-[0.62rem] uppercase tracking-[0.45em] text-amber-200/75">New World crew</p>
                <h3 className="text-3xl uppercase tracking-[0.14em] text-white sm:text-4xl">{activeMember.name}</h3>
                <div className="inline-flex rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1 text-[0.58rem] uppercase tracking-[0.28em] text-amber-100">{activeMember.role}</div>
                <p className="text-base leading-7 text-slate-300">{activeMember.description}</p>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-300">
                  <span className="text-amber-300">Bounty</span>
                  <span>{activeMember.bounty}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {crew.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => onSelectCrew(index)}
                className={`rounded-[1.2rem] border p-3 text-left transition ${activeCrew === index ? 'border-amber-300/40 bg-amber-300/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
              >
                <img src={member.src} alt={member.name} className="h-24 w-full rounded-xl object-cover" />
                <p className="mt-3 text-[0.55rem] uppercase tracking-[0.25em] text-slate-300">{member.role}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-white">{member.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

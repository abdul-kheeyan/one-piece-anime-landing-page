import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import type { CrewMember } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader';

type BountySectionProps = {
  crew: CrewMember[];
  prefersReducedMotion: boolean;
};

export function BountySection({ crew, prefersReducedMotion }: BountySectionProps) {
  return (
    <section id="bounties" className="relative bg-[#f0e9d9] px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Wanted"
          title="Bounties"
          eyebrowClassName="text-slate-700"
          titleClassName="text-slate-900"
          trailing={(
            <>
              <Shield className="h-4 w-4 text-amber-700" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em]">Dead or Alive</span>
            </>
          )}
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {crew.slice(0, 6).map((member) => (
            <motion.div
              key={member.name}
              whileHover={prefersReducedMotion ? {} : { y: -6, rotate: -1.2, scale: 1.01 }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[#f7f2e8] p-5 shadow-[0_30px_70px_rgba(32,20,10,0.15)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(213,98,42,0.1),_transparent_35%)]" />
              <div className="relative rounded-[1.5rem] border border-slate-900/20 bg-[#f3e6c9] p-4">
                <div className="mb-3 flex items-center justify-between text-[0.58rem] uppercase tracking-[0.25em] text-slate-700">
                  <span>Wanted</span>
                  <span>Alive</span>
                </div>
                <div className="overflow-hidden rounded-[1.2rem] border border-slate-900/10 bg-slate-950">
                  <img src={member.src} alt={member.name} className="h-52 w-full object-cover" />
                </div>
                <div className="mt-5 text-center">
                  <p className="text-[0.56rem] uppercase tracking-[0.45em] text-slate-700">Dead or Alive</p>
                  <h3 className="mt-3 text-2xl uppercase tracking-[0.14em] text-slate-900">{member.name}</h3>
                  <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-slate-600">{member.role}</p>
                  <div className="mt-4 border-t border-slate-900/10 pt-4 text-3xl font-semibold tracking-[0.08em] text-[#b24c2b]">{member.bounty}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

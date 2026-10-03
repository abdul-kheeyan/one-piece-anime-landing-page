import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  trailing?: ReactNode;
  eyebrowClassName?: string;
  titleClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  trailing,
  eyebrowClassName = 'text-slate-700',
  titleClassName = 'text-white',
}: SectionHeaderProps) {
  return (
    <div className="mb-12 flex items-end justify-between gap-4">
      <div>
        <p className={`text-xs uppercase tracking-[0.4em] ${eyebrowClassName}`}>{eyebrow}</p>
        <h2 className={`mt-4 text-3xl font-semibold uppercase tracking-[0.18em] sm:text-5xl ${titleClassName}`}>{title}</h2>
      </div>
      {trailing ? <div className="hidden items-center gap-2 md:flex">{trailing}</div> : null}
    </div>
  );
}

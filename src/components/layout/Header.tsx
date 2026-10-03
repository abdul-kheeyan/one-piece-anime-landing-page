import { AnimatePresence, motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { navItems, toSectionId } from '../../data/content';

type HeaderProps = {
  scrolled: boolean;
  navOpen: boolean;
  onToggleNav: () => void;
  onNavItemClick: () => void;
};

export function Header({ scrolled, navOpen, onToggleNav, onNavItemClick }: HeaderProps) {
  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-slate-950/70 shadow-2xl shadow-slate-950/30 backdrop-blur-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.45em] text-amber-200/90">
          <Compass className="h-4 w-4 text-amber-300" />
          One Piece
        </a>

        <div className="hidden items-center gap-8 text-[0.7rem] uppercase tracking-[0.28em] md:flex">
          {navItems.map((item) => (
            <a key={item} href={toSectionId(item)} className="transition hover:text-amber-200">
              {item}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={onToggleNav}
        >
          <span className="block h-px w-5 bg-white" />
        </button>
      </nav>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/90 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 text-sm uppercase tracking-[0.2em] text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={toSectionId(item)}
                  className="border-b border-white/5 py-3 last:border-none"
                  onClick={onNavItemClick}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

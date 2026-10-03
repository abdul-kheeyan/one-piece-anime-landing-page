import { Compass, Sailboat, Waves } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020b12] px-4 py-12 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-amber-200/80">One Piece</p>
            <h3 className="mt-4 text-2xl uppercase tracking-[0.18em] text-white">The adventure never ends.</h3>
          </div>
          <div className="flex flex-wrap gap-5 text-[0.62rem] uppercase tracking-[0.3em] text-slate-300">
            <a href="#home">Home</a>
            <a href="#crew">Crew</a>
            <a href="#story">Story</a>
            <a href="#devil-fruits">Devil Fruits</a>
            <a href="#bounties">Bounties</a>
            <a href="#world">World</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Unofficial fan-made website. ONE PIECE and its characters belong to their respective copyright holders.</p>
          <div className="flex gap-4 text-amber-200">
            <Compass className="h-5 w-5" />
            <Sailboat className="h-5 w-5" />
            <Waves className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Waves } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CrewSection } from './components/sections/CrewSection';
import { StorySection } from './components/sections/StorySection';
import { DevilFruitSection } from './components/sections/DevilFruitSection';
import { BountySection } from './components/sections/BountySection';
import { WorldSection } from './components/sections/WorldSection';
import { crew, devilFruits, quoteWords, storyArcs, worldStops, imagePath } from './data/content';

function App() {
  const [activeArc, setActiveArc] = useState(0);
  const [activeCrew, setActiveCrew] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeStory = useMemo(() => storyArcs[activeArc], [activeArc]);
  const activeMember = useMemo(() => crew[activeCrew], [activeCrew]);

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 26,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 26,
    });
  };

  return (
    <div className="min-h-screen bg-[#040d15] text-white selection:bg-amber-300/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 z-10 opacity-40 mix-blend-screen" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <Header
        scrolled={scrolled}
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((value) => !value)}
        onNavItemClick={() => setNavOpen(false)}
      />

      <main className="relative z-30 overflow-hidden">
        <HeroSection
          pointer={pointer}
          prefersReducedMotion={prefersReducedMotion}
          onPointerMove={handlePointerMove}
          heroY={heroY}
          heroScale={heroScale}
        />

        <CrewSection
          crew={crew}
          activeMember={activeMember}
          activeCrew={activeCrew}
          onSelectCrew={setActiveCrew}
        />

        <StorySection
          storyArcs={storyArcs}
          activeArc={activeArc}
          activeStory={activeStory}
          onSelectArc={setActiveArc}
        />

        <DevilFruitSection devilFruits={devilFruits} prefersReducedMotion={prefersReducedMotion} />

        <BountySection crew={crew} prefersReducedMotion={prefersReducedMotion} />

        <WorldSection worldStops={worldStops} prefersReducedMotion={prefersReducedMotion} />

        <section id="voyage" className="relative overflow-hidden bg-[#071a26] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(117,192,228,0.18),_rgba(7,17,29,0.92)_52%)] p-6 shadow-[0_30px_90px_rgba(4,12,18,0.8)] md:p-10">
            <div className="relative overflow-hidden rounded-[1.7rem] border border-sky-200/10 bg-slate-950/40 p-6 md:p-10">
              <div className="absolute inset-0 opacity-80">
                <img src={imagePath('30.jpeg')} alt="Straw Hat Pirates" className="h-full w-full object-cover opacity-60" />
              </div>
              <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center text-center">
                <p className="text-xs uppercase tracking-[0.52em] text-sky-100/75">The voyage continues</p>
                <h2 className="mt-6 text-4xl font-semibold uppercase tracking-[0.18em] text-white sm:text-6xl">The Sea is Waiting</h2>
                <button type="button" className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-white backdrop-blur-sm transition hover:border-amber-200/40 hover:text-amber-200">
                  Set Sail
                  <Waves className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#071822] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-200/80">Core values</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-3xl uppercase tracking-[0.18em] text-white sm:text-5xl">
              {quoteWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              The sea is not just a place—it is a promise. A promise that joy, freedom, and friendship can outlast any storm.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 32;
  const maxGap = 52;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth) {
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  }

  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? '#000';
  const colorDesignation = colors.designation ?? '#6b7280';
  const colorTestimony = colors.testimony ?? '#4b5563';
  const colorArrowBg = colors.arrowBackground ?? '#141414';
  const colorArrowFg = colors.arrowForeground ?? '#f1f1f7';
  const colorArrowHoverBg = colors.arrowHoverBackground ?? '#00a6fb';
  const fontSizeName = fontSizes.name ?? '1.5rem';
  const fontSizeDesignation = fontSizes.designation ?? '0.925rem';
  const fontSizeQuote = fontSizes.quote ?? '1.125rem';

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<number | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials],
  );

  useEffect(() => {
    const handleResize = () => {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        window.clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, testimonialsLength]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) {
      window.clearInterval(autoplayIntervalRef.current);
    }
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) {
      window.clearInterval(autoplayIntervalRef.current);
    }
  }, [testimonialsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateX(0px) translateY(0px) scale(1) rotateY(0deg)',
        transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
      };
    }

    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
        transform: `translateX(-${gap * 0.7}px) translateY(-${maxStickUp * 0.7}px) scale(0.83) rotateY(15deg)`,
        transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
      };
    }

    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
        transform: `translateX(${gap * 0.7}px) translateY(-${maxStickUp * 0.7}px) scale(0.83) rotateY(-15deg)`,
        transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
      transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>

        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <h3 className="name" style={{ color: colorName, fontSize: fontSizeName }}>
                {activeTestimonial.name}
              </h3>
              <p
                className="designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="quote"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(' ').map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ filter: 'blur(8px)', opacity: 0, y: 8 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * i }}
                    style={{ display: 'inline-block' }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={28} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={28} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 0;
        }
        .testimonial-grid {
          display: grid;
          gap: 2rem;
          align-items: center;
          grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          max-width: 28rem;
          margin: 0 auto 0 0;
          perspective: 1200px;
          overflow: visible;
          padding-left: 1.5rem;
        }
        .testimonial-image {
          position: absolute;
          top: 0;
          left: 50%;
          width: min(100%, 23rem);
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
          transform-origin: center center;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.25rem;
          max-width: 32rem;
          margin-left: 0;
        }
        .name {
          margin: 0 0 0.25rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .designation {
          margin: 0 0 1.25rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .quote {
          margin: 0;
          line-height: 1.75;
          letter-spacing: 0.02em;
        }
        .arrow-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .arrow-button {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .arrow-button:hover {
          transform: translateY(-1px);
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
          .image-container {
            height: 27rem;
            max-width: 30rem;
            padding-left: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;

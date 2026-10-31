import { useState, useEffect, useCallback } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageIntro, img, FadeUp, Stagger, StaggerItem } from '../components/Sections';
import { gallery } from '../data/content';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => i !== null ? (i - 1 + gallery.length) % gallery.length : null), []);
  const next = useCallback(() => setActive(i => i !== null ? (i + 1) % gallery.length : null), []);

  // Keyboard navigation
  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, close, prev, next]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <>
      <PageIntro
        eyebrow="A GLIMPSE INSIDE"
        title="A space to slow down."
        copy="Explore the atmosphere and details that shape the Mokshaa experience."
        image="photo-1600607687939-ce8a6c25118c"
      />

      <section className="section-pad">
        <div className="container">
          <div className="gallery-intro">
            <FadeUp as="span" className="eyebrow">THE MOKSHAA GALLERY</FadeUp>
            <FadeUp delay={0.1} as="h2">
              Quiet moments.<br /><em>Thoughtful spaces.</em>
            </FadeUp>
            <FadeUp delay={0.18} as="p">
              This demo gallery uses curated spa-inspired imagery. Replace these visuals
              with approved, original photographs of Mokshaa's premises and treatments
              before publishing.
            </FadeUp>
          </div>

          <Stagger className="masonry-gallery">
            {gallery.map(([name, id], i) => (
              <StaggerItem key={id} as="button" className={`masonry-item item-${i + 1}`} onClick={() => setActive(i)}>
                <img src={img(id, 1000)} alt={name} loading="lazy" />
                <span>{name}<ArrowUpRight size={15} /></span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Image: ${gallery[active][0]}`}
          >
            <button className="lightbox-close" aria-label="Close image" onClick={close}>
              <X size={24} />
            </button>

            <button className="lightbox-nav prev" aria-label="Previous image" onClick={e => { e.stopPropagation(); prev(); }}>
              <ChevronLeft size={22} />
            </button>

            <motion.img
              key={active}
              src={img(gallery[active][1], 1600)}
              alt={gallery[active][0]}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            />

            <button className="lightbox-nav next" aria-label="Next image" onClick={e => { e.stopPropagation(); next(); }}>
              <ChevronRight size={22} />
            </button>

            <span>{gallery[active][0]}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  img,
  SectionHead, TreatmentCards, FeatureBand, PackageCards, CTA,
  FadeUp, FadeIn, Stagger, StaggerItem, ImageReveal,
} from '../components/Sections';
import { gallery } from '../data/content';

const silk = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        {/* Background image — subtle scale-down on load */}
        <motion.div
          className="hero-image"
          style={{ backgroundImage: `url(${img('photo-1600334129128-685c5582fd35', 2000)})` }}
          initial={reduced ? {} : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: silk }}
        />
        <div className="hero-overlay" />

        <div className="container hero-content">
          <motion.span
            className="eyebrow light"
            initial={reduced ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: silk, delay: 0.3 }}
          >
            A SANCTUARY FOR THE SENSES · INDORE
          </motion.span>

          <motion.h1
            initial={reduced ? {} : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: silk, delay: 0.5 }}
          >
            Rediscover the<br />
            <em>art of relaxation.</em>
          </motion.h1>

          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: silk, delay: 0.75 }}
          >
            Step away from the everyday and make room for a more considered wellness experience.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: silk, delay: 0.95 }}
          >
            <Link to="/treatments" className="btn btn-gold">
              Explore treatments <ArrowUpRight size={16} />
            </Link>
            <Link to="/contact" className="hero-secondary">Plan your visit</Link>
          </motion.div>
        </div>

        <motion.a
          className="scroll-cue"
          href="#welcome"
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </motion.a>

        <div className="hero-note">MOKSHAA <span>·</span> LUXURY WELLNESS SPA</div>
      </section>

      {/* ── WELCOME ──────────────────────────────────────────────── */}
      <section id="welcome" className="welcome-section section-pad">
        <div className="container welcome-grid">
          <ImageReveal>
            <div className="welcome-photo">
              <img
                src={img('photo-1600210492486-724fe5c67fb0', 1000)}
                alt="Calm, thoughtfully styled spa interior"
              />
              <span className="photo-caption">A SPACE TO PAUSE</span>
            </div>
          </ImageReveal>
          <div className="welcome-copy">
            <FadeUp as="span" className="eyebrow">WELCOME TO MOKSHAA</FadeUp>
            <FadeUp delay={0.1} as="h2">
              Come as you are.<br /><em>Leave feeling restored.</em>
            </FadeUp>
            <FadeUp delay={0.18} as="p">
              Mokshaa is a place to step out of the rush and return to yourself.
              Discover thoughtful treatments, a welcoming atmosphere and moments
              shaped around your comfort.
            </FadeUp>
            <FadeUp delay={0.25} as="p">
              Whether you are taking a little time for yourself or sharing a wellness
              experience, we invite you to slow down and settle in.
            </FadeUp>
            <FadeUp delay={0.32}>
              <Link className="text-link" to="/about">
                A little about us <ArrowUpRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TREATMENTS ───────────────────────────────────────────── */}
      <section className="section-pad treatments-section">
        <div className="container">
          <SectionHead
            eyebrow="THE TREATMENT MENU"
            title="Find your kind of calm."
            copy="Explore considered wellness rituals and choose the experience that feels right for you."
          />
          <TreatmentCards limit={4} />
          <div className="center action-row">
            <FadeUp>
              <Link className="btn btn-outline" to="/treatments">
                Explore all treatments <ArrowUpRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <FeatureBand />

      {/* ── EXPERIENCE ───────────────────────────────────────────── */}
      <section className="section-pad experience-section">
        <div className="container experience-grid">
          <div>
            <FadeUp as="span" className="eyebrow">THE MOKSHAA EXPERIENCE</FadeUp>
            <FadeUp delay={0.1} as="h2">
              Thoughtful details.<br /><em>Unhurried moments.</em>
            </FadeUp>
            <FadeUp delay={0.18} as="p">
              We believe the feeling of a spa experience begins long before a treatment
              and stays long after. From the welcome you receive to the atmosphere around
              you, the little details matter.
            </FadeUp>
            <FadeUp delay={0.26}>
              <Link to="/gallery" className="text-link">
                Step inside Mokshaa <ArrowUpRight size={16} />
              </Link>
            </FadeUp>
          </div>
          <div className="experience-images">
            <ImageReveal delay={0.05}>
              <img
                className="exp-large"
                src={img('photo-1600607687939-ce8a6c25118c', 900)}
                alt="Warm neutral spa-inspired interior"
              />
            </ImageReveal>
            <ImageReveal delay={0.22}>
              <img
                className="exp-small"
                src={img('photo-1540555700478-4be289fbecef', 650)}
                alt="Spa treatment detail"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────────────── */}
      <section className="section-pad packages-section">
        <div className="container">
          <SectionHead
            eyebrow="CURATED FOR YOU"
            title="A ritual for every occasion."
            copy="Explore experience ideas for a personal reset or a shared moment. Ask our team for current availability and pricing."
          />
          <PackageCards />
          <div className="center action-row">
            <FadeUp>
              <Link to="/packages" className="text-link">
                View package details <ArrowUpRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ────────────────────────────────────────── */}
      <section className="gallery-strip">
        <div className="container">
          <div className="gallery-strip-head">
            <FadeUp>
              <div>
                <span className="eyebrow">A GLIMPSE INSIDE</span>
                <h2>Spaces made for slowing down.</h2>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link to="/gallery" className="text-link">View gallery <ArrowUpRight size={16} /></Link>
            </FadeUp>
          </div>
          <Stagger className="gallery-row">
            {gallery.slice(0, 4).map(([alt, id]) => (
              <StaggerItem key={id} as="div">
                <img src={img(id, 650)} alt={alt} loading="lazy" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="testimonial-section">
        <div className="container testimonial-inner">
          <FadeUp as="span" className="eyebrow">A NOTE ON WELLBEING</FadeUp>
          <FadeIn delay={0.1} as="div" className="quote-mark">"</FadeIn>
          <FadeUp delay={0.18} as="h2">
            Make space for the feeling<br /><em>of being truly at ease.</em>
          </FadeUp>
          <FadeUp delay={0.26} as="p">We look forward to welcoming you to Mokshaa.</FadeUp>
          <FadeUp delay={0.32} className="stars">
            {[1,2,3,4,5].map(n => <Star key={n} />)}
          </FadeUp>
          <FadeUp delay={0.38} as="small">Guest reviews will appear here once verified and approved.</FadeUp>
        </div>
      </section>

      <CTA
        title="Your moment of calm is closer than you think."
        copy="Tell us what you are looking for. Our team will help you explore the right experience."
      />
    </>
  );
}

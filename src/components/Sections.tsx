import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Leaf, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsApp from './WhatsApp';
import { treatments, packages } from '../data/content';
import { FadeUp, FadeIn, Stagger, StaggerItem, ImageReveal } from './Animate';

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

/* ── PageIntro (inner-page hero banner) ───────────────────────────── */
export function PageIntro({
  eyebrow, title, copy, image,
}: { eyebrow: string; title: string; copy: string; image: string }) {
  return (
    <section
      className="page-intro"
      style={{ backgroundImage: `linear-gradient(105deg,rgba(20,16,12,.65),rgba(20,16,12,.1)),url(${img(image, 1800)})` }}
    >
      <div className="container">
        <FadeUp delay={0.05} as="span" className="eyebrow light">{eyebrow}</FadeUp>
        <FadeUp delay={0.15} as="h1">{title}</FadeUp>
        <FadeUp delay={0.25} as="p">{copy}</FadeUp>
      </div>
    </section>
  );
}

/* ── SectionHead ────────────────────────────────────────────────────── */
export function SectionHead({
  eyebrow, title, copy, center = true,
}: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      <FadeUp as="span" className="eyebrow">{eyebrow}</FadeUp>
      <FadeUp delay={0.1} as="h2">{title}</FadeUp>
      {copy && <FadeUp delay={0.18} as="p">{copy}</FadeUp>}
    </div>
  );
}

/* ── TreatmentCards ────────────────────────────────────────────────── */
export function TreatmentCards({ limit }: { limit?: number }) {
  const list = treatments.slice(0, limit || treatments.length);
  return (
    <Stagger className="treatment-grid">
      {list.map((t) => (
        <StaggerItem key={t.name} as="article" className="treatment-card">
          <Link to="/treatments" className="card-image">
            <img src={img(t.image, 750)} alt={t.name} loading="lazy" />
            <div className="card-gold-line" />
            <span className="image-arrow"><ArrowUpRight /></span>
          </Link>
          <div className="card-content">
            <span className="eyebrow">{t.tag}</span>
            <h3>{t.name}</h3>
            <p>{t.desc}</p>
            <div className="card-meta">
              <span>{t.duration} · enquire for details</span>
              <Link to="/contact">Enquire <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* ── PackageCards ───────────────────────────────────────────────────── */
export function PackageCards() {
  return (
    <Stagger className="package-grid">
      {packages.map((p) => (
        <StaggerItem key={p.name} as="article" className={`package-card${p.featured ? ' featured' : ''}`}>
          <span className="eyebrow">{p.label}</span>
          <h3>{p.name}</h3>
          <p>{p.subtitle}</p>
          <div className="package-duration">{p.duration}</div>
          <ul>
            {p.items.map(x => (
              <li key={x}><Check size={15} />{x}</li>
            ))}
          </ul>
          <WhatsApp
            label="Enquire for this ritual"
            message={`Hello Mokshaa, I would like to know more about the ${p.name} package.`}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* ── FeatureBand ────────────────────────────────────────────────────── */
export function FeatureBand() {
  return (
    <section className="feature-band">
      <div className="container feature-grid">
        <div>
          <FadeUp as="span" className="eyebrow light">THE MOKSHAA APPROACH</FadeUp>
          <FadeUp delay={0.1} as="h2">
            Wellbeing is found in the moments we make for ourselves.
          </FadeUp>
          <FadeUp delay={0.18} as="p">
            From a warm welcome to the final quiet moment, every detail should help you feel comfortable, cared for and at ease.
          </FadeUp>
          <FadeUp delay={0.25}>
            <Link className="text-link light-link" to="/about">
              Discover our philosophy <ArrowUpRight size={16} />
            </Link>
          </FadeUp>
        </div>
        <Stagger className="feature-list">
          {[
            [Leaf, 'A calmer setting', 'A welcoming environment designed for a slower pace.'],
            [Sparkles, 'Thoughtful rituals', 'Treatments selected around comfort and relaxation.'],
            [Heart, 'Personal attention', 'A warm, considered experience from arrival to farewell.'],
            [ShieldCheck, 'Care and cleanliness', 'Clear standards and attention to guest comfort.'],
          ].map(([Icon, title, copy]: any) => (
            <StaggerItem key={title}>
              <Icon />
              <span>
                <b>{title}</b>
                <small>{copy}</small>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ── CTA ────────────────────────────────────────────────────────────── */
export function CTA({
  title = 'Make time for yourself.',
  copy = 'Your next moment of calm begins with a conversation.',
}: { title?: string; copy?: string }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <FadeUp as="span" className="eyebrow">YOUR MOMENT AWAITS</FadeUp>
        <FadeUp delay={0.1} as="h2">{title}</FadeUp>
        <FadeUp delay={0.18} as="p">{copy}</FadeUp>
        <FadeUp delay={0.26}>
          <WhatsApp label="Start a WhatsApp enquiry" />
        </FadeUp>
      </div>
    </section>
  );
}

/* ── ImageReveal re-export for pages ───────────────────────────────── */
export { ImageReveal, FadeUp, FadeIn, Stagger, StaggerItem } from './Animate';

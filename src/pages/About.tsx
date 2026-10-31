import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { PageIntro, SectionHead, CTA, img, FadeUp, Stagger, StaggerItem, ImageReveal } from '../components/Sections';

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="THE STORY OF MOKSHAA"
        title="A softer pace. A space to reconnect."
        copy="A welcoming wellness destination in Indore, created around the value of making time for yourself."
        image="photo-1600210492486-724fe5c67fb0"
      />

      {/* Philosophy */}
      <section className="section-pad">
        <div className="container story-grid">
          <div>
            <FadeUp as="span" className="eyebrow">OUR PHILOSOPHY</FadeUp>
            <FadeUp delay={0.1} as="h2">
              Wellness should feel<br /><em>personal, not prescribed.</em>
            </FadeUp>
          </div>
          <div className="story-copy">
            <FadeUp delay={0.08} as="p" className="lead">
              At Mokshaa, we believe that taking a pause is not a luxury.
              It is an important way to care for yourself.
            </FadeUp>
            <FadeUp delay={0.16} as="p">
              Our intention is to offer a peaceful, welcoming setting where guests can
              explore wellness treatments at their own pace. Every visit is an opportunity
              to step away from the noise and focus on comfort.
            </FadeUp>
            <FadeUp delay={0.24} as="p">
              From the atmosphere to the way we welcome you, we want your experience to
              feel thoughtful, calm and considered.
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="about-image-band">
        <img src={img('photo-1600607687939-ce8a6c25118c', 1600)} alt="Quiet spa-inspired interior" />
        <div>
          <FadeUp as="span" className="eyebrow light">THE MOKSHAA FEELING</FadeUp>
          <FadeUp delay={0.12} as="h2">
            Arrive. Exhale.<br /><em>Be in the moment.</em>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container">
          <SectionHead
            eyebrow="WHAT MATTERS TO US"
            title="Care in every detail."
            copy="The principles that guide the experience we want every guest to have."
          />
          <Stagger className="values-grid">
            {[
              [Leaf, 'A calm environment', 'A warm, welcoming setting that gives you room to slow down.'],
              [Heart, 'Personal attention', 'A thoughtful approach to understanding guest preferences and comfort.'],
              [Sparkles, 'Considered experiences', 'A treatment menu designed to help guests find an experience that suits them.'],
              [ShieldCheck, 'Cleanliness and care', 'Attention to hygiene, clarity and guest wellbeing throughout the visit.'],
            ].map(([Icon, title, copy]: any) => (
              <StaggerItem key={title} as="article" className="value-card">
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team note */}
      <section className="section-pad team-note">
        <div className="container team-grid">
          <ImageReveal>
            <img src={img('photo-1600334129128-685c5582fd35', 1000)} alt="Spa treatment room" />
          </ImageReveal>
          <div>
            <FadeUp as="span" className="eyebrow">A PERSONAL WELCOME</FadeUp>
            <FadeUp delay={0.1} as="h2">
              We look forward<br /><em>to welcoming you.</em>
            </FadeUp>
            <FadeUp delay={0.18} as="p">
              Have a question before your visit? Reach out to our team and we will be
              happy to help you understand the available treatments and plan your experience.
            </FadeUp>
            <FadeUp delay={0.26}>
              <Link className="btn btn-dark" to="/contact">
                Get in touch <ArrowUpRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

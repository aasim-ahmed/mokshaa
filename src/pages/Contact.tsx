import { MapPin, Clock, Instagram, ArrowUpRight } from 'lucide-react';
import { PageIntro, SectionHead, CTA, FadeUp, Stagger, StaggerItem } from '../components/Sections';
import WhatsApp from '../components/WhatsApp';

const address = 'First Floor, A9, MR 9 Road, Sector A, Chandra Nagar, Indore, Madhya Pradesh 452010';

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="PLAN YOUR VISIT"
        title="We would love to welcome you."
        copy="Have a question about treatments or planning a visit? Get in touch with the Mokshaa team."
        image="photo-1600210492486-724fe5c67fb0"
      />

      <section className="section-pad">
        <div className="container contact-grid">
          <div>
            <FadeUp as="span" className="eyebrow">FIND YOUR WAY TO MOKSHAA</FadeUp>
            <FadeUp delay={0.1} as="h2">
              Let's make time<br /><em>for your wellbeing.</em>
            </FadeUp>
            <FadeUp delay={0.18} as="p" className="contact-lead">
              Reach out to ask about treatments, current availability and the best time to visit.
            </FadeUp>

            <Stagger>
              <StaggerItem className="contact-detail">
                <MapPin />
                <div>
                  <b>Our location</b>
                  <p>{address}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=First+Floor+A9+MR+9+Road+Sector+A+Chandra+Nagar+Indore"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Find directions <ArrowUpRight size={14} />
                  </a>
                </div>
              </StaggerItem>

              <StaggerItem className="contact-detail">
                <Clock />
                <div>
                  <b>Opening hours</b>
                  <p>Please contact the spa to confirm today's timings and appointment availability.</p>
                </div>
              </StaggerItem>

              <StaggerItem className="contact-detail">
                <Instagram />
                <div>
                  <b>Instagram</b>
                  <p>@mokshaaspa_01</p>
                  <a href="https://www.instagram.com/mokshaaspa_01/" target="_blank" rel="noreferrer">
                    Visit Instagram <ArrowUpRight size={14} />
                  </a>
                </div>
              </StaggerItem>
            </Stagger>

            <FadeUp delay={0.1} className="contact-cta">
              <WhatsApp
                label="Chat with Mokshaa"
                message="Hello Mokshaa, I would like to enquire about treatments and appointment availability."
              />
              <small>WhatsApp booking number will be connected once confirmed by the spa owner.</small>
            </FadeUp>
          </div>

          <FadeUp delay={0.15} className="map-card">
            <div className="map-placeholder">
              <MapPin size={36} />
              <span>CHANDRA NAGAR · INDORE</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chandra+Nagar+Indore+Madhya+Pradesh"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="map-caption">
              <b>Mokshaa Luxury Wellness Spa</b>
              <p>{address}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad faq-section">
        <div className="container faq-wrap">
          <SectionHead eyebrow="GOOD TO KNOW" title="A few helpful answers." center={false} />
          <div className="faq-list">
            {[
              ['How do I book an appointment?', 'Use the WhatsApp enquiry button on this website to contact the Mokshaa team and confirm availability.'],
              ['Can I ask about a specific treatment?', 'Absolutely. Mention the treatment you are interested in and the team can confirm the current menu and details.'],
              ['Where is Mokshaa located?', 'Mokshaa is listed at Chandra Nagar, Indore, Madhya Pradesh. Please confirm the address before travelling.'],
              ['How can I check current prices and offers?', 'Contact the spa directly for current prices, package details and promotional offers.'],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="A little time for yourself starts here."
        copy="Send us a message and let us help you plan your Mokshaa experience."
      />
    </>
  );
}

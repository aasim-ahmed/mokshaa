import { PageIntro, SectionHead, PackageCards, CTA, FadeUp } from '../components/Sections';

export default function Packages() {
  return (
    <>
      <PageIntro
        eyebrow="CURATED EXPERIENCES"
        title="Make a little more room for wellbeing."
        copy="Explore sample experience concepts and ask our team about current spa packages and special offers."
        image="photo-1600334129128-685c5582fd35"
      />

      <section className="section-pad">
        <div className="container">
          <SectionHead
            eyebrow="THE MOKSHAA COLLECTION"
            title="A ritual for your kind of day."
            copy="These are proposed presentation concepts for the demo, not confirmed or currently bookable spa packages."
          />
          <PackageCards />
          <FadeUp delay={0.1} className="notice-box">
            <b>Demo pricing notice</b>
            <p>
              Package names, durations and inclusions shown here are illustrative concepts.
              Contact Mokshaa for the actual menu, prices, offers and availability before
              making a booking.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTA
        title="Let us help you plan your visit."
        copy="Ask about available treatments, combinations and current offers on WhatsApp."
      />
    </>
  );
}

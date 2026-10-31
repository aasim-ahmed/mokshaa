import { PageIntro, SectionHead, TreatmentCards, CTA, FadeUp } from '../components/Sections';

export default function Treatments() {
  return (
    <>
      <PageIntro
        eyebrow="THE TREATMENT MENU"
        title="Choose the experience that feels right."
        copy="Explore the wellness experiences listed in Mokshaa's social menu. Ask our team to confirm current services, durations and availability."
        image="photo-1540555700478-4be289fbecef"
      />

      <section className="section-pad">
        <div className="container">
          <SectionHead
            eyebrow="EXPLORE MOKSHAA"
            title="Thoughtful treatments. Time for you."
            copy="Every guest is different. Connect with our team to understand which treatment may suit your preferences."
          />
          <TreatmentCards />
          <FadeUp delay={0.1} className="notice-box">
            <b>A note before you book</b>
            <p>
              Treatment names are based on the menu visible on Mokshaa's Instagram profile.
              Final service descriptions, inclusions, duration and availability must be
              confirmed directly with the spa.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTA
        title="Not sure where to begin?"
        copy="Tell us what kind of experience you are looking for and ask our team for guidance."
      />
    </>
  );
}

import {
  Action,
  BenefitsSection,
  Footer,
  Headers,
  HeadlineSection,
  HeroSection,
  Process,
  Success,
} from '@/modules';

export default function Home() {
  return (
    <>
      <Headers />
      <HeroSection />
      <HeadlineSection />
      <BenefitsSection />
      <Success />
      <Process />
      <Action />
      <Footer />
    </>
  );
}

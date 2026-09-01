import { CaseStudies } from "./components/CaseStudies";
import { Contact, Footer } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Header } from "./components/Header";
import { Hero, ScrollProgress } from "./components/Hero";
import { InteractiveBackdrop } from "./components/InteractiveBackdrop";
import { MagneticButtons } from "./components/MagneticButtons";
import { Process } from "./components/Process";
import { ProofBar } from "./components/ProofBar";
import { Services } from "./components/Services";
import { StackMarquee } from "./components/StackMarquee";
import { Testimonials } from "./components/Testimonials";
import { WhyMe } from "./components/WhyMe";

export default function Home() {
  return (
    <>
      <InteractiveBackdrop />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <MagneticButtons />
      <main className="site-main">
        <Header />
        <Hero />
        <ProofBar />
        <Services />
        <CaseStudies />
        <Process />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <StackMarquee />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

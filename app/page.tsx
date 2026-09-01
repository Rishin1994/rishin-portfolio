import { CaseStudies } from "./components/CaseStudies";
import { Contact, Footer } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Header } from "./components/Header";
import { Hero, ScrollProgress } from "./components/Hero";
import { Process } from "./components/Process";
import { ProofBar } from "./components/ProofBar";
import { PublicProof } from "./components/PublicProof";
import { Services } from "./components/Services";
import { StackMarquee } from "./components/StackMarquee";
import { WhyMe } from "./components/WhyMe";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="site-main">
        <Header />
        <Hero />
        <ProofBar />
        <Services />
        <CaseStudies />
        <Process />
        <WhyMe />
        <PublicProof />
        <FAQ />
        <StackMarquee />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

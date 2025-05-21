import { HeroSection } from "@/Components/HeroSection";
import { ProblemSolution } from "@/Components/ProblemSolution";
import { AboutHector } from "@/Components/AboutHector";
import { TrainingSystem } from "@/Components/TrainingSystem";
import { Benefits } from "@/Components/Benefits";
import { Testimonials } from "@/Components/Testimonials";
import { WhoIsThisFor } from "@/Components/WhoIsThisFor";
import { FinalCta } from "@/Components/FinalCta";
import { Footer } from "@/Components/Footer";


export default function HomePage() {
  return (
    <main >
      <HeroSection />
      <ProblemSolution />
      <AboutHector />
      <TrainingSystem />
      <Benefits />
      <Testimonials />
      <WhoIsThisFor />
      <FinalCta />
      <Footer />
    </main>
  );
}

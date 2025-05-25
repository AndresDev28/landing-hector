import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { AboutHector } from "@/components/AboutHector";
import { TrainingSystem } from "@/components/TrainingSystem";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import React from "react";

export default function HomePage() {
  return (
    <main >
      <Hero />
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

"use client"
import people_data from "../data/people_data.json"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

interface UxResearchersProps {
    id: number;
    name: string;
    designation: string;
    image: string;
}
function UxResearchers() {
    const data: UxResearchersProps[] = people_data.ux
  return (
    <div>
      <WavyBackground>
      <div className="max-w-4xl mx-auto py-20">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Minds Behind Great UX
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Explore the people, methods, and work behind world-class UX.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={data} />
        </div>
      </div>
      </WavyBackground>
    </div>
  );
}

export default UxResearchers

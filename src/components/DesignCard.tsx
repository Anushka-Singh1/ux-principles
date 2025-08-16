"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import design_data from "../data/design_data.json"
import { cn } from "@/lib/utils";
function DesignCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.02] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
          />
           <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-slate-800"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-slate-300 ">
      
        Principles to Design By
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={design_data.design_data}
            direction="right"
            speed="slow"
          />
        </div>
          </div>
        </div>
      
  );
}

export default DesignCard

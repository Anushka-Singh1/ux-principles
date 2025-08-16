import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/spotlight-new'
import { Button } from './ui/moving-border'
function Hero() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Master the art of design
        </h1>
       
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Elevate your craft with timeless design principles and purposeful
            detail. Learn to balance typography, color, and composition to
            create interfaces that feel effortless and intuitive. Turn quick
            ideas into polished experiences that resonate and endure.
          </p>
        
        <div className="mt-6">
          <Link href={"/details"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero

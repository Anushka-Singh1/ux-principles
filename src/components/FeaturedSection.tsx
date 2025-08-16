import React from 'react'
import ui_data from '../data/ui_data.json'
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradient } from './ui/background-gradient';

interface FeaturedSectionProps {
    id: string;
  title: string;
  description: string;
    resources: string[];
    category: string;
    image: string;
    alt: string;
}

function FeaturedSection() {
    const featuredData: FeaturedSectionProps[] = ui_data.ui_data.filter((item) => item.status === "essential");
  return (
    <div className="py-12 bg-gray-900 ">
      <div className="text-center">
        <div className=" text-teal-500 text-2xl font-semibold tracking-wide uppercase">
          DESIGN DECK
        </div>
        <div className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-violet-200 sm:text-4xl">
          A card deck you flip through for ideas
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredData.map((item) => (
            <div key={item.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-4 sm:p-6 bg-white dark:bg-zinc-900 cursor-pointer">
                <div className="flex w-full flex-col">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  {item.image && (
                    <div className="relative mt-4 h-40 w-full overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 384px"
                      />
                    </div>
                  )}

                  <div className="mt-4">
                    <p className="text-sm text-neutral-700 dark:text-zinc-500 font-bold">
                      {item.description}
                    </p>
                    {item.resources && item.resources[0] && (
                      <a
                        href={item.resources[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-teal-500 hover:text-teal-600"
                      >
                        View resource
                      </a>
                    )}
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/details"}>
          <button className="p-4 rounded-md border-white/20 border-2 bg-blue-500/20 backdrop-blur-sm text-neutral hover:bg-blue-500/50 transition-all duration-300">
            View All Ideas
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection

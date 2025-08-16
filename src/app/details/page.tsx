"use client"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import ui_data from "../../data/ui_data.json"
import Image from "next/image";
type UiData = (typeof ui_data.ui_data)[number];

export const dynamic = "force-dynamic";

function page() {
  const items: UiData[] = Array.isArray(ui_data.ui_data) ? ui_data.ui_data : [];
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-28 md:mt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 md:gap-x-16">
        {items.map((item: UiData) => (
          <CardContainer key={item.id} containerClassName="py-6" className="">
            <CardBody className="h-auto w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-2xl p-6">
              <CardItem as="h3" className="text-lg font-semibold text-white">
                {item.title}
              </CardItem>
              {item.image && (
                <CardItem className="relative mt-4 h-40 w-full overflow-hidden rounded-md" translateZ={30}>
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </CardItem>
              )}
              <CardItem as="p" className="mt-4 text-sm text-neutral-300" translateZ={20}>
                {item.description}
              </CardItem>
              {item.resources && item.resources[0] && (
                <CardItem as="a" href={item.resources[0]} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-teal-400 hover:text-teal-300" translateZ={20}>
                  View resource
                </CardItem>
              )}
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default page

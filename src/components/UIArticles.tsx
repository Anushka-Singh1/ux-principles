"use client"
import React from 'react'
import Link from 'next/link';
import ui_data from "../data/ui_data.json"
import { HoverEffect } from "./ui/card-hover-effect"
interface UIArticlesProps {
  id: string;
  title: string;
  description: string;
  resources: string[];
}

function UIArticles() {
    const data: UIArticlesProps[] = ui_data.ui_data
    const items = data
      .filter((d) => Array.isArray(d.resources) && d.resources.length > 0)
      .map((d) => ({
        title: d.title,
        description: d.description,
        link: d.resources[0],
      }));
  return (
    <div className="p-12 bg-gray-900">
      <div className="text-center">
        <div className=" text-teal-500 text-2xl font-semibold tracking-wide uppercase">
          UI/UX Resource Library
        </div>
        <div className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-300 sm:text-4xl">
          Handpicked for clarity, depth, and real-world impact
        </div>
      </div>
          <div className="mt-10">
            <HoverEffect items={items} />
      </div>
      <div className="mt-20 text-center">
        <Link href={"/details"}>
          <button className="p-4 rounded-md border-white/20 border-2 bg-blue-500/20 backdrop-blur-sm text-neutral hover:bg-blue-500/50 transition-all duration-300">
            View All Resources
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UIArticles


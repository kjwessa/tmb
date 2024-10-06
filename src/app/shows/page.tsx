import React from "react";
import { ShowCard } from "@/components/ShowCard";
import shows from "@/data/shows.json";

export default function ShowsPage() {
  return (
    <>
      <section className="bg-neutral-100 py-24 text-lg text-zinc-800">
        <div className="grid auto-cols-fr grid-cols-[123.5px_1440px_123.5px] grid-rows-[64.25rem]">
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 grid auto-cols-fr grid-cols-[90.00rem] grid-rows-[83.4375px_911.859px] gap-8">
            <div className="grid auto-cols-fr grid-cols-[90.00rem] grid-rows-[42.6406px_24.7969px] gap-4">
              <h1 className="text-[2.38rem] font-medium leading-none">Shows</h1>
              <div className="col-span-1 row-span-1 grid grid-cols-[462.672px_961.328px] grid-rows-[1.38rem] gap-4">
                <div className="text-xs uppercase">
                  Original Audio Entertainment for the whole Family
                </div>
                <div
                  className="flex-grow self-center bg-slate-300/[0.2]"
                  style={{
                    justifySelf: "stretch",
                  }}
                />
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[712px_712px] grid-rows-[296.266px_295.797px_271.797px] gap-x-4 gap-y-6">
              {shows.map((show, index) => (
                <ShowCard key={index} {...show} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

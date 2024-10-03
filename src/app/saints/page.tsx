"use client";
import React, { useEffect, useRef } from "react";
import saintsData from "./data.json";
import { SaintCard } from "@/components/SaintCard/index";
import { gsap } from "gsap";

export default function SaintsWebpage() {
  const saintCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (saintCardsRef.current) {
      gsap.to(saintCardsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="container mx-auto px-4 py-8">
        <section className="relative mb-8 overflow-hidden rounded-lg bg-indigo-900 p-8 text-white">
          <div className="absolute right-0 top-0 mr-2 mt-2">
            <button className="rounded bg-white px-3 py-1 text-sm text-indigo-900">
              Trailer
            </button>
          </div>
          <h1 className="mb-4 text-4xl font-bold">FIND YOUR SAINT</h1>
          <p className="mb-6 text-xl">
            Explore The Saints episodes and bring them into your life!
          </p>
          <button className="flex items-center rounded-full bg-white px-6 py-2 font-semibold text-indigo-900">
            VIEW FULL EPISODE FEED
            <span className="ml-2">🔔</span>
            <span className="ml-2">↗️</span>
          </button>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Series</h2>
          <div className="mb-4 flex items-center space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder='Search all topics "hope"'
                className="w-full rounded-full border px-4 py-2 pr-10"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400">
                🔍
              </span>
            </div>
            <button className="rounded-full bg-gray-200 px-4 py-2">
              Reset
            </button>
            <button className="rounded-full bg-gray-200 px-4 py-2">
              MidNord
            </button>
            <button className="rounded-full bg-gray-200 px-4 py-2">
              Modern
            </button>
            <button className="rounded-full bg-gray-200 px-4 py-2">
              Early Church
            </button>
          </div>
        </section>

        <section
          ref={saintCardsRef}
          className="grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-6"
        >
          {saintsData
            .filter((saint) => saint.img)
            .slice(0, 20)
            .map((saint) => (
              <div key={saint.id} className="translate-y-10 opacity-0">
                <SaintCard {...saint} />
              </div>
            ))}
        </section>
      </section>
    </div>
  );
}

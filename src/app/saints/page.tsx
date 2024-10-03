import React from "react";
import Image from "next/image";
import saintsData from "./data.json";

interface Saint {
  id: number;
  title: string;
  description: string;
  img: string;
  rating: string;
}

const SaintCard: React.FC<Saint> = ({ title, description, img, rating }) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-md">
    <div className="relative aspect-square">
      <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
    </div>
    <div className="p-4">
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="mb-2 text-sm text-gray-600">{description}</p>
      <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
        {rating}
      </span>
    </div>
  </div>
);

export default function SaintsWebpage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="text-xl font-bold">The Merry Beggars</div>
          <div className="space-x-4">
            <button className="px-4 py-2 text-gray-600">Listen</button>
            <button className="px-4 py-2 text-gray-600">Shows</button>
            <button className="px-4 py-2 text-gray-600">Blog</button>
            <button className="px-4 py-2 text-gray-600">About</button>
          </div>
          <div className="space-x-4">
            <button className="rounded bg-yellow-500 px-4 py-2 text-white">
              Pay It Forward
            </button>
            <button className="rounded bg-red-600 px-4 py-2 text-white">
              Subscribe
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8 overflow-hidden rounded-lg bg-indigo-900 p-8 text-white">
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
        </div>

        <div className="mb-8">
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
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {saintsData
            .filter((saint) => saint.img)
            .slice(0, 20)
            .map((saint) => (
              <SaintCard key={saint.id} {...saint} />
            ))}
        </div>
      </main>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";

interface Saint {
  id: number;
  title: string;
  description: string;
  img: string;
  rating: string;
}

export function SaintCard({ title, description, img, rating }: Saint) {
  return (
    <Link href="https://www.themerrybeggars.com" className="block">
      <div className="duration-400 group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
        <div className="px-2 pt-2">
          <div className="relative aspect-square overflow-hidden rounded-md shadow-md">
            <Image
              src={img}
              alt={title}
              fill
              sizes="(min-width: 1280px) 100vw, (min-width: 1024px) 50vw, (min-width: 768px) 33vw, (min-width: 640px) 25vw, 20vw"
              placeholder="blur"
              style={{ objectFit: "cover" }}
              className="duration-400 transition-transform"
            />
          </div>
        </div>

        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-black">{title}</h3>
          <p className="duration-400 mb-2 text-sm text-black opacity-70 transition-opacity group-hover:opacity-90">
            {description}
          </p>
          <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-black">
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

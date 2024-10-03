import Image from "next/image";
import { ActionCard } from "@/components/ActionCard/index";
import { BlogCard } from "@/components/BlogCard/index";
import { Button } from "@/components/Button/index";
export default function HomePage() {
  return (
    <>
      <section className="bg-white font-sans">
        <div className="container mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="px-8 py-24">
            <div className="flex justify-between">
              <div className="w-2/3">
                <h1 className="text-7xl font-bold leading-tight text-black">
                  <span className="relative">
                    o
                    <span className="absolute -right-2 -top-2 inline-block h-16 w-16 overflow-hidden rounded-full bg-pink-300">
                      <Image
                        src="https://i.pravatar.cc/64"
                        alt="Portrait"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </span>
                  </span>
                  riginal Audio Entertainment for the Whole Family
                </h1>
                <p className="mt-6 max-w-2xl text-xl text-black">
                  At The Merry Beggars, we create original entertainment that is
                  rooted in the Christian faith so that families can build homes
                  full of adventure, joy, and faith.
                </p>
                <Button variant="primary" size="large">
                  Listen Now
                </Button>
              </div>
              <div className="w-1/3 text-right">
                <p className="text-sm text-black">
                  Our Community contain some amazing teams and
                  <br />
                  individuals with our over 5k followers.
                </p>
                <button className="ml-auto mt-4 flex items-center rounded-full bg-black px-4 py-2 text-sm text-white">
                  Join the community of 89+
                  <div className="ml-2 flex -space-x-2">
                    <Image
                      src="https://i.pravatar.cc/24"
                      alt="User 1"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://i.pravatar.cc/24"
                      alt="User 2"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full border-2 border-white"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-100 text-lg text-white">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/6677bcad1068f87fee9a103d_Blue%20textured%20background%201080.jpg"
          alt="Background texture"
          fill
        />
        <div className="relative py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-8 w-full md:mb-0 md:w-1/2">
                <div className="mb-6">
                  <h1 className="mb-2 text-5xl font-medium leading-tight md:text-[4.25rem]">
                    St. Maximilian Kolbe
                  </h1>
                  <h2 className="text-2xl md:text-3xl">
                    The Light Shines in the Darkness
                  </h2>
                </div>
                <p className="mb-6 text-xl font-light">
                  In a world at war, one man stood against the tide of evil.
                  From his visions of Our Lady to his resistance against
                  tyranny, witness the rise of Saint Maximilian Kolbe and his
                  love which changed the world.
                </p>
                <Button
                  variant="secondary"
                  size="large"
                  className="text-sm font-medium uppercase"
                  rightIcon={
                    <Image
                      src="https://cdn.prod.website-files.com/63c03e257f436856a8b2e63b/640cd4ad44ffd032c89c12e6_trending_flat_FILL0_wght400_GRAD0_opsz48.svg"
                      alt="Listen Now Icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  }
                >
                  Listen Now
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative mx-auto h-[31.25rem] w-full md:w-[31.25rem]">
                  <Image
                    className="object-contain"
                    src="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/669e439bcc495b28ef46b7d3_Kolbe%201.png"
                    alt="St. Maximilian Kolbe"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-10 text-lg text-zinc-800">
        <div className="relative grid auto-cols-fr grid-cols-[123.5px_1440px_123.5px] grid-rows-[34.13rem]">
          <div className="col-start-2 col-end-3 row-start-1 row-end-2">
            <div className="grid auto-cols-fr grid-cols-[348px_348px_348px_348px] grid-rows-[34.13rem] gap-4">
              <ActionCard
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/6507c18325f1b4d2bc3cfe86_TS2%20-%20Joan%20of%20Arc%20Episode%20Graphic%201080.png"
                alt="Joan of Arc"
                title="Joan of Arc"
                description="The girl who saved France."
                actionText="Listen Now"
                href="https://themerrybeggars.com/episodes/ts2-1-joan-of-arc-episode-one"
              />
              <ActionCard
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/6558c9507be7e8b2a7501c6a_CLive_1x1.png"
                alt="Christmas, Live!"
                title="Christmas, Live!"
                description="Watch the live radio Christmas show!"
                actionText="Watch Now"
                href="https://themerrybeggars.com/shows/christmas-live"
              />
              <ActionCard
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/64fea820e1882694e7e2a11c_The%20Saints%20-%20with%20TMB%20Wordmark%201080.png"
                alt="The Saints"
                title="The Saints"
                description="Discover the heroes who changed the world."
                actionText="Listen Now"
                href="https://themerrybeggars.com/shows/the-saints"
              />
              <ActionCard
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/6558c82ee7571c0eed95c578_0%20-%20NT%20Square%20Cover%20-%201080p.png"
                alt="On the Night Train"
                title="On the Night Train"
                description="Experience the 1879 train adventure across historic America!"
                actionText="Listen Now"
                href="https://themerrybeggars.com/shows/on-the-night-train"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-24 text-lg text-zinc-800">
        <div className="relative grid auto-cols-fr grid-cols-[123.5px_1440px_123.5px] grid-rows-[42.38rem]">
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 grid auto-cols-fr grid-cols-[90.00rem] grid-rows-[97.625px_531.453px] gap-12">
            <div className="grid auto-cols-fr grid-cols-[90.00rem] grid-rows-[56.8281px_24.7969px] gap-4">
              <h2 className="text-[3.25rem] font-medium leading-none">
                The Merry Beggars Blog
              </h2>
              <div className="col-span-1 row-span-1 grid grid-cols-[499.609px_924.391px] grid-rows-[1.38rem] gap-4">
                <div className="text-xs uppercase">
                  The latest stories and updates from the Merry Beggars
                </div>
                <div
                  className="flex-grow self-center bg-slate-300/[0.2]"
                  style={{
                    justifySelf: "stretch",
                  }}
                />
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[466.656px_466.672px_466.656px] grid-rows-[33.25rem] gap-x-5 gap-y-7">
              <BlogCard
                href="https://www.themerrybeggars.com/blog/kris-m-drexel"
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/640b7c7209bfcae1985590d6_McLaughlin%2C%20Kris.JPG"
                date="August 29, 2024"
                title="Kris McLaughlin: Writing Katharine Drexel"
                description="Hear from Kris McLaughlin, writer of next week's brand-new series, interviewed by TMB correspondent Charles Reamsnyder!"
                category="Category"
              />
              <BlogCard
                href="https://www.themerrybeggars.com/blog/katharine-drexel"
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/66d1ea2736e3a730063f4361_Katharine%20Drexel%201080.jpg"
                date="August 29, 2024"
                title="Katharine Drexel: Riches to Rags"
                description="Read all about St. Katharine Drexel, who gave up her life as a Philadelphia heiress to become a nun!"
                category="Category"
              />
              <BlogCard
                href="https://www.themerrybeggars.com/blog/pio-production-photos"
                imageSrc="https://cdn.prod.website-files.com/63c03e257f43688614b2e63f/66d0f6a6a6205ec353ecd65c_P1044578.JPG"
                date="August 29, 2024"
                title="The Saints 2024: Production Photos"
                description="See photos from our most recent recording of The Saints!"
                category="Category"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative mt-16 flex hidden items-center justify-between rounded-3xl bg-gray-100 p-8">
        <div className="flex space-x-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-black">34K</div>
            <div className="text-black">Podcasts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black">130</div>
            <div className="text-black">Users Joined</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black">130</div>
            <div className="text-black">Teams Created</div>
          </div>
        </div>
        <div className="absolute right-8 top-1/2 flex -translate-y-1/2 transform items-center space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg">
            <div className="mb-2 text-sm font-semibold text-black">
              Teams Members
            </div>
            <div className="flex -space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="Member 1"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/32/32"
                alt="Member 2"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/32/32"
                alt="Member 3"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="mt-2 text-sm font-semibold text-black">30+</div>
            <button className="mt-2 flex items-center text-xs text-blue-500">
              Join our Team
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

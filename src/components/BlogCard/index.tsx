import Image from "next/image";
import Link from "next/link";
interface BlogCardProps {
  href: string;
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

export function BlogCard({
  href,
  imageSrc,
  date,
  title,
  description,
  category,
}: BlogCardProps) {
  return (
    <Link
      className="grid w-full auto-cols-fr grid-cols-[1fr] grid-rows-[259px_auto] content-stretch gap-x-6 rounded-xl border-2 border-solid border-slate-300/[0.2] bg-white"
      href={href}
    >
      <div className="relative h-[259px] w-full cursor-pointer">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={title}
          fill
          sizes="100vw"
        />
      </div>
      <div className="grid cursor-pointer auto-cols-fr grid-cols-[1fr] grid-rows-[auto_auto_auto] gap-x-4 gap-y-6 self-stretch p-6">
        <div className="flex items-center justify-center self-start justify-self-start rounded-md bg-neutral-100 px-3 py-2 text-xs uppercase">
          {date}
        </div>
        <div className="grid auto-cols-fr grid-cols-[1fr] grid-rows-[auto_auto] items-start gap-x-4 gap-y-3 self-start">
          <h3 className="text-[1.38rem] font-medium leading-7">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-[1fr_auto] grid-rows-[auto] gap-x-3 gap-y-4 border-t-2 border-solid border-t-slate-300/[0.2] pt-4 uppercase">
          <div className="grid auto-cols-fr grid-cols-[auto] grid-rows-[auto] gap-x-4 gap-y-1 self-center justify-self-start text-xs">
            <div>{category}</div>
          </div>
          <div className="self-end justify-self-end rounded-lg border-2 border-solid border-neutral-100 text-sm font-medium">
            <div className="flex items-center justify-center gap-x-1 px-4 py-2">
              Read More
              <div className="relative h-4 w-4 flex-col justify-center">
                <Image
                  src="https://cdn.prod.website-files.com/63c03e257f436856a8b2e63b/640cd4ad44ffd032c89c12e6_trending_flat_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Read More"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

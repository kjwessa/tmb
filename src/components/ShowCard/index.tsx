interface ShowCardProps {
  title: string;
  imageUrl: string;
  rating: string;
  episodeCount: number;
  overview: string;
  link: string;
}

export const ShowCard: React.FC<ShowCardProps> = ({
  title,
  imageUrl,
  rating,
  episodeCount,
  overview,
  link,
}) => (
  <a
    className="flex auto-cols-fr grid-cols-[1fr] grid-rows-[auto_minmax(2px,_2px)_auto] flex-col gap-4 rounded-xl border-2 border-solid border-slate-300/[0.2] bg-white p-2"
    href={link}
  >
    <div className="grid cursor-pointer auto-cols-fr grid-cols-[169px_507px] grid-rows-[10.63rem] gap-x-4 gap-y-6 self-start">
      <div className="col-span-1 row-span-1 flex items-start rounded-xl">
        <img className="h-44 w-44 object-contain" src={imageUrl} />
      </div>
      <div className="grid flex-grow auto-cols-fr grid-cols-[332.656px_166.328px] grid-rows-[92.6719px_52.7969px] gap-x-2 gap-y-6">
        <div className="col-span-2 row-span-1 grid auto-cols-fr grid-cols-[249.484px_249.5px] grid-rows-[16.7969px_28px] flex-col gap-2 self-end">
          <div className="col-span-1 row-span-1 text-xs uppercase">
            <div className="col-span-2 row-span-1">Rating</div>
          </div>
          <div className="col-span-1 row-span-1 text-xs uppercase">
            <div className="col-span-2 row-span-1">Explore</div>
          </div>
          <div
            className={`flex justify-center justify-self-start rounded px-2 py-1 text-neutral-100 ${rating === "Everyone" ? "bg-green-500" : rating === "Age 7+" ? "bg-slate-500" : "bg-amber-300"}`}
          >
            <div>{rating}</div>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-start">
            {episodeCount}
            <div> Episodes</div>
          </div>
        </div>
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex auto-cols-fr grid-cols-[1fr] grid-rows-[auto] items-center justify-between gap-x-4 gap-y-[0.63rem] self-center">
          <h2 className="self-end text-[1.63rem] font-bold leading-8">
            {title}
          </h2>
          <div
            className='col-span-1 row-span-1 rounded-full bg-rose-700 bg-[url("https://cdn.prod.website-files.com/63c03e257f436856a8b2e63b/63c03e257f4368c202b2e908_icon-play.svg")] bg-no-repeat'
            style={{
              backgroundPosition: "55% 50%",
              backgroundSize: "12px 12px",
            }}
          />
        </div>
      </div>
    </div>
    <div className="col-span-1 row-span-1 cursor-pointer bg-slate-300/[0.2]" />
    <div className="cursor-pointer px-2">
      <div className="text-xs uppercase">Overview</div>
      <div className="overflow-hidden">{overview}</div>
    </div>
  </a>
);

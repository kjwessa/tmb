import { Button } from "@/components/Button/index";

export function Header() {
  return (
    <header className="relative flex bg-white text-lg text-black">
      <nav className="relative">
        <div className="relative px-6">
          <div className="grid auto-cols-fr grid-cols-[125px_697.5px_697.5px] grid-rows-[4.38rem] gap-4">
            <a
              className="col-span-1 row-span-1 self-center justify-self-start py-3 underline"
              href="https://www.themerrybeggars.com/"
            >
              <img
                className="inline-block h-11 w-24 cursor-pointer justify-self-center align-middle"
                src="https://cdn.prod.website-files.com/63c03e257f436856a8b2e63b/63d04aa70cd2657b60953fa9_618584b560c86579f45d3bbf_The%20Merry%20Beggars%20wordmark-color-p-500.png"
              />
            </a>
            <div className="flex items-stretch justify-start text-sm uppercase text-black">
              <div>
                <div className="relative flex cursor-pointer items-center py-3 pl-3 pr-8 text-neutral-800">
                  <div className="text-black">Listen</div>
                </div>
              </div>
              <div>
                <div className="relative flex cursor-pointer items-center py-3 pl-3 pr-8 text-neutral-800">
                  <div className="text-black">Shows</div>
                </div>
              </div>
              <div>
                <div className="relative flex cursor-pointer items-center py-3 pl-3 pr-8 text-neutral-800">
                  <div className="text-black">Blog</div>
                </div>
              </div>
              <div>
                <div className="relative flex cursor-pointer items-center py-3 pl-3 pr-8 text-neutral-800">
                  <div className="text-black">About</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 self-center justify-self-end font-medium">
              <Button
                variant="secondary"
                href="https://secure.relevantradio.com/site/Donation2?df_id=1720&mfc_pref=T&1720.donation=form1"
              >
                Donate
              </Button>
              <Button
                variant="primary"
                href="https://www.themerrybeggars.com/subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

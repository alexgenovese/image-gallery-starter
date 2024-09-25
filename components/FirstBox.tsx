import Logo from "../components/Icons/Logo";

export default function FirstBox() {

    return (
        <div className="after:content relative mb-5 flex h-[650px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <Logo />
            <h1 className="mt-8 mb-4 text-3xl text-black font-bold uppercase">
              Latest generations
            </h1>
            <p className="max-w-[40ch] text-black text-2xl sm:max-w-[32ch]">
              A wall of FREE photo and ai photo generations for your social post or adv
            </p>
            <hr/>
            <p className="max-w-[40ch] text-black/85 text-xl sm:max-w-[32ch]">
              Edit these photos or generate similar one. Sign Up to get Free credits and use upscaler (among the best in class), no-prompt photorealistic generator and others.
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-white bg-blue-600 px-6 py-4 text-2xl font-semibold text-white transition hover:bg-blue-600/80 hover:text-white md:mt-4"
              href="https://getreica.com?ref=wall-general"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up & Get FREE Credits
            </a>
        </div>
    )
}
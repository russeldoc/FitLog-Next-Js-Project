import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="px-5 py-10 md:py-16">
            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 md:grid-cols-2">

                {/* Hero Content */}
                <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">

                    {/* Eyebrow */}
                    <p className="mb-4 text-sm font-black tracking-[0.3em] text-lime-300">
                        WORKOUT LIBRARY
                    </p>

                    {/* Heading */}
                    <h1 className="max-w-3xl text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        TRAIN WITH INTENT.
                        <br />
                        LOG EVERY SET.
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
                        FitLog is a dark, no-nonsense gym companion:
                        pick a lift, lock it into today's plan, and watch
                        the week's work add up.
                    </p>

                    {/* CTA */}
                    <Link
                        href="#library"
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-black text-black transition hover:scale-105 hover:bg-lime-200"
                    >
                        BROWSE WORKOUTS
                        <ArrowDownRight size={18} />
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-zinc-950 sm:min-h-[400px] md:min-h-[520px]">

                    {/* Background Glow */}
                    <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl" />

                    {/* Workout Image */}
                    <Image
                        src="/banner.png"
                        alt="FitLog workout illustration"
                        width={700}
                        height={700}
                        className="relative z-10 h-full max-h-[520px] w-full object-contain p-6 sm:p-8 md:p-6"
                        priority
                    />

                    {/* Gradient */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-900 to-transparent" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
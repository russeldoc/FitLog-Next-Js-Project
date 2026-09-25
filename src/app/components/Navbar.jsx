"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isWorkoutActive =
        pathname === "/" || pathname.startsWith("/workout");

    const isPlanActive =
        pathname.startsWith("/my-plan");

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={42}
                        height={42}
                        className="h-10 w-10 object-contain"
                        priority
                    />

                    <span className="text-xl font-black tracking-tight">
                        FITLOG
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 md:flex">

                    <Link
                        href="/"
                        className={`rounded-full px-5 py-2 text-sm font-bold transition ${isWorkoutActive
                                ? "bg-white text-black"
                                : "text-white/60 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-5 py-2 text-sm font-bold transition ${isPlanActive
                                ? "bg-white text-black"
                                : "text-white/60 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                </nav>

                {/* Desktop Status Badges */}
                <div className="hidden items-center gap-2 md:flex">

                    <Link
                        href="/my-plan"
                        className="rounded-full bg-lime-300 px-4 py-2 text-xs font-black text-black transition hover:bg-lime-200"
                    >
                        PLAN 0
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-white/30 px-4 py-2 text-xs font-black text-white transition hover:bg-white/10"
                    >
                        SAVED 0
                    </Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="rounded-lg border border-white/20 p-2 transition hover:bg-white/10 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </button>

            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="border-t border-white/10 px-5 py-5 md:hidden">

                    <nav className="flex flex-col gap-3">

                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className={`rounded-lg px-4 py-3 font-bold transition ${isWorkoutActive
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-white hover:bg-white/10"
                                }`}
                        >
                            Workout
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setOpen(false)}
                            className={`rounded-lg px-4 py-3 font-bold transition ${isPlanActive
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-white hover:bg-white/10"
                                }`}
                        >
                            My Plan
                        </Link>

                        {/* Mobile Badges */}
                        <div className="mt-2 flex gap-2">

                            <Link
                                href="/my-plan"
                                onClick={() => setOpen(false)}
                                className="rounded-full bg-lime-300 px-4 py-2 text-xs font-black text-black"
                            >
                                PLAN 0
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-white/30 px-4 py-2 text-xs font-black"
                            >
                                SAVED 0
                            </Link>

                        </div>

                    </nav>

                </div>
            )}
        </header>
    );
};

export default Navbar;
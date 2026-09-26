"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Check,
    Clock3,
    Dumbbell,
    Flame,
    Gauge,
    ListChecks,
    Star,
} from "lucide-react";

import { useFitLog } from "../../context/FitLogContext";

const WorkoutDetails = ({ workout }) => {
    const { addToPlan, saveForLater } = useFitLog();

    return (
        <main className="px-5 py-10 md:py-16">
            <div className="mx-auto max-w-7xl">

                {/* Back Button */}
                <Link
                    href="/#library"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-lime-300"
                >
                    <ArrowLeft size={18} />
                    Back to library
                </Link>

                {/* Main Details */}
                <section className="grid overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative min-h-[400px] bg-zinc-950 md:min-h-[550px]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col p-7 md:p-10 lg:p-12">

                        {/* Tags */}
                        <div className="mb-5 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-300/10 px-3 py-1.5 text-xs font-black text-lime-300"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-5 text-base leading-7 text-white/60 md:text-lg">
                            {workout.description}
                        </p>

                        {/* Specifications */}
                        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">

                            <Spec
                                icon={<Dumbbell size={18} />}
                                label="EQUIPMENT"
                                value={workout.equipment}
                            />

                            <Spec
                                icon={<Gauge size={18} />}
                                label="DIFFICULTY"
                                value={workout.difficulty}
                            />

                            <Spec
                                icon={<ListChecks size={18} />}
                                label="SETS"
                                value={workout.sets}
                            />

                            <Spec
                                icon={<Check size={18} />}
                                label="REPS"
                                value={workout.reps}
                            />

                            <Spec
                                icon={<Clock3 size={18} />}
                                label="DURATION"
                                value={`${workout.duration} min`}
                            />

                            <Spec
                                icon={<Flame size={18} />}
                                label="CALORIES"
                                value={workout.caloriesBurned}
                            />
                        </div>

                        {/* Rating */}
                        <div className="mt-5 flex items-center gap-2 text-sm">
                            <Star
                                size={18}
                                className="fill-lime-300 text-lime-300"
                            />

                            <span className="font-black">
                                {workout.rating}
                            </span>

                            <span className="text-white/40">
                                rating
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            {/* Add To Plan */}
                            <button
                                type="button"
                                onClick={() => addToPlan(workout.id)}
                                className="flex-1 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-black text-black transition hover:scale-[1.02] hover:bg-lime-200"
                            >
                                ADD TO TODAY'S PLAN
                            </button>

                            {/* Save For Later */}
                            <button
                                type="button"
                                onClick={() => saveForLater(workout.id)}
                                className="flex-1 rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/10"
                            >
                                SAVE FOR LATER
                            </button>
                        </div>
                    </div>
                </section>

                {/* Instructions */}
                <section className="mt-12">
                    <div className="mb-7">
                        <p className="mb-2 text-sm font-black tracking-[0.3em] text-lime-300">
                            EXECUTION
                        </p>

                        <h2 className="text-3xl font-black md:text-4xl">
                            HOW TO DO IT
                        </h2>
                    </div>

                    <ol className="grid gap-4 md:grid-cols-2">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-black">
                                    {index + 1}
                                </div>

                                <p className="leading-7 text-white/60">
                                    {instruction}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </main>
    );
};

const Spec = ({ icon, label, value }) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center gap-2 text-lime-300">
                {icon}

                <span className="text-[10px] font-black tracking-wider">
                    {label}
                </span>
            </div>

            <p className="mt-2 text-sm font-bold text-white/80">
                {value}
            </p>
        </div>
    );
};

export default WorkoutDetails;
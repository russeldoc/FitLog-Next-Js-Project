"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const PlanCard = ({ workout }) => {
    return (
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <div className="grid md:grid-cols-[220px_1fr]">
                {/* Image */}
                <div className="relative h-56 bg-zinc-950 md:h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 220px"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 md:p-6">
                    <div>
                        {/* Muscle groups */}
                        <div className="mb-3 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-300/10 px-3 py-1 text-xs font-black text-lime-300"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-black tracking-tight">
                            {workout.name}
                        </h3>

                        <p className="mt-2 text-sm text-white/50">
                            {workout.equipment}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-4 text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                            <Clock3 size={16} />
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Flame size={16} />
                            {workout.caloriesBurned}
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Star
                                size={16}
                                className="fill-lime-300 text-lime-300"
                            />
                            {workout.rating}
                        </span>
                    </div>

                    {/* Details */}
                    <div className="mt-5">
                        <Link
                            href={`/workout/${workout.id}`}
                            className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:bg-lime-300"
                        >
                            VIEW DETAILS
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PlanCard;
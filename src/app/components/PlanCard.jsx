"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Check,
    Clock3,
    Flame,
    Star,
    X,
} from "lucide-react";

import { useFitLog } from "../../context/FitLogContext";

const PlanCard = ({ workout, activeTab }) => {
    const {
        completedIds,
        markAsDone,
        removeFromPlan,
        removeFromSaved,
    } = useFitLog();

    const isCompleted = completedIds.includes(workout.id);

    const handleRemove = () => {
        if (activeTab === "plan") {
            removeFromPlan(workout.id);
        } else {
            removeFromSaved(workout.id);
        }
    };

    return (
        <article
            className={`overflow-hidden rounded-2xl border bg-zinc-900 transition ${isCompleted
                ? "border-lime-300/30 opacity-70"
                : "border-white/10"
                }`}
        >
            <div className="grid md:grid-cols-[220px_1fr]">

                {/* Image */}
                <div className="relative h-48 bg-zinc-950 sm:h-56 md:h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className={`object-cover ${isCompleted
                            ? "grayscale"
                            : ""
                            }`}
                        sizes="(max-width: 768px) 100vw, 220px"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 md:p-6">

                    <div>
                        {/* Tags */}
                        <div className="mb-3 flex flex-wrap gap-2">
                            {workout.muscleGroups.map(
                                (muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-lime-300/10 px-3 py-1 text-xs font-black text-lime-300"
                                    >
                                        {muscle}
                                    </span>
                                )
                            )}
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3
                                    className={`text-2xl font-black tracking-tight sm:text-2xl ${isCompleted
                                        ? "line-through text-white/50"
                                        : ""
                                        }`}
                                >
                                    {workout.name}
                                </h3>

                                <p className="mt-2 text-sm text-white/50">
                                    {workout.equipment}
                                </p>
                            </div>

                            {/* Remove */}
                            <button
                                type="button"
                                onClick={handleRemove}
                                className="shrink-0 rounded-full border border-white/10 p-2 text-white/40 transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-300"
                                aria-label={`Remove ${workout.name}`}
                            >
                                <X size={18} />
                            </button>
                        </div>
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

                    {/* Actions */}
                    <div className="mt-5 flex flex-wrap gap-3">

                        <Link
                            href={`/workout/${workout.id}`}
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:bg-lime-300"
                        >
                            VIEW DETAILS
                        </Link>

                        {activeTab === "plan" && (
                            <button
                                type="button"
                                onClick={() =>
                                    markAsDone(workout.id)
                                }
                                disabled={isCompleted}
                                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black transition ${isCompleted
                                    ? "cursor-not-allowed bg-lime-300/20 text-lime-300"
                                    : "border border-white/20 text-white hover:bg-white/10"
                                    }`}
                            >
                                <Check size={16} />

                                {isCompleted
                                    ? "DONE"
                                    : "MARK AS DONE"}
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </article>
    );
};

export default PlanCard;
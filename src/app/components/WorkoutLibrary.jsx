"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

const WorkoutLibrary = ({ workouts }) => {
    const [sortBy, setSortBy] = useState("duration");

    const sortedWorkouts = useMemo(() => {
        return [...workouts].sort((a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return 0;
        });
    }, [workouts, sortBy]);

    return (
        <section
            id="library"
            className="px-5 py-16 md:py-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Library Header */}
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div>
                        <p className="mb-3 text-sm font-black tracking-[0.3em] text-lime-300">
                            TRAINING DATABASE
                        </p>

                        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                            THE LIBRARY
                        </h2>

                        <p className="mt-3 max-w-2xl text-white/50">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    {/* Sort Dropdown */}
                    <SortDropdown
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div>

                {/* Workout Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedWorkouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkoutLibrary;
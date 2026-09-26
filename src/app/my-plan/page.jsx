"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
    CalendarDays,
    Clock3,
    Flame,
    ListChecks,
    Bookmark,
} from "lucide-react";

import { getWorkouts } from "../../lib/api";
import { useFitLog } from "../../context/FitLogContext";
import PlanCard from "../components/PlanCard";

const MyPlanPage = () => {
    const { planIds, savedIds } = useFitLog();

    const [workouts, setWorkouts] = useState([]);
    const [activeTab, setActiveTab] = useState("plan");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWorkouts = async () => {
            try {
                const data = await getWorkouts();
                setWorkouts(data);
            } catch (error) {
                console.error("Failed to load workouts:", error);
            } finally {
                setLoading(false);
            }
        };

        loadWorkouts();
    }, []);

    const currentWorkouts = useMemo(() => {
        const ids = activeTab === "plan" ? planIds : savedIds;

        return workouts.filter((workout) =>
            ids.includes(workout.id)
        );
    }, [workouts, activeTab, planIds, savedIds]);

    const totalMinutes = useMemo(() => {
        return planIds.reduce((total, id) => {
            const workout = workouts.find(
                (item) => item.id === id
            );

            return total + (workout?.duration || 0);
        }, 0);
    }, [workouts, planIds]);

    const totalCalories = useMemo(() => {
        return planIds.reduce((total, id) => {
            const workout = workouts.find(
                (item) => item.id === id
            );

            return total + (workout?.caloriesBurned || 0);
        }, 0);
    }, [workouts, planIds]);

    return (
        <main className="px-5 py-10 md:py-16">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <section className="mb-10">
                    <p className="mb-3 text-sm font-black tracking-[0.3em] text-lime-300">
                        YOUR TRAINING
                    </p>

                    <h1 className="text-5xl font-black tracking-tight md:text-6xl">
                        MY PLAN
                    </h1>

                    <p className="mt-4 max-w-2xl text-white/50">
                        Cap of five lifts for today. Finish them, then
                        load more.
                    </p>
                </section>

                {/* Metrics */}
                <section className="mb-10 grid gap-4 sm:grid-cols-3">

                    <MetricCard
                        icon={<ListChecks size={20} />}
                        label="EXERCISES"
                        value={planIds.length}
                    />

                    <MetricCard
                        icon={<Clock3 size={20} />}
                        label="MINUTES"
                        value={totalMinutes}
                    />

                    <MetricCard
                        icon={<Flame size={20} />}
                        label="CALORIES"
                        value={totalCalories}
                    />

                </section>

                {/* Tabs */}
                <div className="mb-8 flex items-center gap-2 border-b border-white/10 pb-4">

                    <button
                        type="button"
                        onClick={() => setActiveTab("plan")}
                        className={`rounded-full px-5 py-2.5 text-sm font-black transition ${activeTab === "plan"
                                ? "bg-lime-300 text-black"
                                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        TODAY'S PLAN
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-full px-5 py-2.5 text-sm font-black transition ${activeTab === "saved"
                                ? "bg-lime-300 text-black"
                                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        SAVED
                    </button>

                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex min-h-60 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900">
                        <div className="flex items-center gap-3 text-white/50">
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-lime-300" />
                            <span className="text-sm font-bold">
                                Loading workouts...
                            </span>
                        </div>
                    </div>
                )}

                {/* Content */}
                {!loading && currentWorkouts.length > 0 && (
                    <div className="grid gap-5">
                        {currentWorkouts.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))}
                    </div>
                )}

                {/* Empty */}
                {!loading && currentWorkouts.length === 0 && (
                    <EmptyState activeTab={activeTab} />
                )}

            </div>
        </main>
    );
};

const MetricCard = ({ icon, label, value }) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
            <div className="flex items-center gap-2 text-lime-300">
                {icon}

                <span className="text-xs font-black tracking-widest">
                    {label}
                </span>
            </div>

            <p className="mt-4 text-4xl font-black">
                {value}
            </p>
        </div>
    );
};

const EmptyState = ({ activeTab }) => {
    const isSaved = activeTab === "saved";

    return (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-zinc-900 px-6 text-center">

            {isSaved ? (
                <Bookmark
                    size={36}
                    className="mb-5 text-white/30"
                />
            ) : (
                <CalendarDays
                    size={36}
                    className="mb-5 text-white/30"
                />
            )}

            <h2 className="text-2xl font-black">
                NOTHING HERE YET
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                Browse the library and add a lift to get today's
                plan moving.
            </p>

            <Link
                href="/#library"
                className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-black text-black transition hover:bg-lime-200"
            >
                GO TO WORKOUTS
            </Link>
        </div>
    );
};

export default MyPlanPage;
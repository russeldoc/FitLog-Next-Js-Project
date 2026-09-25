import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const WorkoutCard = ({ workout }) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-lime-300/40"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-zinc-950">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-2xl font-black tracking-tight transition group-hover:text-lime-300">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-white/50">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">

                    <span className="flex items-center gap-1.5">
                        <Clock3 size={16} />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Flame size={16} />
                        {workout.caloriesBurned}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Star size={16} />
                        {workout.rating}
                    </span>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
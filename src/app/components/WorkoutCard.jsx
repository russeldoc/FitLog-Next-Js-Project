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
            <div className="relative h-52 overflow-hidden bg-zinc-950 sm:h-60 lg:h-64">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">

                {/* Muscle Groups */}
                <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/70 sm:px-3 sm:text-xs"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-xl font-black leading-tight tracking-tight transition group-hover:text-lime-300 sm:text-2xl">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/50">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-white/60 sm:justify-between sm:text-sm">

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Clock3 size={15} />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Flame size={15} />
                        {workout.caloriesBurned}
                    </span>

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Star size={15} />
                        {workout.rating}
                    </span>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
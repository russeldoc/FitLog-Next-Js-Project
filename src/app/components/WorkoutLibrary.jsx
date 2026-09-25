import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = ({ workouts }) => {
    return (
        <section
            id="library"
            className="px-5 py-16 md:py-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10">
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

                {/* Workout Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout) => (
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
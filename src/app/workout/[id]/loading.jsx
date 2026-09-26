const WorkoutLoading = () => {
    return (
        <main className="px-5 py-10 md:py-16">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8 h-5 w-32 animate-pulse rounded bg-white/10" />

                <section className="grid overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 lg:grid-cols-2">

                    {/* Image skeleton */}
                    <div className="h-[400px] animate-pulse bg-white/5 md:h-[550px]" />

                    {/* Content skeleton */}
                    <div className="space-y-5 p-7 md:p-10 lg:p-12">

                        <div className="h-6 w-32 animate-pulse rounded-full bg-white/10" />

                        <div className="h-14 w-4/5 animate-pulse rounded bg-white/10" />

                        <div className="space-y-3">
                            <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                            <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
                            <div className="h-4 w-4/6 animate-pulse rounded bg-white/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3">
                            {Array.from({ length: 6 }).map(
                                (_, index) => (
                                    <div
                                        key={index}
                                        className="h-20 animate-pulse rounded-2xl bg-white/5"
                                    />
                                )
                            )}
                        </div>

                        <div className="flex gap-3 pt-4">
                            <div className="h-12 flex-1 animate-pulse rounded-full bg-white/10" />
                            <div className="h-12 flex-1 animate-pulse rounded-full bg-white/5" />
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
};

export default WorkoutLoading;
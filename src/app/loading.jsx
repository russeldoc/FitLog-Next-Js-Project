const Loading = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-5">
            <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 h-14 w-14">
                    <div className="absolute inset-0 rounded-full border-4 border-white/10" />

                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-lime-300" />
                </div>

                <p className="text-sm font-black tracking-[0.25em] text-lime-300">
                    FITLOG
                </p>

                <p className="mt-2 text-sm text-white/40">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
};

export default Loading;
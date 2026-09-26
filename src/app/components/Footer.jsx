import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                    />

                    <span className="text-lg font-black tracking-tight">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-sm text-white/40">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
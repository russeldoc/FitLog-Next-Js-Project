"use client";

import { ChevronDown } from "lucide-react";

const SortDropdown = ({ value, onChange }) => {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="appearance-none rounded-full border border-white/15 bg-zinc-900 py-3 pl-5 pr-11 text-sm font-bold text-white outline-none transition hover:border-white/30 focus:border-lime-300"
            >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
            </select>

            <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
            />
        </div>
    );
};

export default SortDropdown;
"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const FitLogContext = createContext(null);

export const FitLogProvider = ({ children }) => {
    const [planIds, setPlanIds] = useState([]);
    const [savedIds, setSavedIds] = useState([]);
    const [completedIds, setCompletedIds] = useState([]);
    const [toast, setToast] = useState("");

    // Load saved data from localStorage
    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");
        const storedCompleted =
            localStorage.getItem("fitlog-completed");

        if (storedPlan) {
            setPlanIds(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSavedIds(JSON.parse(storedSaved));
        }

        if (storedCompleted) {
            setCompletedIds(JSON.parse(storedCompleted));
        }
    }, []);

    // Save plan to localStorage
    useEffect(() => {
        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(planIds)
        );
    }, [planIds]);

    // Save saved workouts to localStorage
    useEffect(() => {
        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(savedIds)
        );
    }, [savedIds]);

    // Save completed workouts to localStorage
    useEffect(() => {
        localStorage.setItem(
            "fitlog-completed",
            JSON.stringify(completedIds)
        );
    }, [completedIds]);

    // Toast helper
    const showToast = (message) => {
        setToast(message);

        setTimeout(() => {
            setToast("");
        }, 2500);
    };

    // Add workout to today's plan
    const addToPlan = (id) => {
        if (planIds.includes(id)) {
            showToast("Already in today's plan");
            return;
        }

        if (planIds.length >= 5) {
            showToast("Today's plan is full");
            return;
        }

        setPlanIds((current) => [...current, id]);

        showToast("Added to today's plan");
    };

    // Save workout for later
    const saveForLater = (id) => {
        if (savedIds.includes(id)) {
            showToast("Already saved");
            return;
        }

        setSavedIds((current) => [...current, id]);

        showToast("Saved for later");
    };

    // Remove workout from today's plan
    const removeFromPlan = (id) => {
        setPlanIds((current) =>
            current.filter((planId) => planId !== id)
        );

        setCompletedIds((current) =>
            current.filter((completedId) => completedId !== id)
        );

        showToast("Removed from today's plan");
    };

    // Remove workout from saved list
    const removeFromSaved = (id) => {
        setSavedIds((current) =>
            current.filter((savedId) => savedId !== id)
        );

        showToast("Removed from saved");
    };

    // Mark workout as done
    const markAsDone = (id) => {
        if (completedIds.includes(id)) {
            showToast("Workout already completed");
            return;
        }

        setCompletedIds((current) => [
            ...current,
            id,
        ]);

        showToast("Workout marked as done");
    };

    return (
        <FitLogContext.Provider
            value={{
                planIds,
                savedIds,
                completedIds,
                addToPlan,
                saveForLater,
                removeFromPlan,
                removeFromSaved,
                markAsDone,
            }}
        >
            {children}

            {/* Toast */}
            {toast && (
                <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
                    <div className="rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-black text-black shadow-2xl">
                        {toast}
                    </div>
                </div>
            )}
        </FitLogContext.Provider>
    );
};

export const useFitLog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider"
        );
    }

    return context;
};
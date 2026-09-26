export const API_URL =
    "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
    const response = await fetch(API_URL, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export async function getWorkout(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        return null;
    }

    return response.json();
}
import { notFound } from "next/navigation";
import { getWorkout } from "../../../lib/api";
import WorkoutDetails from "../../components/WorkoutDetails";

const WorkoutPage = async ({ params }) => {
    const { id } = await params;

    const workout = await getWorkout(id);

    if (!workout) {
        notFound();
    }

    return <WorkoutDetails workout={workout} />;
};

export default WorkoutPage;
import { FC } from "react";
import { useParams, Params } from "react-router-dom";

interface EventDetailsParams extends Params {
    eventId: string;
}

const EventDetails: FC = () => {
    const { eventId } = useParams<EventDetailsParams>();

    return (
        <div>
            <h2>Event Details</h2>
            <p>Event ID: {eventId}</p>
        </div>
    );
};

export default EventDetails;

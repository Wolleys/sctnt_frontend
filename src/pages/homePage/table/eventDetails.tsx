import { FC } from "react";

interface EventDetailsProps {
  events: {
    eventType: string;
  }[];
}

const EventDetails: FC<EventDetailsProps> = ({ events }) => {
  return (
    <div>
      <h2>Event Details</h2>
      {events.map((event, index) => (
        <div key={index}>
          <p>Event Type: {event.eventType}</p>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;

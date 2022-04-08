import { events } from "../../data/events";
import { EventItem } from "./EventItem";

export const EventList = () => {

  return (
    <div>
      {events.map((event) => (
        <EventItem key={event.id} event= { event }/>
      ))}
    </div>
  );
};

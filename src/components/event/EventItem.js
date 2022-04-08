import { EventOptions } from "./EventOptions";

export const EventItem = ({ event }) => {
  const { name, markets } = event;

  return (
    <>
      {
        markets.length > 0 && (
        <div className="event__card">
          <div className="event__title"> {name}</div>
          <div className="event__option">
            {markets.map(({ id, name, selections }) => (
              <EventOptions
                key={id}
                market={{ id, name }}
                selections={selections}
              />
            ))}
          </div>
        </div>
        )
      }
    </>
  );
};

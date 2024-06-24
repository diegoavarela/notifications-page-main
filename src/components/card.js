import React from "react";

/* "image": "./src/assets/images/avatar-mark-webber.webp",
"name": "Mark Webber",
"action": "reacted to your recent post",
"event": "My first tournament today!",
"event-color": "text-dark-grayish-blue",
"when": "1m ago",
"notification": "true" */

function Card({
  image,
  name,
  action,
  event,
  eventColor,
  when,
  notification,
  message,
  setCardRead=()=>{},
}) {
  // handles the color of the notification, if it does not exist, is transparent
  const colorNotification =
    notification === "true" ? "text-red" : "text-transparent";
  const backgroundColor =
    notification === "true" ? "bg-light-grayish-blue-2" : "bg-white";

    console.log('eventColor', eventColor);

  return (
    <div
      onClick={setCardRead} className={`${backgroundColor} rounded-lg shadow-md grid grid-cols-4 p-4 cursor-pointer self-center`}
    >
      <img
        src={image}
        alt="dummy"
        className="rounded-lg h-10 w-10 col-span-1 mx-auto"
      />
      <div className="text-sm col-span-3">
        <p className="font-bold text-very-dark-blue">
          {name}
          <span className="text-grayish-blue ml-1">{action}</span>
          {event && (<span className={`font-bold ml-1 ${eventColor}`}>
            {event}
          </span>)}
          {notification && (
            <span className={`text-sm ${colorNotification}`}>
              <i className="bi bi-circle-fill text-xs ml-1"></i>
            </span>
          )}
          <br />
          <span className="text-dark-gray font-thin">{when}</span>
        </p>
        {message && (
          <p className="border border-light-grayish-blue-2 p-4 col-start-2 col-end-4 row-start-2 row-end-2 mt-2 font-light">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;

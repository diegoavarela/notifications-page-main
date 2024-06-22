import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import data from "./data/data.json";
import Card from "./components/card";
import urlImgAngela from "./assets/images/avatar-angela-gray.webp";
import urlImgMark from "./assets/images/avatar-mark-webber.webp";
import urlImgAnna from "./assets/images/avatar-anna-kim.webp";
import urlImgJacob from "./assets/images/avatar-jacob-thompson.webp";
import urlImgRizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import urlImgNathan from "./assets/images/avatar-nathan-peterson.webp";
import urlImgKimberly from "./assets/images/avatar-kimberly-smith.webp";

/* "image": "./src/assets/images/avatar-mark-webber.webp",
"name": "Mark Webber",
"action": "reacted to your recent post",
"event": "My first tournament today!",
"event-color": "text-dark-grayish-blue",
"when": "1m ago",
"notification": "true" */

const imageMap = {
  "avatar-angela-gray.webp": urlImgAngela,
  "avatar-mark-webber.webp": urlImgMark,
  "avatar-anna-kim.webp": urlImgAnna,
  "avatar-jacob-thompson.webp": urlImgJacob,
  "avatar-rizky-hasanuddin.webp": urlImgRizky,
  "avatar-nathan-peterson.webp": urlImgNathan,
  "avatar-kimberly-smith.webp": urlImgKimberly,
};

function App() {
  const [cards, setCards] = useState(data.card);

  function setCardRead(index) {
    setCards(
      cards.map((card, i) => {
        if (i === index) {
          return { ...card, notification: "false" };
        }
        return card;
      })
    );
  }

  return (
    <div className="App bg-white  desktop:bg-light-grayish-blue-2 desktop:grid desktop:grid-cols-1 desktop:justify-center desktop:items-center desktop:mx-auto desktop:h-[100vh]">
      <div className=" desktop:bg-white desktop:m-8 desktop:pt-8 desktop:pb-8 desktop:rounded-lg">
        <Header notifications="0" />
        <section className="grid grid-cols-1 gap-4 w-[90%] justify-center items-center mx-auto">
          {Array.isArray(cards)
            ? cards.map((item, index) => (
                <Card
                  {...item}
                  image={imageMap[item.image.split("/").pop()]}
                  key={index}
                  eventColor={item["event-color"]}
                  setCardRead={() => setCardRead(index)}
                />
              ))
            : null}
        </section>
      </div>
    </div>
  );
}

export default App;

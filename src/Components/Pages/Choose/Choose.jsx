import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Card } from "./Card";

export const Choose = () => {
  const cardData = [
    {
      id: 1,
      title: "Free",
      price: "$0",
      img: "checkMark.png",
      text: [
        "Capture ideas and find them quickly",
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      id: 2,
      title: "Personal",
      price: "$11.99",
      img: "checkMark.png",
      text: [
        "Keep home and family on track",
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      id: 3,
      title: "Organization",
      price: "$49.99",
      img: "checkMark.png",
      text: [
        "Capture ideas and find them quickly",
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ];
  const [currentId, setCurrentId] = useState(2);

  const handler = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });
  const handleSwipe = (direction) => {
    switch (direction) {
      case "left":
        return setCurrentId((prev) => Math.min(prev + 1, cardData.length));
      case "right":
        return setCurrentId((prev) => Math.max(prev - 1, 1));
      default:
        return null;
    }
  };
  return (
    <div className="paper-choose">
      <div className="center-info-div">
        <div className="choose-div">
          <span className="choose-span">Choose Your Plan</span>
          <span className="text-span">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </span>
        </div>
        <div className="cards-div" {...handler}>
          {cardData.map((obj) => (
            <Card key={obj.id} {...obj} currentId={currentId} />
          ))}
        </div>
      </div>
    </div>
  );
};

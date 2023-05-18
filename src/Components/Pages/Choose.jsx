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
  return (
    <div className="paper-choose">
      <div className="center-info-div">
        <div className="choose-div">
          <span className="choose-span">Project Managment</span>
          <span className="text-span">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </span>
        </div>
        <div className="cards-div">
          {cardData.map((obj) => {
            return (
              <div key={obj.id}>
                <span></span>
                <span></span>
                <span>{obj.text[0]}</span>
                {(() => {
                  for (let i = 1; i < 6; i++) {
                    return (
                      <div>
                        <img src={`./img/${obj.img}`} alt="checks" />{" "}
                        <span>{obj.text[i]}</span>
                      </div>
                    );
                  }
                })()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

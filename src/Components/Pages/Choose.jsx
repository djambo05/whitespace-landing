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
          <span className="choose-span">Choose Your Plan</span>
          <span className="text-span">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </span>
        </div>
        <div className="cards-div">
          {cardData.map((obj, ind) => {
            return (
              <div
                className={ind % 2 === 0 ? "card-white" : "card-blue"}
                key={obj.id}
              >
                <span className="title-span">{obj.title}</span>
                <span className="price-span">{obj.price}</span>
                <span className="info-span">{obj.text[0]}</span>
                {obj.text.slice(1).map((el, index) => {
                  return (
                    <div className="benefit-div" key={index}>
                      <img
                        className="benefit-img"
                        src={`./img/${obj.img}`}
                        alt="checks"
                      />
                      <span className="benefit-span">{el}</span>
                    </div>
                  );
                })}
                <button className="get-started-btn">Get Started</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

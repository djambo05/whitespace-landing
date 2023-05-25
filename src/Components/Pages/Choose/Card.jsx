export const Card = ({ id, title, price, text, img, currentId }) => {
  const indicator = currentId > 2 ? -1 : 1;
  console.log(currentId, -1 * indicator * 100);
  return (
    <div
      className={id === currentId ? "card-blue" : "card-white"}
      style={{
        transform:
          currentId !== 2 && indicator
            ? `translateX(${(indicator * window.innerWidth * 2) / 5}px)`
            : ``,
        transitionProperty: "transform",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "2s",
      }}
    >
      <span className="title-span">{title}</span>
      <span className="price-span">{price}</span>
      <span className="info-span">{text[0]}</span>
      {text.slice(1).map((el, index) => {
        return (
          <div className="benefit-div" key={index}>
            <img className="benefit-img" src={`./img/${img}`} alt="checks" />
            <span className="benefit-span">{el}</span>
          </div>
        );
      })}
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

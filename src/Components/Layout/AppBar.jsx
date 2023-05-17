import "./style.scss";
export const AppBar = () => {
  const menuData = [
    {
      id: 1,
      title: "Products",
      img: "arrowDown.png",
      alt: "arrow",
    },
    {
      id: 2,
      title: "Solutions",
      img: "arrowDown.png",
      alt: "arrow",
    },
    {
      id: 3,
      title: "Resources",
      img: "arrowDown.png",
      alt: "arrow",
    },
    {
      id: 4,
      title: "Pricing",
      img: "arrowDown.png",
      alt: "arrow",
    },
  ];
  return (
    <div className="container">
      <div className="left-div">
        <div>
          <img src="./img/logo.png" alt="logo" />
        </div>
        <span className="left-span">whitespace</span>
      </div>
      <div className="compress-div">
        <div className="center-div">
          {menuData.map((obj) => {
            return (
              <div className="item-center-div" key={obj.id}>
                <span className="item-span">{obj.title}</span>
                <div>
                  <img src={`./img/${obj.img}`} alt={obj.alt}></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-div">
          <button className="login-btn">Login</button>
          <button className="try-btn">Try Whitespace free</button>
          <div className="burger-div">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

import "./style.scss";
export const AppBar = () => {
  return (
    <div className="container">
      <div>
        <img srcSet="./img/logo.png" alt="logo"></img>
        <span className="left-span">whitespace</span>
      </div>
      <div className="center-div">
        <div>
          <span>Products</span>
          <img srcSet="./img/arrowDown.png" alt="arrow"></img>
        </div>
        <div>
          <span>Solutions</span>
          <img srcSet="./img/arrowDown.png" alt="arrow"></img>
        </div>
        <div>
          <span>Recourses</span>
          <img srcSet="./img/arrowDown.png" alt="arrow"></img>
        </div>
        <div>
          <span>Pricing</span>
          <img srcSet="./img/arrowDown.png" alt="arrow"></img>
        </div>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

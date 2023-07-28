import "./MenuBottom.css";

const MenuBottom = () => {
  return (
    <div className="menubar_bottom">
      <div className="menubar_bottom_1">
        <div className="menu_bottom_1--heading">
          <h1>Atlas AI</h1>
        </div>
        <div className="menu_bottom_1--line">
          <h2>Just like, M(AI)gic.</h2>
        </div>
        <div className="menu_bottom_1--buttons">
          <button className="menu_bottom_1_button1">let's talk</button>
          <button className="menu_bottom_1_button2">Our Services</button>
        </div>
      </div>
      <div className="menubar_bottom_2"></div>
    </div>
  );
};

export default MenuBottom;

import { Link } from "react-scroll";
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
          <button className="menu_bottom_1_button1" style={{border:"1px solid #000000"}}>
            <Link to="contact_us__form" smooth={true} duration={500}>
              let's talk
            </Link>
          </button>
          <button className="menu_bottom_1_button2">
            <Link to="our_services__div" smooth={true} duration={500}>
              Our Services
            </Link>
          </button>
        </div>
      </div>
      <div className="menubar_bottom_2"></div>
    </div>
  );
};

export default MenuBottom;

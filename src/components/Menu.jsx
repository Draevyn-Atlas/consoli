import logo from "./../assets/Atlas 1.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="top_section_menubar">
      <div className="top_section_menubar_1">
        <img src={logo} alt="main_logo" />
      </div>
      <div className="top_section_menubar_2">
        <button className="top_section_menubar_2_button1">Our Service</button>
        <button className="top_section_menubar_2_button2">
          Join our newsletter
        </button>
      </div>
    </div>
  );
};

export default Menu;

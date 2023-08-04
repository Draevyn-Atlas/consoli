import { Link } from "react-scroll";
import logo from "./../assets/Atlas 1.png";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = ({ onOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="top_section_menubar">
      <div className="top_section_menubar_1" onClick={() => navigate("/")}>
        <img src={logo} alt="main_logo" />
      </div>
      <div className="top_section_menubar_2">
        <button className="top_section_menubar_2_button1">
          <Link to="our_services__div" smooth={true} duration={500}>
            Our Services
          </Link>
        </button>
        <button
          className="top_section_menubar_2_button3"
          onClick={() => navigate("/career")}
        >
          Jobs/Careers
        </button>
        <button className="top_section_menubar_2_button2" onClick={onOpen}>
          Join our newsletter
        </button>
      </div>
    </div>
  );
};

export default Menu;

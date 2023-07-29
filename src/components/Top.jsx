import Menu from "./Menu";
import MenuBottom from "./MenuBottom";

const Top = ({ onOpen }) => {
  return (
    <div>
      <Menu onOpen={onOpen} />
      <MenuBottom />
    </div>
  );
};

export default Top;

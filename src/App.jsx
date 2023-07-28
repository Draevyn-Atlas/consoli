import "./App.css";
import Top from "./components/Top";
import heroBackground from "./assets/Background-1 1.png";

function App() {
  return (
    <div>
      <div className="top_hero__section" style={{ background: heroBackground }}>
        <Top />
      </div>
    </div>
  );
}

export default App;

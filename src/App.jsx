import "./App.css";
import ContactForm from "./components/ContactForm";
import Top from "./components/Top";

function App() {
  return (
    <div>
      <div className="top_hero__section">
        <Top />
      </div>
      <div className="contact_form__section">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;

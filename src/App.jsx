import "./App.css";
import ContactForm from "./components/ContactForm";
import OurServices from "./components/OurServices";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <div className="top_hero__section">
        <Top />
      </div>
      <div className="our_services__section">
        <OurServices />
      </div>
      <div className="contact_form__section">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;

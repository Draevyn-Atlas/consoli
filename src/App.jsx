import "./App.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Medium from "./components/medium/Medium";

function App() {
  return (
    <div className="App">
      <div className="top_hero__section">
        <Top />
      </div>
      <div className="medium_section">
        <Medium />
      </div>
      <div className="contact_form__section">
        <ContactForm />
      </div>
      <div className="footer__section">
        <Footer />
      </div>
    </div>
  );
}

export default App;

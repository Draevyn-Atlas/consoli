import { useDisclosure } from "@chakra-ui/react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Medium from "./components/medium/Medium";
import Joinus from "./popups/Joinus";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <div className="top_hero__section">
        <Top onOpen={onOpen} />
      </div>
      <div className="medium_section">
        <Medium />
      </div>
      <div className="contact_form__section">
        <ContactForm />
      </div>
      <div className="footer__section">
        <Footer onOpen={onOpen} />
      </div>
      <Joinus isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;

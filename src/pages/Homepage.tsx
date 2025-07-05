import Card from "../components/Card/Card";
import terminalKlone from "../assets/cards/terminal-klone.png";
import { navigateTo } from "../utils/navigate";

const Homepage = () => {
  return (
    <div className="flex justify-center">
      <Card imageSrc={terminalKlone} onClick={() => navigateTo("terminal")} />
    </div>
  );
};

export default Homepage;

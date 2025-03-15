import navigateTo from "../../utils/navigateTo";
import { darkTheme } from "../../utils/theme";
import { style } from "./style";

const Header = () => {
  return (
    <>
      <div className={style.headerContainer}>
        <h3 className={style.headerText}>Kloner.dev</h3>
        <div className={style.buttonContainer}>
          <a onClick={() => navigateTo("/")} className={style.button}>
            Home
          </a>
          |
          <a onClick={() => navigateTo("about-me")} className={style.button}>
            About-me
          </a>
          |
          <a
            onClick={() => navigateTo("https://github.com/Klon3r")}
            className={style.button}
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

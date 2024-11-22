import "./Header.css";
import Logo from "./Login-Icon.png";
const Header = () => {
  return (
    <div className="header-container">
      <a href="/#">
        <img src={Logo} alt="Logo" />
      </a>
      <ul className="list-container">
        <a href="/#">
          <li>About</li>
        </a>
        <a href="/#">
          <li>Questions</li>
        </a>
        <a href="/#">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};
export default Header;

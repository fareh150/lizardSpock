import "./Header.css";

const template = () => {
  return `
    <img src="/pagelogo/logo.png" alt="Logo of the web">
    <nav>
        <ul>
          <li><a href="#null" id="home-link">Home</a></li>
          <li><a href="#null" id="about-link">About</a></li>
        </ul>
    </nav>
    `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;

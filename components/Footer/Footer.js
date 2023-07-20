import "./Footer.css";

const template = () => {
  return `
    <p>F. Romero - 2023</p>
    `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;

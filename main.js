import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import linkPage from "./utils/linkPage";

//ahora toca funciones de botones buscar entre portafolio y demas para comparar
Header();
Footer();
Home();

linkPage("#home-link", Home);
linkPage("#about-link", About);

import { cleanPage } from "../../utils/cleanPage";
import "./About.css";

const template = () => {
  return `
  <h2>Curiosity</h2>
  <section>
    <p><em>Rock, Paper, Scissors, Lizard, Spock</em> is a game of chance that expands the traditional game of Rock, Paper, Scissors. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in "The Lizard-Spock Expansion".</p>
    <p>It is mentioned again in "The Rothman Disintegration", where Sheldon explains the rules to Penny and Barry Kripke.</p>
    <p>The game was originally created by Sam Kass with Karen Bryla. According to an interview with Kass, the series producers did not originally ask for permission to use the game, but Kass was officially referenced by Sheldon as the creator of the game during the "The Rothman Disintegration", after which he states, "Hail Sam Kass!" to which Leonard, Howard, Raj, and Sheldon all then chant "Hail!" while raising their hands.</p>
    </section>
    <h2>Rules in Spanish</h2>
      <img src="/pagelogo/logo.png" alt="Rules of the game">
    `;
};

const About = () => {
  const about = document.querySelector("main");
  about.innerHTML = template();
};

export default About;

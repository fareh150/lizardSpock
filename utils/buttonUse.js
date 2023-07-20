import { buttons } from "../Data/buttons";
import { winList } from "../Data/imglist";
import { loseList } from "../Data/imglist";

let playerChoice = "";
let computerChoice = "";
let imgChoicewin = "";
let imgChoicelose = "";
let playerCounter = 0;
let computerCounter = 0;

const vsimg = `<img src="/icon/vs.png" alt="vs image">`;

const btnListeners = () => {
  for (const value of buttons) {
    document.querySelector(`#${value}-btn`).addEventListener("click", () => {
      playerChoice = `${value}`;
      play();
    });
  }
};

const play = () => {
  //cogemos apartado vs result y img
  const vs = document.querySelector("#vs");
  const result = document.querySelector("#result");
  const img = document.querySelector("#sheldomimg");
  //verificamos que estan importados las opciones
  //hacemos que salga un random de las opciones
  const randomChoice = Math.floor(Math.random() * buttons.length);
  const imgChoicewin = Math.floor(Math.random() * winList.length);
  const imgChoicelose = Math.floor(Math.random() * loseList.length);
  //asignar resultado
  computerChoice = buttons[randomChoice];
  //ahora preparamos el jeugo con las opciones de ganar y el empate para dejar el else a la derrota
  if (playerChoice === "rock" && computerChoice === "scissors") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>
        `;
  } else if (playerChoice === "rock" && computerChoice === "lizard") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "paper" && computerChoice === "spock") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "scissors" && computerChoice === "lizard") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "lizard" && computerChoice === "paper") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "lizard" && computerChoice === "spock") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "spock" && computerChoice === "rock") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === "spock" && computerChoice === "scissors") {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    img.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `You win!!`;
    playerCounter++;
    img.innerHTML = `
        <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
        </div>
        ${loseList[imgChoicelose]}
        <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
        </div>`;
  } else if (playerChoice === computerChoice) {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `Draw!!`;
    img.innerHTML = `
    <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
    </div>
        ${winList[imgChoicewin]}
    <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
    </div>
    `;
  } else {
    vs.innerHTML = `${playerChoice}    ${vsimg}    ${computerChoice}`;
    result.innerHTML = `¡Looser!`;
    computerCounter++;
    img.innerHTML = `
    <div>
          <h2 id="player">Player</h2>
          <h3 is="countplayer">${playerCounter}</h3>
    </div>
        ${winList[imgChoicewin]}
    <div>
          <h2 id="computer">Computer</h2>
          <h3 is="countcompu">${computerCounter}</h3>
    </div>
    `;
  }
};

export default btnListeners;

import { state } from "../../state";

export function initResultsPage(goTo) {
  var result = "";
  const score = state.getScore();
  if (score.userPoints > score.computerPoints) {
    result = "Ganaste";
  } else if (score.userPoints == score.computerPoints) {
    result = "Empate";
  } else {
    result = "Perdiste";
  }
  const homePage = document.createElement("div");
  homePage.innerHTML = `
    <div class="resultspage__container">
      <my-result variant=${result}></my-result>
      <my-score uscore="${score.userPoints}" cscore="${score.computerPoints}"></my-score>
      <my-button id="reset-btn">Volver a Jugar</my-button>
    </div>
  `;

  requestAnimationFrame(() => {
    const resetButtonEl = document.querySelector("#reset-btn");
    resetButtonEl?.addEventListener("click", (e) => {
      e.preventDefault();
      // state.resetGame();
      goTo.goTo("/start");
    });
  });
  return homePage;
}

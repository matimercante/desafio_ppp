import { state } from "../../state";
const opciones = ["piedra", "papel", "tijeras"];

export function initGamePage(goTo) {
  var handSelected: boolean = false;
  const computermove = opciones[
    Math.floor(Math.random() * opciones.length)
  ] as any;
  const homePage = document.createElement("div");
  homePage.innerHTML = `
    <div class="gamepage__container">
      <my-counter startCounter="5"></my-counter>
      <div class="gamepage__hands-container">
        <hand-component variant="tijeras" estilo="game" img="../../../public/piedra.png"></hand-component>
        <hand-component variant="piedra" estilo="game" img="/public/papel.png"></hand-component>
        <hand-component variant="papel" estilo="game" img="/public/tijera.png"></hand-component>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    homePage.addEventListener("timeout", () => {
      console.log("Tiempo terminado");
      if (handSelected == false) {
        const usermove = opciones[
          Math.floor(Math.random() * opciones.length)
        ] as any;
        state.setPlay(usermove, computermove);
        const csHistory = state.getHistory();
        if (csHistory.length < 3) {
          goTo.goTo("/game");
        } else {
          goTo.goTo("/results");
        }
      }
    });

    homePage.addEventListener("handselected", (e) => {
      const t = e.detail as any;
      handSelected = true;
      state.setPlay(t.id, computermove);
      const csHistory = state.getHistory();
      if (csHistory.length < 3) {
        goTo.goTo("/game");
      } else {
        goTo.goTo("/results");
      }
    });
  });

  return homePage;
}

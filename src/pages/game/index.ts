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
    <div class="gamepage__chands-container">
      <hand-component variant="tijeras" estilo="computer"></hand-component>
      <hand-component variant="piedra" estilo="computer"></hand-component>
      <hand-component variant="papel" estilo="computer"></hand-component>
    </div>
    <my-counter startCounter="5"></my-counter>
    <div class="gamepage__uhands-container">
      <hand-component variant="tijeras" estilo="game""></hand-component>
      <hand-component variant="piedra" estilo="game""></hand-component>
      <hand-component variant="papel" estilo="game"></hand-component>
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
      homePage.dispatchEvent(
        new CustomEvent("computermove", {
          detail: {
            id: computermove,
            description: "computer move",
          },
          bubbles: true,
          composed: true,
        })
      );
      state.setPlay(t.id, computermove);
      const csHistory = state.getHistory();
      if (csHistory.length < 3) {
        setTimeout(() => {
          goTo.goTo("/game");
        }, 1000);
      } else {
        setTimeout(() => {
          goTo.goTo("/results");
        }, 1000);
      }
    });
  });

  return homePage;
}

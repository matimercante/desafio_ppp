export function initStartPage(goTo) {
  const homePage = document.createElement("div");
  homePage.innerHTML = `
    <div class="startpage__container">
      <my-text variant="start" color="#000000">Presioná jugar
y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
      <my-button id="play-btn">Jugar</my-button>
      <div class="homepage__hands-container">
        <hand-component variant="tijeras" estilo="mini"></hand-component>
        <hand-component variant="piedra" estilo="mini"></hand-component>
        <hand-component variant="papel" estilo="mini"></hand-component>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    const startButtonEl = document.querySelector("#play-btn");
    startButtonEl?.addEventListener("click", (e) => {
      e.preventDefault();
      goTo.goTo("/game");
    });
  });

  return homePage;
}

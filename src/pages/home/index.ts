export function initHomePage(goTo) {
  const homePage = document.createElement("div");
  homePage.innerHTML = `
    <div class="homepage__container">
      <my-text variant="large" color="#009048">Piedra Papel <span style="opacity:50%">ó</span> Tijeras</my-text>
      <my-button id="start-btn">Empezar</my-button>
      <div class="homepage__hands-container">
        <hand-component variant="tijeras" estilo="mini"></hand-component>
        <hand-component variant="piedra" estilo="mini"></hand-component>
        <hand-component variant="papel" estilo="mini"></hand-component>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    const startButtonEl = document.querySelector("#start-btn");
    startButtonEl?.addEventListener("click", (e) => {
      e.preventDefault();
      goTo.goTo("/start");
    });
  });

  return homePage;
}

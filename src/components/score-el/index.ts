export class Score extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  userScore;
  computerScore;
  constructor() {
    super();
    this.userScore = this.getAttribute("uscore");
    this.computerScore = this.getAttribute("cscore");
    this.connectedCallback();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadow.innerHTML = `
      <div class="container">
        <my-text variant="medium">Score</my-text>
        <div class="score">
          <my-text variant="body">Vos: ${this.userScore}</my-text>
          <my-text variant="body">Máquina: ${this.computerScore}</my-text>
        </div>
      </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
      .container{
        width:260px;
        border: solid 10px black;
        padding:10px;
        text-align:center; 
        display:grid;
        gap:20px;
        background-color: white;
        margin: 0 auto;
      }
      .score{
        text-align: right
      }
    `;
    this.shadow.append(style);
  }
}
customElements.define("my-score", Score);

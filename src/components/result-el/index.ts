export class Result extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  textResult: string;
  constructor() {
    super();
    this.textResult = this.getAttribute("variant");
    this.connectecCallback();
  }
  connectecCallback() {
    this.render();
  }
  render() {
    this.shadow.innerHTML = `
    <div class="star ${this.textResult.toLowerCase()}">
      <my-text variant="start" class="star-text"color="#fff">${
        this.textResult
      }</my-text>
    </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
      .star{
        width:300px;
        height:300px;
        border: 3px solid black;
        background-color:#6CB46C;
        margin: 0 auto;
        display:grid;
        align-items:center;
        position:relative;
        clip-path: polygon(
          50% 0%, 
          60% 35%, 
          98% 35%, 
          68% 57%, 
          79% 91%, 
          50% 70%, 
          21% 91%, 
          32% 57%, 
          2% 35%, 
          40% 35%
        );
      }
      .star.empate{  
        background-color:salmon;
      }
      .star.perdiste{  
        background-color:#DC5B49;
      }
      .star-text{
        position:relative;
        top:-22px;
      }
    `;
    this.shadow.append(style);
  }
}
customElements.define("my-result", Result);

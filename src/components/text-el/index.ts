type Variant = "start" | "body" | "medium" | "large" | "counter";

export class Text extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  variant;
  color;
  // textContent: string;

  constructor() {
    super();
    this.variant = this.getAttribute("variant") || "body";
    this.color = this.getAttribute("color") || "#111";
    this.connectedCallback();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
    <p class="${this.variant}" style="color:${this.color}">${this.textContent}</p>
    `;
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
      *{
        font-family: "Odibee Sans", sans-serif;
        margin:0;
      }
     .start{
        font-size:40px;
        font-weight: 600;
        text-align:center;
        }
      .body{
        font-size:40px;
        font-weight: 400;
        text-align:center;
      }
      .medium{
        font-size:55px;
        font-weight: 400;
        text-align:center;     
      }
      .large{
        font-size:80px;
        font-weight: 700;
        text-align:left;     
      }
      .counter{
        font-size:100px;
        font-weight: 700;
        text-align:center;     
      }
      .start{
        font-size:50px;
        font-weight: 400;
        text-align:center;     
      }
    `;
    this.shadow.appendChild(style);
  }
}
customElements.define("my-text", Text);

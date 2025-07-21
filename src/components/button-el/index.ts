// import {state} from "../../state"

export class Button extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  color: string;
  constructor() {
    super();
    // this.textContent = this.getAttribute("title") || "";
    this.connectedCallback();
    const buttonEl = this.shadow.querySelector("button");
    buttonEl?.addEventListener("click", (e) => {
      e.preventDefault();
      this.dispatchEvent(
        new CustomEvent("button-click", {
          detail: {
            name: "button clicked",
          },
        })
      );
    });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <button class="button">
        <my-text color="#D8FCFC" variant"body">${this.textContent}</my-text>
      </button>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
      .button{
        background-color: #006CFC;
        border: solid 10px #001997;
        border-radius:6px;
        width:100%;
        padding:5px;
      }
    `;
    this.shadow.appendChild(style);
  }
}
customElements.define("my-button", Button);

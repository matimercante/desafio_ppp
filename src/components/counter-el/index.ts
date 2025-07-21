export class Counter extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  counter: number = 3;
  intervalId: number | undefined;

  constructor() {
    super();
    const attr = this.getAttribute("startCounter");
    this.counter = attr ? parseInt(attr, 10) : 3;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .circle {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background-color: transparent;
          border: 20px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 3rem;
        }
        .hide {
          display: none;
        }
      </style>
      <div class="circle" id="circle">
        <my-text variant="counter">
          ${this.counter}
        </my-text>
      </div>
    `;

    const circle = this.shadow.querySelector<HTMLDivElement>("#circle");

    this.intervalId = window.setInterval(() => {
      this.counter--;

      if (circle) {
        if (this.counter >= 0) {
          circle.innerHTML = `<my-text variant="counter"> ${String(
            this.counter
          )}</my-text>
`;
        } else {
          circle.classList.add("hide");
          clearInterval(this.intervalId);
          this.dispatchEvent(
            new CustomEvent("timeout", {
              bubbles: true,
              detail: { text: "tiempo de ronda finalizado" },
            })
          );
        }
      }
    }, 1000);
  }
}

customElements.define("my-counter", Counter);

const hands = {
  tijeras: require("url:../../pictures/tijera.svg"),
  piedra: require("url:../../pictures/piedra.png"),
  papel: require("url:../../pictures/papel.png"),
};

export class Hand extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  variant: string = "";
  estilo: string = "";

  constructor() {
    super();
    const attrVariant = this.getAttribute("variant");
    this.variant = attrVariant;
    const attrEstilo = this.getAttribute("estilo");
    this.estilo = attrEstilo ?? "";
  }

  connectedCallback() {
    this.render();

    const imgEl = this.shadow.querySelector<HTMLImageElement>(
      `#${this.variant}`
    );

    if (this.estilo !== "computer") {
      imgEl?.addEventListener("click", this.onClick);
    }

    document.addEventListener("computermove", this.onComputerMove);
  }

  disconnectedCallback() {
    const imgEl = this.shadow.querySelector<HTMLImageElement>(
      `#${this.variant}`
    );

    imgEl?.removeEventListener("click", this.onClick);

    this.removeEventListener("computermove", this.onComputerMove);
  }

  private onClick = (e: Event) => {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("handselected", {
        detail: {
          id: this.variant,
          info: "item clicked",
        },
        bubbles: true,
        composed: true,
      })
    );
  };

  private onComputerMove = (e: Event) => {
    const imgEl = this.shadow.querySelector<HTMLImageElement>(
      `#${this.variant}`
    );
    const t = e.detail as any;
    if (this.estilo === "computer" && this.variant === t.id) {
      console.log(this.variant, t.id);
      imgEl?.classList.add("show");
    }
  };

  render() {
    this.shadow.innerHTML = `
      <style>
        .container {
          max-width:375px;;
        }

        .hand{
          width: 104px;
          height: 230px;
          position: relative;
          bottom: -5px;
        }
        
        .hand:hover{
        opacity:50%;
        height: 200px;
        }

        .mini {
          width: 57px;
          height: 127px;
        }

        .game {
          bottom: 0px;
        }
        
        .computer {
          transform: rotate(180deg);
          position:relative;
          top:-30px;
          display:none;
        }
        .computer.show{
          display:block
          }

        .computer:hover{
          opacity:100%;
        }

      </style>

      <div class="container">
        <img
          src="${hands[this.variant]}"
          alt="${this.variant}"
          id="${this.variant}"
          class="hand ${this.estilo}"
        />
      </div>
    `;
  }
}

customElements.define("hand-component", Hand);

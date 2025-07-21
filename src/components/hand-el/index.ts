import tijeras from "../../pictures/tijera.svg";
import piedra from "../../../public/piedra.png";
import papel from "../../../public/papel.png";

export class Hand extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  variant: string = "";
  estilo: string = "";
  objetoPpt: Record<string, string> = {
    piedra,
    papel,
    tijeras,
  };

  constructor() {
    super();

    const attrVariant = this.getAttribute("variant");
    if (!attrVariant || !(attrVariant in this.objetoPpt)) {
      console.error("Error: no se ingresó una variante válida");
      return;
    }
    this.variant = attrVariant;

    const attrEstilo = this.getAttribute("estilo");
    this.estilo = attrEstilo ?? "";
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  disconnectedCallback() {
    const imgEl = this.shadow.querySelector<HTMLImageElement>(
      `#${this.variant}`
    );
    imgEl?.removeEventListener("click", this.onClick);
  }

  private setupListeners() {
    const imgEl = this.shadow.querySelector<HTMLImageElement>(
      `#${this.variant}`
    );
    imgEl?.addEventListener("click", this.onClick);
  }

  private onClick = (e: Event) => {
    e.preventDefault();

    const imgEl = this.shadow.querySelector<HTMLImageElement>(
      `#${this.variant}`
    );
    imgEl?.classList.add("selected");

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

  render() {
    const imgSrc = this.objetoPpt[this.variant];

    this.shadow.innerHTML = `
      <style>
        .container {
          position: relative;
        }

        *{
          width: 104px;
          height: 230px;
          position: relative;
          bottom: -20px;
        }

        .mini {
          width: 57px;
          height: 127px;
        }

        .game {
          bottom: 20px;
        }

        .unselected {
          bottom: -20px;
          opacity: 50%;
        }

        .big {
          width: 159px;
          height: 356px;
          bottom: -60px;
        }

        .big.computer {
          top: -60px;
          transform: rotate(180deg);
        }
      </style>

      <div class="container">
        <img
          src="${imgSrc}"
          alt="${this.variant}"
          id="${this.variant}"
          class="${this.estilo}"
        />
      </div>
    `;
  }
}

customElements.define("hand-component", Hand);

var t=globalThis,e={},n={},o=t.parcelRequire230e;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequire230e=o);var a=o.register;a("ko4eS",function(t,e){t.exports=import.meta.resolve("fhohL")}),a("foGl6",function(t,e){t.exports=import.meta.resolve("hLjVK")}),a("lgw0O",function(t,e){t.exports=import.meta.resolve("jZ9sI")});const i={tijeras:o("ko4eS"),piedra:o("foGl6"),papel:o("lgw0O")};class r extends HTMLElement{shadow=this.attachShadow({mode:"open"});variant="";estilo="";constructor(){super();let t=this.getAttribute("variant");this.variant=t;let e=this.getAttribute("estilo");this.estilo=e??""}connectedCallback(){this.render();let t=this.shadow.querySelector(`#${this.variant}`);"computer"!==this.estilo&&t?.addEventListener("click",this.onClick),document.addEventListener("computermove",this.onComputerMove)}disconnectedCallback(){let t=this.shadow.querySelector(`#${this.variant}`);t?.removeEventListener("click",this.onClick),this.removeEventListener("computermove",this.onComputerMove)}onClick=t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("handselected",{detail:{id:this.variant,info:"item clicked"},bubbles:!0,composed:!0}))};onComputerMove=t=>{let e=this.shadow.querySelector(`#${this.variant}`),n=t.detail;"computer"===this.estilo&&this.variant===n.id&&(console.log(this.variant,n.id),e?.classList.add("show"))};render(){this.shadow.innerHTML=`
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
          src="${i[this.variant]}"
          alt="${this.variant}"
          id="${this.variant}"
          class="hand ${this.estilo}"
        />
      </div>
    `}}customElements.define("hand-component",r);class s extends HTMLElement{shadow=this.attachShadow({mode:"open"});variant;color;constructor(){super(),this.variant=this.getAttribute("variant")||"body",this.color=this.getAttribute("color")||"#111",this.connectedCallback()}connectedCallback(){this.render()}render(){let t=document.createElement("style");this.shadow.innerHTML=`
    <p class="${this.variant}" style="color:${this.color}">${this.textContent}</p>
    `,t.innerHTML=`
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
    `,this.shadow.appendChild(t)}}customElements.define("my-text",s);class l extends HTMLElement{shadow=this.attachShadow({mode:"open"});color;constructor(){super(),this.connectedCallback();let t=this.shadow.querySelector("button");t?.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("button-click",{detail:{name:"button clicked"}}))})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <button class="button">
        <my-text color="#D8FCFC" variant"body">${this.textContent}</my-text>
      </button>
    `;let t=document.createElement("style");t.innerHTML=`
      .button{
        background-color: #006CFC;
        border: solid 10px #001997;
        border-radius:6px;
        width:100%;
        padding:5px;
      }
    `,this.shadow.appendChild(t)}}customElements.define("my-button",l);class c extends HTMLElement{shadow=this.attachShadow({mode:"open"});counter=3;intervalId;constructor(){super();let t=this.getAttribute("startCounter");this.counter=t?parseInt(t,10):3}connectedCallback(){this.render()}disconnectedCallback(){clearInterval(this.intervalId)}render(){this.shadow.innerHTML=`
      <style>
        .circle {
          width: 200px;
          height: 200px;
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
    `;let t=this.shadow.querySelector("#circle");this.intervalId=window.setInterval(()=>{this.counter--,t&&(this.counter>=0?t.innerHTML=`<my-text variant="counter"> ${String(this.counter)}</my-text>
`:(t.classList.add("hide"),clearInterval(this.intervalId),this.dispatchEvent(new CustomEvent("timeout",{bubbles:!0,detail:{text:"tiempo de ronda finalizado"}}))))},1e3)}}customElements.define("my-counter",c);class d extends HTMLElement{shadow=this.attachShadow({mode:"open"});textResult;constructor(){super(),this.textResult=this.getAttribute("variant"),this.connectecCallback()}connectecCallback(){this.render()}render(){this.shadow.innerHTML=`
    <div class="star ${this.textResult.toLowerCase()}">
      <my-text variant="start" class="star-text"color="#fff">${this.textResult}</my-text>
    </div>
    `;let t=document.createElement("style");t.innerHTML=`
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
    `,this.shadow.append(t)}}customElements.define("my-result",d);class h extends HTMLElement{shadow=this.attachShadow({mode:"open"});userScore;computerScore;constructor(){super(),this.userScore=this.getAttribute("uscore"),this.computerScore=this.getAttribute("cscore"),this.connectedCallback()}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <div class="container">
        <my-text variant="medium">Score</my-text>
        <div class="score">
          <my-text variant="body">Vos: ${this.userScore}</my-text>
          <my-text variant="body">M\xe1quina: ${this.computerScore}</my-text>
        </div>
      </div>
    `;let t=document.createElement("style");t.innerHTML=`
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
    `,this.shadow.append(t)}}customElements.define("my-score",h);const m={data:{userPlay:"",computerPlay:""},history:[],listeners:[],init(){this.syncWithLocalStorage()},getState(){return this.data},getHistory(){return this.history},setState(t){for(let e of(this.data=t,this.history.push({...t}),this.listeners));localStorage.setItem("state",JSON.stringify(t)),localStorage.setItem("history",JSON.stringify(this.history))},subscribe(t){this.listeners.push(t)},setPlay(t,e){let n=this.getState();n.userPlay=t,n.computerPlay=e,this.setState(n)},getScore(){let t=this.history,e=0,n=0;return t.forEach(t=>{let o=t.userPlay,a=t.computerPlay;o==a?(e++,n++):"papel"==o&&"tijeras"==a||"tijeras"==o&&"piedra"==a||"piedra"==o&&"papel"==a?n++:("papel"==a&&"tijeras"==o||"tijeras"==a&&"piedra"==o||"piedra"==a&&"papel"==o)&&e++}),e>n?console.log("ganaste"):e==n?console.log("empate"):console.log("ganó la computadora"),{userPoints:e,computerPoints:n}},resetGame(){this.data.userPlay="",this.data.computerPlay="",this.history=[],localStorage.removeItem("state"),localStorage.removeItem("history")},syncWithLocalStorage(){let t=localStorage.getItem("state"),e=localStorage.getItem("history");t&&(this.data=JSON.parse(t)),e&&(this.history=JSON.parse(e))}},p=["piedra","papel","tijeras"],u="/desafio_ppp",v=[{path:/\/home/,handler:function(t){let e=document.createElement("div");return e.innerHTML=`
    <div class="homepage__container">
      <my-text variant="large" color="#009048">Piedra Papel <span style="opacity:50%">\xf3</span> Tijeras</my-text>
      <my-button id="start-btn">Empezar</my-button>
      <div class="homepage__hands-container">
        <hand-component variant="tijeras" estilo="mini"></hand-component>
        <hand-component variant="piedra" estilo="mini"></hand-component>
        <hand-component variant="papel" estilo="mini"></hand-component>
      </div>
    </div>
  `,requestAnimationFrame(()=>{let e=document.querySelector("#start-btn");e?.addEventListener("click",e=>{e.preventDefault(),t.goTo("/start")})}),e}},{path:/\/start/,handler:function(t){let e=document.createElement("div");return e.innerHTML=`
    <div class="startpage__container">
      <my-text variant="start" color="#000000">Presion\xe1 jugar
y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
      <my-button id="play-btn">Jugar</my-button>
      <div class="homepage__hands-container">
        <hand-component variant="tijeras" estilo="mini"></hand-component>
        <hand-component variant="piedra" estilo="mini"></hand-component>
        <hand-component variant="papel" estilo="mini"></hand-component>
      </div>
    </div>
  `,requestAnimationFrame(()=>{let e=document.querySelector("#play-btn");e?.addEventListener("click",e=>{e.preventDefault(),m.resetGame(),t.goTo("/game")})}),e}},{path:/\/game/,handler:function(t){var e=!1;let n=p[Math.floor(Math.random()*p.length)],o=document.createElement("div");return o.innerHTML=`
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
  `,requestAnimationFrame(()=>{o.addEventListener("timeout",()=>{if(console.log("Tiempo terminado"),!1==e){let e=p[Math.floor(Math.random()*p.length)];m.setPlay(e,n),m.getHistory().length<3?t.goTo("/game"):t.goTo("/results")}}),o.addEventListener("handselected",a=>{let i=a.detail;e=!0,o.dispatchEvent(new CustomEvent("computermove",{detail:{id:n,description:"computer move"},bubbles:!0,composed:!0})),m.setPlay(i.id,n),m.getHistory().length<3?setTimeout(()=>{t.goTo("/game")},1e3):setTimeout(()=>{t.goTo("/results")},1e3)})}),o}},{path:/\/results/,handler:function(t){var e="";let n=m.getScore();e=n.userPoints>n.computerPoints?"Ganaste":n.userPoints==n.computerPoints?"Empate":"Perdiste";let o=document.createElement("div");return o.innerHTML=`
    <div class="resultspage__container">
      <my-result variant=${e}></my-result>
      <my-score uscore="${n.userPoints}" cscore="${n.computerPoints}"></my-score>
      <my-button id="reset-btn">Volver a Jugar</my-button>
    </div>
  `,requestAnimationFrame(()=>{let e=document.querySelector("#reset-btn");e?.addEventListener("click",e=>{e.preventDefault(),t.goTo("/start")})}),o}}];function g(){return location.host.includes("matimercante.github.io")}m.init();const y=document.querySelector(".root");y&&function(t){function e(t){let e=g()?u+t:t;history.pushState({},"",e),n(e)}function n(n){let o=g()?n.replace(u,""):n;for(let n of v)if(n.path.test(o)){let o=n.handler({goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(o)}}let o=location.pathname;"/"===o||"/desafio_ppp"===o?e("/home"):n(o),window.onpopstate=function(){n(o)}}(y);
//# sourceMappingURL=desafio-juego.021fa20a.js.map

import "./components/hand-el/index";
import "./components/text-el/index";
import "./components/button-el/index";
import "./components/counter-el/index";
import "./components/result-el/index";
import "./components/score-el/index";

import { initRouter } from "./router";

const containerEl = document.querySelector(".root");
// console.log(containerEl?.innerHTML);

// console.log("initrouter index.ts", initRouter(containerEl));
containerEl ? initRouter(containerEl) : "";

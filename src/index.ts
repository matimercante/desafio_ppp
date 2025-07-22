import "./components/hand-el/index";
import "./components/text-el/index";
import "./components/button-el/index";
import "./components/counter-el/index";
import "./components/result-el/index";
import "./components/score-el/index";
import { initRouter } from "./router";
import { state } from "./state.js";

state.init();
const containerEl = document.querySelector(".root");
containerEl ? initRouter(containerEl) : "";

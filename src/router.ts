import { initHomePage } from "./pages/home";
import { initStartPage } from "./pages/start";
import { initGamePage } from "./pages/game";
import { initResultsPage } from "./pages/results";

const BASE_PATH = "/desafio_ppp";

const routes = [
  {
    path: /\/home/,
    handler: initHomePage,
  },
  {
    path: /\/start/,
    handler: initStartPage,
  },
  {
    path: /\/game/,
    handler: initGamePage,
  },
  {
    path: /\/results/,
    handler: initResultsPage,
  },
];

function isGitHubPages() {
  return location.host.includes("matimercante.github.io");
}

export function initRouter(container) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRouter(completePath);
  }

  function handleRouter(route) {
    const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const page = r.handler({ goTo: goTo });
        container.firstChild ? container.firstChild.remove() : "";
        container.appendChild(page);
      }
    }
  }
  const path = location.pathname;
  if (path === "/" || path === "/desafio_ppp") {
    goTo("/home");
  } else {
    handleRouter(path);
  }

  window.onpopstate = function () {
    handleRouter(path);
  };
}

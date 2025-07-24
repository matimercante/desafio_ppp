import { initHomePage } from "./pages/home";
import { initStartPage } from "./pages/start";
import { initGamePage } from "./pages/game";
import { initResultsPage } from "./pages/results";

const BASE_PATH = "/piedra_papel_tijeras";

const routes = [
  {
    path: /\/piedra_papel_tijeras\/home/,
    handler: initHomePage,
  },
  {
    path: /\/piedra_papel_tijeras\/start/,
    handler: initStartPage,
  },
  {
    path: /\/piedra_papel_tijeras\/game/,
    handler: initGamePage,
  },
  {
    path: /\/piedra_papel_tijeras\/results/,
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
    const newRoute = isGitHubPages() ? BASE_PATH + route : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const page = r.handler({ goTo: goTo });
        container.firstChild ? container.firstChild.remove() : "";
        container.appendChild(page);
      }
    }
  }
  const path = location.pathname;
  if (path == "/") {
    handleRouter("/home");
  } else {
    handleRouter(path);
  }
}

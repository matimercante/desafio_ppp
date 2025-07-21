import { initHomePage } from "./pages/home";
import { initStartPage } from "./pages/start";
import { initGamePage } from "./pages/game";
import { initResultsPage } from "./pages/results";

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

export function initRouter(container) {
  // console.log(container.innerHTML);

  function goTo(path) {
    history.pushState({}, "", path);
    handleRouter(path);
  }

  function handleRouter(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
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

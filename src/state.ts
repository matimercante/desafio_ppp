type Play = "piedra" | "papel" | "tijeras";

export const state = {
  data: {
    userPlay: "",
    computerPlay: "",
  },
  history: [],
  listeners: [],

  init() {
    this.syncWithLocalStorage();
  },
  getState() {
    return this.data;
  },

  getHistory() {
    return this.history;
  },

  setState(newState) {
    this.data = newState;
    this.history.push({ ...newState });
    for (const cb of this.listeners) {
      cb;
    }
    localStorage.setItem("state", JSON.stringify(newState));
    localStorage.setItem("history", JSON.stringify(this.history));
  },

  subscribe(cb: () => {}) {
    this.listeners.push(cb);
  },

  setPlay(usermove: Play, computermove: Play) {
    const cs = this.getState();
    cs.userPlay = usermove;
    cs.computerPlay = computermove;
    this.setState(cs);
  },

  getScore() {
    const ch = this.history;
    let userPoints = 0,
      computerPoints = 0;
    ch.forEach((game) => {
      const uPlay = game.userPlay;
      const cPlay = game.computerPlay;
      if (uPlay == cPlay) {
        userPoints++;
        computerPoints++;
      } else if (
        (uPlay == "papel" && cPlay == "tijeras") ||
        (uPlay == "tijeras" && cPlay == "piedra") ||
        (uPlay == "piedra" && cPlay == "papel")
      ) {
        computerPoints++;
      } else {
        if (
          (cPlay == "papel" && uPlay == "tijeras") ||
          (cPlay == "tijeras" && uPlay == "piedra") ||
          (cPlay == "piedra" && uPlay == "papel")
        ) {
          userPoints++;
        }
      }
    });
    if (userPoints > computerPoints) {
      console.log("ganaste");
    } else if (userPoints == computerPoints) {
      console.log("empate");
    } else {
      console.log("ganó la computadora");
    }
    return { userPoints, computerPoints };
  },
  resetGame() {
    this.data.userPlay = "";
    this.data.computerPlay = "";
    this.history = [];
    localStorage.removeItem("state");
    localStorage.removeItem("history");
  },

  syncWithLocalStorage() {
    const storageState = localStorage.getItem("state");
    const historyState = localStorage.getItem("history");
    if (storageState) {
      this.data = JSON.parse(storageState);
    }
    if (historyState) {
      this.history = JSON.parse(historyState);
    }
  },
};

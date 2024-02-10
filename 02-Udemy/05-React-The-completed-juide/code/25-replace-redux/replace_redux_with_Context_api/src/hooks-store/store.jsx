import { useEffect, useState } from "react";
let globalState = {}; // all kind of states
let listeners = []; // places when we can listen to states
let actions = {};

// Create a custome hooks
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; // we need a globalState , we get the second setState

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActinons, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActinons };
};

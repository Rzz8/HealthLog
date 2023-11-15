import React, { useState, useEffect, createContext } from "react";

export const LoggerContext = createContext();

const addEvent = (event, state, setState) => {
  let objIndex = state.findIndex((obj) => obj.event === event);

  setState((x) => {
    x[objIndex].data.push(new Date().getTime());

    return [...x];
  });
};

export const LoggerProvider = ({ children }) => {
  const [state, setState] = useState([
    { event: "Chocolate", data: [] },

    { event: "Coffee", data: [] },

    { event: "Fruit", data: [] },

    { event: "Walk", data: [] },
  ]);

  return (
    <LoggerContext.Provider
      value={[state, setState, (x) => addEvent(x, state, setState)]}
    >
      {children}
    </LoggerContext.Provider>
  );
};

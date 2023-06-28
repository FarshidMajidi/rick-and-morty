"use client";
import React, { Dispatch, createContext, useReducer } from "react";

type Query = {
  search: string;
};

type ActionType = {
  type: string;
  payload: Query;
};

const initialState: Query = {
  search: "",
};

const reducer = (state: Query, action: ActionType) => {
  switch (action.type) {
    case "APPLY":
      return { ...action.payload };
    case "CHANGE_SEARCH":
      return { ...action.payload };
    default:
      return state;
  }
};

export const LocationContext = createContext<{
  state: Query;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationContext.Provider>
  );
};

"use client";
import React, { Dispatch, createContext, useReducer } from "react";

type Query = {
  gender: string;
  search: string;
};

type ActionType = {
  type: string;
  payload: Query;
};

const initialState: Query = {
  gender: "",
  search: "",
};

const reducer = (state: Query, action: ActionType) => {
  switch (action.type) {
    case "APPLY":
      return { ...state, ...action.payload };
    case "CHANGE_GENDER":
      return { ...state, gender: action.payload.gender };
    case "CHANGE_SEARCH":
      return { ...state, search: action.payload.search };
    default:
      return state;
  }
};

export const CharacterContext = createContext<{
  state: Query;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

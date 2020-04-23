//This component goes to App
import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
////////////////////////////////////////////////////////////////////////
const ensembleReducer = (state, action) => {
  switch (action.type) {
    case "delete_ensemble":
      return state.filter((ensemble) => ensemble.id !== action.payload);
    case "add_ensemble":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: `Ensemble #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};
////////////////////////////////////////////////////
const addEnsemble = (dispatch) => {
  return () => {
    dispatch({ type: "add_ensemble" });
  };
};

const deleteEnsemble = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_ensemble", payload: id });
  };
};
///////////////////////////////////////////////////////////
export const { Context, Provider } = createDataContext(
  ensembleReducer,
  { addEnsemble, deleteEnsemble },
  []
);

//This component goes to App
import createDataContext from "./createDataContext";
import CreateEnsemble from "../Screens/CreateEnsemble";
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
          title: action.payload.title,
          chairs: action.payload.chairs,
        },
      ];
    case "edit_ensemble":
      return state.map((ensemble) => {
        return ensemble.id === action.payload.id ? action.payload : ensemble;
      });
    default:
      return state;
  }
};
////////////////////////////////////////////////////
const addEnsemble = (dispatch) => {
  return (chairs, title, callback) => {
    dispatch({ type: "add_ensemble", payload: { chairs, title } });
    if (callback) {
      callback();
    }
  };
};

const deleteEnsemble = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_ensemble", payload: id });
  };
};

const editEnsemble = (dispatch) => {
  return (chairs, title, id, callback) => {
    dispatch({ type: "edit_ensemble", payload: { chairs, title, id } });
    if (callback) {
      callback();
    }
  };
};
///////////////////////////////////////////////////////////
export const { Context, Provider } = createDataContext(
  ensembleReducer,
  { addEnsemble, deleteEnsemble, editEnsemble },
  []
);

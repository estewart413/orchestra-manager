//This component goes to App
import createDataContext from "./createDataContext";
import CreateEnsemble from '../Screens/CreateEnsemble';
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
          capacity: CreateEnsemble.chairs
        },
      ];
    default:
      return state;
  }
};
////////////////////////////////////////////////////
const addEnsemble = dispatch => {
  return (chairs) => {
    dispatch({ type: "add_ensemble", payload: chairs});
  };
};

const deleteEnsemble = dispatch => {
  return (id) => {
    dispatch({ type: "delete_ensemble", payload: id });
  };
};
const saveEnsamble = dispatch => {
  return () => {
    dispatch({ type: "saveEnsemble"})
  }
}
///////////////////////////////////////////////////////////
export const { Context, Provider } = createDataContext(
  ensembleReducer,
  { addEnsemble, deleteEnsemble, saveEnsamble },
  []
);

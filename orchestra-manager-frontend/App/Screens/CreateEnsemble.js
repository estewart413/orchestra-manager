import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
/////////////////////////////////////////////////////
import { Context } from "../context/EnsembleContext";
import EnsembleForm from "../components/EnsembleForm";
//////////////////////////////////////////////////////////
const CreateEnsemble = ({ navigation }) => {
  const { addEnsemble } = useContext(Context);
  ////////////////////////////////////////////

  return (
    <EnsembleForm
      onSubmit={(chairs, title) => {
        addEnsemble(chairs, title, () => navigation.navigate("Home"));
      }}
    />
  );
};
//need to finish with images
///////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({});
/////////////////////////////////
export default CreateEnsemble;

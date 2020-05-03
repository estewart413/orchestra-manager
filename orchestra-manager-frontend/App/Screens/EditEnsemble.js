import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/EnsembleContext";
import EnsembleForm from "../components/EnsembleForm";

//for an unknown reason getParam('id') does not reflect the ensemble id
const EditEnsemble = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editEnsemble } = useContext(Context);

  const ensemble = state.find(
    (ensemble) => ensemble.id === id
  );

  return (
    <EnsembleForm
      initialValues={{ chairs: ensemble.chairs, title: ensemble.title }}
      onSubmit={(chairs, title) => {
        editEnsemble(chairs, title, id, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditEnsemble;

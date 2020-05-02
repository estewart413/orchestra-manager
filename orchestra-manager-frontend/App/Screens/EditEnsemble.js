import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/EnsembleContext";
import EnsembleForm from "../components/EnsembleForm";

//for an unknown reason getParam('id') does not reflect the ensemble id
const EditEnsemble = ({ navigation }) => {
  const { state } = useContext(Context);

  const ensemble = state.find(
    (ensemble) => ensemble.id === navigation.getParam("id")
  );

  return (
    <EnsembleForm
      initialValues={{ chairs: ensemble.chairs, title: ensemble.title }}
      onSubmit={(chairs, title) => {
        console.log(chairs, title);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditEnsemble;

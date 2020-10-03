import react from "react";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalComponent = (props) => {
  return (

    <Modal
      animationType="fade"
      transparent={true}
      visible={props.openModal}
      onRequestClose={() => {
        props.setModal(!props.openModal);
      }}
    >
      {props.children}
    </Modal>
  );
};
export default ModalComponent;
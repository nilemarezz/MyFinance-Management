import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, CardItem, Body } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { getIconType } from '../utilities/getIconType'
import ModalComponent from '../components/Modal'
import {
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from 'react-redux'
import { DeleteList } from '../services/History/deleteList'
import { deletedList } from '../actions/History'
import { addMonthlyAmount } from '../actions/Profile'
import { AddMonthlyAmount } from '../services/Profile/addMonthlyAmount'
class CardItemConponent extends React.Component {
  state = { openModal: false, cardId: null, amount: null }
  onDeletedList = (value, amount) => {
    this.props.deleteList(value, amount)
    this.setState({ openModal: false, cardId: null, amount: null })
  }
  render() {
    return (
      <>
        <View>
          <TouchableOpacity onLongPress={() => this.props.present ? this.setState({ openModal: true, cardId: this.props.id, amount: this.props.amount }) : null}>
            <Card style={{ borderRadius: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 5 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name={getIconType(this.props.type)} size={40} color="#3a4454" />
                  <View>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: '#3a4454' }}>{this.props.type}</Text>
                    <Text style={{ marginLeft: 20, color: '#3a4454' }}>{this.props.subtype}</Text>
                  </View>
                </View>
                <View style={{ margin: 10 }}>
                  <View style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: "#3a4454" }}> ฿{this.props.amount}</Text>
                    <Text style={{ marginLeft: 20, color: "#3a4454" }}>{this.props.time}</Text>
                  </View>
                </View>
              </View>

            </Card>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 0, margin: 0 }}>
          <ModalComponent openModal={this.state.openModal} >
            <ModalChildren setModal={(value) => this.setState({ openModal: value })} openModal={this.state.openModal} cardId={this.state.cardId}
              amount={this.state.amount}
              onDeletedList={this.onDeletedList}
              present={this.props.present} />
          </ModalComponent>
        </View>
      </>
    )
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteList: async (value, amount) => {
    await DeleteList(value)
    await AddMonthlyAmount(amount)
    dispatch(deletedList(value));
    dispatch(addMonthlyAmount(amount))
  }
});

export default connect(null, mapDispatchToProps)(CardItemConponent)

const ModalChildren = (props) => {
  return (
    <TouchableWithoutFeedback
      onPressOut={() => props.setModal(!props.openModal)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: props.present ? "red" : "grey" }}
            onPress={() => props.onDeletedList(props.cardId, props.amount)}
          >
            <Ionicons name="ios-trash" style={{ color: 'white', paddingHorizontal: 10 }} size={30} />
          </TouchableHighlight>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "grey" }}
            disabled
          >
            <Ionicons name="ios-create" style={{ color: 'white', paddingHorizontal: 5 }} size={30} />
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row'
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Textarea, Button, Picker } from 'native-base';
import { View, Text, TextInput, RefreshControl, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getSubType } from '../utilities/getSubType'
import { connect } from 'react-redux';
import { AddListService } from '../services/History/addList'
import { addList } from '../actions/History'
import { minusMonthlyAmount } from '../actions/Profile'
import { MinusMonthlyAmount } from '../services/Profile/minusMonthlyAmount'
class Add extends Component {

  state = {
    type: '',
    subType: undefined,
    description: undefined,
    amount: undefined
  };

  checkDisabled = () => {
    if (this.state.type === '' || this.state.subType === '' || this.state.amount === '') {
      return true
    } else {
      return false
    }
  }
  onSubmit = () => {
    let negamount = -Math.abs(parseInt(this.state.amount))
    this.props.addListFunction({
      type: this.state.type,
      subType: this.state.subType,
      description: this.state.description,
      amount: negamount
    })

    this.props.navigation.navigate('History')
  }

  render() {
    return (
      <>
        <View style={{ backgroundColor: 'tomato', height: 90, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>Add Transation</Text>
        </View>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <Content style={{ marginVertical: 20 }}>
            <Form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
              <Ionicons name="ios-pricetags" size={40} />
              <Item picker regular style={{ width: 270, marginLeft: 20 }}>
                <Picker
                  selectedValue={this.state.type}
                  style={{ height: 50, width: 270 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}
                >
                  <Picker.Item label="Select Type" value="" />
                  <Picker.Item label="Transport" value="Transport" />
                  <Picker.Item label="Food" value="Food" />
                  <Picker.Item label="Dessert" value="Dessert" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </Item>
            </Form>
            <Form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Ionicons name="ios-pricetag" size={40} />
              <Item picker regular disabled style={{ width: 270, marginLeft: 20 }}>
                <Picker
                  selectedValue={this.state.subType}
                  style={{ height: 50, width: 270 }}
                  enabled={this.state.type === '' ? false : true}
                  onValueChange={(itemValue, itemIndex) => this.setState({ subType: itemValue })}
                >
                  {getSubType(this.state.type).map(item => {
                    return <Picker.Item label={item} value={item} />
                  })}


                </Picker>
              </Item>
            </Form>
            <Form style={{ display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="ios-card" size={40} />
              <TextInput
                style={{ height: 50, width: 270, marginLeft: 20, borderWidth: 1, borderColor: 'lightgrey' }}
                placeholder="amount"
                keyboardType="number-pad"
                onChangeText={text => this.setState({ amount: text })}
              />
            </Form>
            <Form style={{ display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="ios-brush" size={40} />
              <Textarea rowSpan={7} bordered placeholder="Description"
                disabled={false}
                style={{ marginLeft: 20, width: 270 }}
                onChangeText={text => this.setState({ description: text })}
              />
            </Form>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Button primary style={{ marginTop: 20 }} disabled={this.checkDisabled()} onPress={this.onSubmit}>
                <Text style={{ color: 'white', padding: 20, paddingHorizontal: 100 }}>Add</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </>
    );
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  addListFunction: async (value) => {
    const valueList = await AddListService(value)
    await MinusMonthlyAmount(valueList.amount)
    dispatch(addList(valueList));
    dispatch(minusMonthlyAmount(valueList.amount))
  }
});
export default connect(null, mapDispatchToProps)(Add)
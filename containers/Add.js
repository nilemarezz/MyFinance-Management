import React, { Component } from 'react';
import { Picker } from 'react-native'
import { Container, Header, Content, Form, Item, Textarea } from 'native-base';
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getSubType } from '../utilities/getSubType'
export default class PickerInputExample extends Component {

  state = {
    type: '',
    subType: undefined,
    description: undefined
  };

  render() {
    return (
      <>
        <View style={{ backgroundColor: 'tomato', height: 60, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Add Transation</Text>
        </View>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <Content style={{ marginVertical: 20 }}>
            <Form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="ios-pricetags" size={40} />

              <Item picker regular style={{ width: 300, marginLeft: 20 }}>
                <Picker
                  selectedValue={this.state.type}
                  style={{ height: 50, width: 300 }}
                  // enabled={false}
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

              <Item picker regular disabled style={{ width: 300, marginLeft: 20 }}>
                <Picker
                  selectedValue={this.state.type}
                  style={{ height: 50, width: 300 }}
                  enabled={this.state.type === '' ? false : true}
                  onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}
                >
                  {getSubType(this.state.type).map(item => {
                    return <Picker.Item label={item} value={item} />
                  })}

                </Picker>
              </Item>
            </Form>
            <Form style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
              <Ionicons name="ios-brush" size={40} />
              <Textarea rowSpan={7} bordered placeholder="Description"
                disabled={false}
                style={{ marginLeft: 20, width: 300 }} />
            </Form>
          </Content>
        </Container>
      </>
    );
  }
}
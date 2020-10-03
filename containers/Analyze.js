import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Picker, Item } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Barchart from '../components/Barchart'
import LineChart from '../components/LineChart'
class Analyze extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <ScrollView >
          <Barchart />
          <LineChart />
        </ScrollView>
      </View>
    )
  }
}

export default Analyze


const Header = () => {
  return <View style={style.Header}>
    <Item picker underline style={{ marginHorizontal: 20, width: 300 }}>
      <Picker
        mode="dropdown"
        iosIcon={<Ionicons name="ios-down" style={{ color: 'white' }} />}
        placeholderIconColor="white"
        style={{ color: 'white' }}
        placeholder="Select your SIM"
        placeholderStyle={{ color: "white" }}
      >
        <Picker.Item label="Select Date" value="" />

        {/* <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
        <Picker.Item label="Net Banking" value="key4" /> */}
      </Picker>
    </Item>
  </View>
}

const style = StyleSheet.create({
  Header: {
    backgroundColor: 'tomato',
    height: 100,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
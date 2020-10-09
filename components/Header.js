import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon, Container } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");
class Header extends React.Component {
  render() {
    return (
      <>
        <View style={HeaderContainer}>
          <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <View >
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>฿ {this.props.amount}</Text>
                <Ionicons name='ios-arrow-dropup' size={35} color={'#7AF235'} style={{ marginLeft: 10, marginTop: 3 }} />
              </View>
              <Text style={{ color: '#ECF0EA', fontSize: 15, marginTop: 5 }}>Avaliable Balance</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
              <Image
                style={{ width: 55, height: 55, marginTop: 10 }}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

      </>
    )
  }
}

const HeaderContainer = {
  backgroundColor: 'tomato',
  height: 150,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  display: 'flex',
  justifyContent: 'center',
}

export default Header
import React from 'react'
import { Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");
class Profile extends React.Component {
  state = { amount: 0, name: "" }
  onSubmit = async () => {
    console.log(`insert into users(userName,amount) values ("${this.state.name}", ${this.state.amount})`)
    db.transaction(tx => {
      tx.executeSql(`update users set amount = ${this.state.amount}`, [], (_, { rows }) => {
        console.log(rows.length)
      }
      )
    })
  }
  render() {
    return (
      <View style={{ marginTop: '10%' }}>
        <Form>
          {/* <Item>
            <Input placeholder="Name" onChangeText={text => this.setState({ name: text })} />
          </Item> */}
          <Item>
            <Input placeholder="Amount Per Month" onChangeText={text => this.setState({ amount: text })} />
          </Item>


        </Form>
        <Button primary style={{ padding: 50, marginTop: 20, marginLeft: '20%' }} onPress={this.onSubmit}><Text style={{ color: 'white' }}> Set </Text></Button>
      </View>
    )
  }
}

export default Profile
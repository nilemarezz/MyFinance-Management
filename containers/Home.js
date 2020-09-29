import React from 'react'
import { Text, View } from 'react-native';
import Header from '../components/Header'
class Home extends React.Component {
  render() {
    return (
      <View>

        <Header navigation={this.props.navigation} />
      </View>
    )
  }
}

export default Home
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, CardItem, Body } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { getIconType } from '../utilities/getIconType'
class CategoryFilter extends React.Component {
  render() {
    const { title, filterType } = this.props
    return (
      <TouchableOpacity onPress={() => this.props.filterListByType(title)}>
        <View style={{ marginHorizontal: 2 }}>
          <Card style={{ paddingHorizontal: 5, backgroundColor: filterType === title ? "tomato" : 'white', borderRadius: 10 }}>
            <Ionicons name={getIconType(this.props.title)} size={30} style={{ paddingHorizontal: 10, color: filterType === title ? "white" : 'grey' }} />
          </Card>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CategoryFilter
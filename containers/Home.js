import React from 'react'
import { Text, View } from 'react-native';
import Header from '../components/Header'
import CardItemComponent from '../components/CardItem'
import CategoryFilter from '../components/CategoryFilter'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
const AddButton = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  position: 'absolute',
  bottom: 10,
  right: 20,
  backgroundColor: 'tomato',
  padding: 15,
  borderRadius: 30,
  paddingHorizontal: 20,
  zIndex: 99,
  elevation: 6,
}
class Home extends React.Component {
  render() {
    const filterType = "All"
    return (
      <>
        <View style={AddButton}>
          <Ionicons name="ios-add" color={'white'} size={26} onPress={() => this.props.navigation.navigate('Add')} />
        </View>
        <Header navigation={this.props.navigation} amount={this.props.profile.amount} />
        <View style={{ padding: 15 }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'tomato' }}>Recent Transactions</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'tomato' }}>See all</Text>
          </View>
          <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
            <CategoryFilter title="All" filterType={filterType} />
            <CategoryFilter title="Transport" filterType={filterType} />
            <CategoryFilter title="Food" filterType={filterType} />
            <CategoryFilter title="Dessert" filterType={filterType} />
            <CategoryFilter title="Other" filterType={filterType} />
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'lightgrey', marginTop: 10 }}>TODAY</Text>
          <View style={{ marginTop: 10 }}>
            <CardItemComponent type="Transport" subtype="Subaru" amount="7" date="01-05-2020" time={'13:30'} />
            <CardItemComponent type="Food" subtype="Dinner" amount="50" date="26 Aug 2020" time={'13:30'} />
            <CardItemComponent type="Food" subtype="Dinner" amount="50" date="26 Aug 2020" time={'13:30'} />
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'lightgrey', marginTop: 10 }}>YESTERDAY</Text>
          <View style={{ marginTop: 10 }}>
            <CardItemComponent type="Transport" subtype="Subaru" amount="7" date="26 Aug 2020" time={'13:30'} />
          </View>

        </View>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profile }
}

export default connect(mapStateToProps, null)(Home)
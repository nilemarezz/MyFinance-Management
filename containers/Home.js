import React from 'react'
import { Text, View, RefreshControl, ScrollView } from 'react-native';
import Header from '../components/Header'
import CardItemComponent from '../components/CardItem'
import CategoryFilter from '../components/CategoryFilter'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { setFilterRecent, getList } from '../actions/History'
import { getHistoryList } from '../services/History/getHistoryService'
import { renderList } from '../utilities/renderList'
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
  state = { refreshing: false }
  componentDidMount() {
    this.props.getList()
  }
  onRefresh = async () => {
    this.setState({ refreshing: true })
    this.props.getList()
    setTimeout(() => { this.setState({ refreshing: false }) }, 1500)
  }

  render() {
    const { list, filterTypeRecent, filterRecentList } = this.props.list
    return (
      <>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          }
        >

          <Header navigation={this.props.navigation} amount={this.props.profile.amount} />
          <View style={{ padding: 15 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'tomato' }} >Recent Transactions</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'tomato' }} onPress={() => this.props.navigation.navigate('History')}>See all</Text>
            </View>
            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
              <CategoryFilter title="All" filterType={this.props.list.filterTypeRecent} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Transport" filterType={this.props.list.filterTypeRecent} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Food" filterType={this.props.list.filterTypeRecent} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Dessert" filterType={this.props.list.filterTypeRecent} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Other" filterType={this.props.list.filterTypeRecent} filterListByType={this.props.filterListByType} />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'lightgrey', marginTop: 10 }}>TODAY</Text>
            <View style={{ marginTop: 10 }}>

              {renderList(list, filterTypeRecent, filterRecentList) !== null ?
                renderList(list, filterTypeRecent, filterRecentList).slice(0, 3).map(item => {
                  return <CardItemComponent type={item.type} subtype={item.subType} amount={item.amount} time={item.time} id={item.id} key={item.id} />
                }) :
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                  <Text style={{ alignItems: 'center', fontSize: 20 }}>No Transaction Found</Text>
                </View>
              }
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'lightgrey', marginTop: 10 }}>YESTERDAY</Text>
            <View style={{ marginTop: 10 }}>
              <CardItemComponent type="Transport" subtype="Subaru" amount="7" date="26 Aug 2020" time={'13:30'} />
            </View>
          </View>

        </ScrollView>
        <View style={AddButton}>
          <Ionicons name="ios-add" color={'white'} size={26} onPress={() => this.props.navigation.navigate('Add')} />
        </View>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profile, list: state.history }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getList: async () => {
    const value = await getHistoryList()
    dispatch(getList(value));
  },
  filterListByType: async (value) => {
    dispatch(setFilterRecent(value))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)
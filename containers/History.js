import React from 'react'
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import CategoryFilter from '../components/CategoryFilter'
import CardItemComponent from '../components/CardItem'
import { connect } from 'react-redux'
import { getList, setFilter } from '../actions/History'
import Header from '../components/HistoryHeader'
import { getHistoryList } from '../services/History/getHistoryService'
class History extends React.Component {

  componentDidMount() {
    this.props.getList()
  }
  renderList = (list, filterType, filterList) => {
    if (list.length === 0) {
      return null
    } else {
      if (filterType === "All") {
        if (list.length === 0) {
          return null
        } else {
          return list
        }
      } else {
        if (filterList.length === 0) {
          return null
        } else {
          return filterList
        }
      }
    }
  }
  render() {
    const { list, filterType, filterList } = this.props
    console.log(list)
    return (
      <>
        <Header amountUse={-130} />
        <View style={{ marginHorizontal: 20 }}>
          <View>
            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
              <CategoryFilter title="All" filterType={filterType} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Transport" filterType={filterType} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Food" filterType={filterType} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Dessert" filterType={filterType} filterListByType={this.props.filterListByType} />
              <CategoryFilter title="Other" filterType={filterType} filterListByType={this.props.filterListByType} />
            </View>
            <SafeAreaView style={{ height: '87%' }}>
              <ScrollView>
                {this.renderList(list, filterType, filterList) !== null ?
                  this.renderList(list, filterType, filterList).map(item => {
                    return <CardItemComponent type={item.type} subtype={item.subType} amount={item.amount} time={item.time} id={item.id} />
                  }) :
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                    <Text style={{ alignItems: 'center', fontSize: 20 }}>No Transaction Found</Text>
                  </View>
                }
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </>
    )
  }
}

export const mapStateToProps = (state) => {
  return { list: state.history.todayList, filterType: state.history.filterType, filterList: state.history.filterTodayList }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getList: async () => {
    const value = await getHistoryList()
    dispatch(getList(value));
  },
  filterListByType: async (value) => {
    dispatch(setFilter(value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(History)


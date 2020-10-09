import React from 'react'
import { View, SafeAreaView, Text, RefreshControl, ScrollView } from 'react-native';
import CategoryFilter from '../components/CategoryFilter'
import CardItemComponent from '../components/CardItem'
import { connect } from 'react-redux'
import { getList, setFilter, setDate } from '../actions/History'
import Header from '../components/HistoryHeader'
import { getHistoryList } from '../services/History/getHistoryService'
import { renderList } from '../utilities/renderList'
import { formatDate } from '../utilities/formatDate'
import * as SQLite from 'expo-sqlite';
import { formatData } from '../utilities/formatDatafromDB.js'
const db = SQLite.openDatabase("db.db");
class History extends React.Component {
  state = { refreshing: false }
  onRefresh = async () => {
    this.setState({ refreshing: true })
    this.props.getList(db)
    this.props.setDate(formatDate(new Date()))
    setTimeout(() => { this.setState({ refreshing: false }) }, 1500)
  }
  componentDidMount() {
    this.props.getList(db)
  }

  getAmountUse = (list, filterType, filterList, selectedDate, dateList, filterDateList) => {
    if (selectedDate === formatDate(new Date())) {
      if (renderList(list, filterType, filterList) === null) {
        return 0
      } else {
        let amoutuse = 0;
        renderList(list, filterType, filterList).map(item => {
          amoutuse = amoutuse + item.amount
        })
        return amoutuse
      }
    } else {
      if (renderList(dateList, filterType, filterDateList) === null) {
        return 0
      } else {
        let amoutuse = 0;
        renderList(dateList, filterType, filterDateList).map(item => {
          amoutuse = amoutuse + item.amount
        })
        return amoutuse
      }
    }
  }

  render() {
    const { list, filterType, filterList, dateList, filterDateList, selectedDate } = this.props
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }>

        <Header amountUse={this.getAmountUse(list, filterType, filterList, this.props.selectedDate, this.props.dateList, filterDateList)}
          selectedDate={selectedDate} db={db} />
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
                {
                  this.props.selectedDate === formatDate(new Date()) ?
                    renderList(list, filterType, filterList) !== null ?
                      renderList(list, filterType, filterList).map(item => {
                        return <CardItemComponent type={item.type} subtype={item.subType} amount={item.amount} time={item.time} id={item.id} key={item.id} present={true} />
                      }) :
                      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }} >
                        <Text style={{ alignItems: 'center', fontSize: 20 }}>No Transaction Found</Text>
                      </View>
                    :
                    renderList(dateList, filterType, filterDateList) !== null ?
                      renderList(dateList, filterType, filterDateList).map(item => {
                        return <CardItemComponent type={item.type} subtype={item.subType} amount={item.amount} time={item.time} id={item.id} key={item.id} present={false} />
                      }) :
                      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }} >
                        <Text style={{ alignItems: 'center', fontSize: 20 }}>No Transaction Found</Text>
                      </View>
                }
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    list: state.history.list,
    filterType: state.history.filterType,
    filterList: state.history.filterList,
    dateList: state.history.selectedDateList,
    selectedDate: state.history.selectedDate,
    filterDateList: state.history.filterSelectedDateList
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getList: async (db) => {
    await getHistoryList(db, formatDate(new Date()), async (response) => {
      let data = await formatData(response)
      await dispatch(getList(data));
    })
  },
  filterListByType: async (value) => {
    dispatch(setFilter(value))
  },
  setDate: async (value) => {
    console.log(value)
    dispatch(setDate(value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(History)


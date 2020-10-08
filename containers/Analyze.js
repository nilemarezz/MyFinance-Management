import React from 'react'
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Picker, Item } from 'native-base';
import Barchart from '../components/Barchart'
import LineChart from '../components/LineChart'
import { month } from '../utilities/month'
import { connect } from 'react-redux'
import { setAnalyze } from '../actions/Analyze'
import { getData } from '../services/Analyze/getData'

class Analyze extends React.Component {
  state = { refreshing: false }
  onRefresh = async () => {
    this.setState({ refreshing: true })
    setTimeout(() => { this.setState({ refreshing: false }) }, 1500)
  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }
      >
        <Header />
        <ScrollView >
          <Barchart data={this.props.data.amountUsePerType} />
          <LineChart data={this.props.data.amountUsePerDay} />
        </ScrollView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return { data: state.analyze }
}
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getData: async (value) => {
    const dataList = await getData()
    dispatch(setAnalyze(dataList))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Analyze)


const Header = () => {
  return <View style={style.Header}>
    <Item picker underline style={{ marginHorizontal: 20, width: 300 }}>
      <Picker
        mode="dropdown"
        placeholderIconColor="white"
        style={{ color: 'white' }}
        placeholder="Select your SIM"
        placeholderStyle={{ color: "white" }}
      >
        <Picker.Item label="Select Month" value="" />
        {month.map(item => {
          return <Picker.Item label={item.label} value={item.id} />
        })}
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
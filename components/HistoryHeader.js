import React from 'react'
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { formatDate } from '../utilities/formatDate'
import { DatePicker } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { setDate, setListDate } from '../actions/History'
import { getListByDate } from '../services/History/getListByDate'
const Header = (props) => {
  const setDate = (newDate) => {
    props.setDate(formatDate(newDate))
  }
  return (
    <View style={{
      backgroundColor: 'tomato',
      height: 100,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      paddingHorizontal: 10
    }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <DatePicker
          defaultDate={new Date()}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          placeHolderText={props.date}
          placeHolderTextStyle={{ color: "white", fontSize: 20 }}
          onDateChange={setDate}
          textStyle={{ color: "white", fontSize: 20 }}
          androidMode={'spinner'}
          disabled={false}
        />
        <Ionicons name='ios-create' size={20} color={'white'} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 25 }}>{props.amountUse} ฿ </Text>

      </View>
    </View>
  )
}
const mapStateToProps = (state) => {
  return { date: state.history.selectedDate }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  setDate: async (value) => {
    dispatch(setDate(value))
    const data = await getListByDate(value)
    dispatch(setListDate(data))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header)
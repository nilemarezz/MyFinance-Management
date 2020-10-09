import React, { useRef } from 'react'
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { formatDate } from '../utilities/formatDate'
import { DatePicker } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { setDate, setListDate } from '../actions/History'
import { getListByDate } from '../services/History/getListByDate'
import { formatData } from '../utilities/formatDatafromDB'
import { getAmountList } from '../services/Profile/getAmount'
const Header = (props) => {
  const setDate = (newDate) => {
    // console.log(newDate)
    props.setDate(formatDate(newDate), props.db)
    props.setAmount(props.db)
  }
  const openDateSelect = useRef(null);
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
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
        onPress={() => openDateSelect.current.showDatePicker()}>
        <View style={{ display: 'none' }}>
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
            ref={openDateSelect}
          />
        </View>
        <Text style={{ color: "white", fontSize: 20 }}>{props.selectedDate}</Text>
        <Ionicons name='ios-create' size={20} color={'white'} style={{ marginLeft: 10 }} />
      </TouchableOpacity>
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
  setDate: async (value, db) => {
    await getListByDate(db, value, async (response) => {
      let data = await formatData(response)
      await dispatch(setDate(value))
      await dispatch(setListDate(data))
    })
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header)
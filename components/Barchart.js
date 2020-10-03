import React from 'react'
import {
  BarChart,

} from 'react-native-chart-kit'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
class Barchart extends React.PureComponent {

  render() {
    const width = Dimensions.get('window').width - 20
    const height = 220
    const chartConfig = {
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }
    const labelStyle = {
      color: chartConfig.color(),
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 16
    }
    const graphStyle = {
      marginVertical: 8,
      marginLeft: 10,
      ...chartConfig.style
    }
    const data = {
      labels: ['Transport', 'Food', 'Dessert', 'Other'],
      datasets: [{
        data: [
          50,
          20,
          2,
          86,
        ],
        color: (opacity = 1) => `rgba(100, 232, 35, ${opacity})` // optional
      }, {
        data: [
          20,
          10,
          4,
          56,
        ]
      }, {
        data: [
          30,
          90,
          67,
          54,

        ]
      }]
    }

    return (
      <>
        <Text style={labelStyle}>Amont Use in September Per Type</Text>
        <BarChart
          width={width}
          height={height}
          data={data}
          chartConfig={chartConfig}
          style={graphStyle}
        />
      </>
    )
  }

}

export default Barchart
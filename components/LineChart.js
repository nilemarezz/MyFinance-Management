import React from 'react'
import {
  LineChart,
} from 'react-native-chart-kit'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
class LineChartComponent extends React.PureComponent {

  render() {
    const labels = []
    for (let i = 1; i <= 31; i++) {
      if (i % 5 === 0 || i === 1) {
        labels.push(i)
      }
    }
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
      labels: labels,
      datasets: [{
        data: this.props.data,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` // optional
      }]
    }

    return (
      <>
        <Text style={labelStyle}>Amont Use in September Per Day</Text>
        <LineChart
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

export default LineChartComponent
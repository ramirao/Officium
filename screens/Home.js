import React from 'react';
import { ScrollView, Dimensions, Text, StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import { data, contributionData, pieChartData, progressChartData } from '../data'


// in Expo - swipe left to see the following styling, or create your own
const chartConfigs =  [
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    },
    label:'Verde'
  },
  {
    backgroundColor: '#022173',
    backgroundGradientFrom: '#022173',
    backgroundGradientTo: '#1b3fa0',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    label:'Azul'
  },
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    label:'Branco'
  },
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#000000',
    backgroundGradientTo: '#000000',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
    label:'Preto'
  }
  ]

const Charts = () => { 
   const width = Dimensions.get('window').width
    const height = 220
    return (
      <ScrollableTabView 
        tabBarBackgroundColor='black' 
        tabBarActiveTextColor='red' 
        tabBarInactiveTextColor='white'
        tabBarUnderlineStyle={{ height: 2, backgroundColor: "red" }}
      >
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor,
              }}
              tabLabel={chartConfig.label}
            >
              <Text style={labelStyle}>Bezier Line Chart</Text>
              <LineChart
                data={data}
                width={width}
                height={height}
                chartConfig={chartConfig}
                bezier
                style={graphStyle}
              />
              <Text style={labelStyle}>Progress Chart</Text>
              <ProgressChart
                data={progressChartData}
                width={width}
                height={height}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Bar Graph</Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              {/*<Text style={labelStyle}>Pie Chart</Text>
              <PieChart
                data={pieChartData}
                height={height}
                width={width}
                chartConfig={chartConfig}
                accessor="population"
                style={graphStyle}
            />*/}
              <Text style={labelStyle}>Line Chart</Text>
              <LineChart
                data={data}
                width={width}
                height={height}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Contribution Graph</Text>
              <ContributionGraph
                values={contributionData}
                width={width}
                height={height}
                endDate={new Date('2016-05-01')}
                numDays={105}
                chartConfig={chartConfig}
                style={graphStyle}
              />
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }

  export default Charts





/*
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
        </View>
    )
}

export default Home
*/
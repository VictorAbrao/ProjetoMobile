import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Title } from 'react-native-paper';
import { BottomTabNavigator } from '../navigation/BottomTabNavigator'

import {Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';


const pieData = [
  {
    name: '% Péssimo',
    population: 20,
    color: '#8085e9',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Ruim',
    population: 20,
    color: '#f7a35c',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Médio',
    population: 20,
    color: '#7cb5ec',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Bom',
    population: 20,
    color: '#90ec7d',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Ótimo',
    population: 20,
    color: '#434348',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];


const pieData2 = [
  {
    name: '% Péssimo',
    population: 20,
    color: '#8085e9',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Ruim',
    population: 20,
    color: '#f7a35c',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Médio',
    population: 20,
    color: '#7cb5ec',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Bom',
    population: 20,
    color: '#90ec7d',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: '% Ótimo',
    population: 20,
    color: '#434348',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const barData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};




export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.texto}>Satisfação dos colaboradores da empresa</Title>
      <BarChart style={styles.graficos}
          // style={graphStyle}
          data={barData}
          width={Dimensions.get("window").width - 50}
          height={220}
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#FFF",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `#000`,
            labelColor: (opacity = 1) => `#000`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
      />

      <Title style={styles.texto}>Satisfação com salários</Title>
      <PieChart
        style={styles.graficos}
        data={pieData}
        width={Dimensions.get("window").width }
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      <Title style={styles.texto}>Satisfação com ambiente de trabalho</Title>
      <PieChart
        style={styles.graficos}
        data={pieData2}
        width={Dimensions.get("window").width }
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      
    </ScrollView>

    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  graficos:{
    margin:20
  },
  texto: {
    paddingTop:0,
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:30,
    textAlign: 'center',
  },
});


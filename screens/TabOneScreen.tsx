import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
        <AutoHeightImage
          style={styles.image}
          width={100}
          source={require('../assets/images/insights/danger.png')}
        />
        <Title style={styles.titulo}>Risco dos funcionários pedirem demissão</Title>
        <Text style={styles.texto}>    Com base nas nossas informações e na pesquisa com os funcionários sua equipe de desenvolvedores php tem 45% de chances de solicitarem demissão por fatores internos/externos.</Text>

        <AutoHeightImage
          style={styles.image}
          width={100}
          source={require('../assets/images/insights/warning.png')}
        />
        <Title style={styles.titulo}>Risco dos funcionários pedirem demissão</Title>
        <Text style={styles.texto}>    Com base nas nossas informações e na pesquisa com os funcionários sua equipe de desenvolvedores php tem 45% de chances de solicitarem demissão por fatores internos/externos.</Text>

        <AutoHeightImage
          style={styles.image}
          width={100}
          source={require('../assets/images/insights/danger.png')}
        />
        <Title style={styles.titulo}>Média salarial abaixo do mercado</Title>
        <Text style={styles.texto}>        Os funcionários do setor de desenvolvimento de software ganham em média 20% mais para exercer a mesma função nas proximidades..</Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor:'#fff'
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
  titulo: {
    padding:40,
    paddingBottom:0,
    paddingTop:20,
    textAlign: 'center'
  },
  texto: {
    paddingTop:0,
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:30,
    textAlign: 'center',
  },
  image: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginStart:150
  }

});

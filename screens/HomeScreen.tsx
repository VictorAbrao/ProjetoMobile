import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AutoHeightImage from 'react-native-auto-height-image';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";
import TabOneScreen from './TabOneScreen';


 
export default function HomeScreen({  }) {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <AutoHeightImage  width={300} source={require('../assets/images/log2.png')} />
 
      <StatusBar  />
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => {
          navigation.dispatch(CommonActions.navigate('LoginScreen'));
        }}
      >
        <Text style={styles.loginText}>Gestor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.singout}>
        <Text style={styles.loginText}>Funcionário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
 

 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 

  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e9bf0",
    color:'#fff',
    marginBottom: 20
  },

  loginText: {
    color:'#FFF',
  },

  labelText: {
    marginBottom:5 
  },

  singout: {
    width: "50%",
    borderRadius: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: '#8fd14f',
    color:'#fff',
    marginBottom: 90
  }
});
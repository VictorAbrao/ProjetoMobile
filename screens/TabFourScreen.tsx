import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import LoginScreen from "react-native-login-screen";
import AutoHeightImage from 'react-native-auto-height-image';
import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];
 
export default function TabFourScreen() {

 
  return (
    <View style={styles.container}>
      <AutoHeightImage style={styles.image} width={300} source={require('../assets/images/log2.png')} />
      <View>
   
    </View>
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
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFF",
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth:1,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#2e9bf0",
    color:'#fff'
  },

  loginText: {
    color:'#FFF',
  },

  labelText: {
    marginBottom:5 
  },

  singout: {
    width: "20%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "red",
    color:'#fff',
    marginBottom: 90
  },

  radioButton:{
    flex:1
  }
});
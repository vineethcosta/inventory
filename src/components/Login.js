import React,{Component } from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import LoginForm from './loginForm';
export default function App() {
  return (
      
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source ={require('../images/download.png')}></Image>
      </View>
      <View style={styles.formContainer}>
          <LoginForm/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'baseline',
        flexGrow:1,
        justifyContent:'center'
    },
    logo : {
        width:100,
        height:100
    },
  container: {
      marginTop:150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer:{

  }
});

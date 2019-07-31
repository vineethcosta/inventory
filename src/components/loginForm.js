import React,{Component } from 'react';
import { StyleSheet,TextInput,Text,TouchableOpacity, View, KeyboardAvoidingView} from 'react-native';

export default function App() {
  return (
      <KeyboardAvoidingView styles="container" behavior="padding">
    <View style={styles.container}>
    <TextInput placeholder="Username or email" style={styles.input}/>
    <TextInput secureTextEntry  placeholder="Password" style={styles.input}/>
    <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
    </View>
    </KeyboardAvoidingView > );
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
      height :40,
      backgroundColor:'rgba(255,255,166,0.2)',
      marginBottom:20,
      color:'#FFF',
      paddingHorizontal:10,
      width:250,
      color:'green'
  },
  buttonContainer:{
      backgroundColor:'#008000',
      width:100,
    
    paddingVertical:10,



  },
  buttonText:{
      textAlign:'center',

  }
});

import React,{Component} from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login.js';
export default function App() {
  return (
   <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login.js'
import Manager from './Manager.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "manager" component = {Manager} title = "Manager" />
      </Scene>
   </Router>
)
export default Routes 
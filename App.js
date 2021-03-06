/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'; 
import { Provider } from 'react-redux'
import {createStackNavigator,createAppContainer} from "react-navigation";
import store from './store'
import { createStore, combineReducers } from 'redux';
import Login from './scenes/Login'
import Game from './scenes/Game'
import Find from './scenes/Find'
import Loading from './scenes/Loading'
import SignUp from './scenes/SignUp'
import Logging from './scenes/Logging'
import Main from './scenes/Main'
import {Platform, StyleSheet, Text, View} from 'react-native';

const AppNavigator = createStackNavigator({
  Login: {screen:Login, params: {name: 'Login'}},
  Game: {screen:Game, params: {name: 'Game'}},
  Find: {screen:Find, params: {name: 'Find'}},
  Loading: {screen:Login, params: {name: 'Loading'}},
  SignUp: {screen:Login, params: {name: 'SignUp'}},
  Logging: {screen:Login, params: {name: 'Logging'}},
  Main: {screen:Login, params: {name: 'Main'}}
},
{
  initialRouteName: 'Loading'
});

const AppContainer = createAppContainer(AppNavigator);

/*const initialState = {
  user: {
    first: '',	//company, client
    second: '',
  }
}

userReducer = (state = initialState, action) => {
  if(action.type == 'SET_USER') {
    return {
      first: action.user.first,
      second: action.user.second,
    }
  }
  else 
    return state;
}
const userStore = createStore(combineReducers({
 // user: userReducer,
  user: userReducer
}));
*/

export default class App extends React.Component{
  render() {
    return (
      <Provider store={ store}>
				<AppContainer />
			</Provider>
    );
  }
}

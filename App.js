/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StatusBar, YellowBox} from 'react-native';
import Navigation from './src/navigation/index';
import Colors from "./src/helpers/Colors";
import {Provider} from "react-redux";
import {store} from "./src/redux/store/store";
YellowBox.ignoreWarnings(['']);

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    if (Platform.OS === 'ios') {
      /** StatusBar Style */
      StatusBar.setBarStyle('light-content');
      // StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBackgroundColor(Colors.black);
    }
  }

  render() {
    return (
        <Provider store={store}>
          <Navigation/>
        </Provider>
    );
  }
}

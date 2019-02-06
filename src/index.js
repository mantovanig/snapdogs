/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Provider } from "react-redux";
import { View } from 'react-native';

import store from './store';

// containers
import Home from './containers/Home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Home />
        </View>
      </Provider>
    );
  }
}


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

// containers
import Home from './containers/Home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Home />;
  }
}


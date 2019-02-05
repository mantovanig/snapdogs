/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';

// styled
import { ContainerView, WelcomeText, InstructionsText } from './styleds';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

  render() {
    return (
      <ContainerView>
        <WelcomeText>Welcome to React Native!</WelcomeText>
        <InstructionsText>To get started, edit App.js</InstructionsText>
        <InstructionsText>{instructions}</InstructionsText>
      </ContainerView>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

// styled
import { HomeView, ImageView, MainImage, BlurredImage } from './styleds';

type Props = {};
export default class Home extends Component<Props> {

  state = {
    currentImage: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_5743.jpg'
  };

  render() {
    const { currentImage } = this.state;

    return (
      <HomeView>
        <ImageView>
          <BlurredImage blurRadius={5} source={{uri: currentImage}} />
          <MainImage source={{uri: currentImage}} />
        </ImageView>
      </HomeView>
    );
  }
}

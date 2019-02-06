/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { connect } from "react-redux";

// actions
import { fetchImageRequested } from "./actions";

// styled
import { HomeView, ImageView, MainImage, BlurredImage } from './styleds';

type Props = {};
class Home extends Component<Props> {

  componentDidMount() {
    const { fetchImage } = this.props;

    fetchImage();
  }

  render() {
    const { currentImage } = this.props;

    return (
      <HomeView>
        {currentImage &&
          <ImageView>
            <BlurredImage blurRadius={5} source={{uri: currentImage}} />
            <MainImage source={{uri: currentImage}} />
          </ImageView>
        }
      </HomeView>
    );
  }
}

const mapStateToProps = state => ({
  currentImage: state.home.currentImage
});

const mapDispatchToProps = dispatch => ({
  fetchImage: () => dispatch(fetchImageRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
import { ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

// actions
import { fetchImageRequested } from "./actions";

// styled
import { HomeView, HomeViewLoader, ImageView, MainImage, BlurredImage } from './styleds';

type Props = {};
class Home extends Component<Props> {

  componentDidMount() {
    this.fetchImage();
  }

  onNextImage = () => {
    this.fetchImage();
  };

  fetchImage = () => {
    const { handleFetchImage } = this.props;
    handleFetchImage();
  };

  render() {
    const { currentImage, loading } = this.props;

    if (loading) return (
      <HomeViewLoader>
        <ActivityIndicator size="large" color="#000" />
      </HomeViewLoader>
    );

    return (
      <HomeView>
        {currentImage &&
          <TouchableWithoutFeedback onPress={this.onNextImage}>
            <ImageView>
                <BlurredImage blurRadius={5} source={{uri: currentImage}} />
                <MainImage source={{uri: currentImage}} />
            </ImageView>
          </TouchableWithoutFeedback>
        }
      </HomeView>
    );
  }
}

const mapStateToProps = state => ({
  currentImage: state.home.currentImage,
  loading: state.home.loading
});

const mapDispatchToProps = dispatch => ({
  handleFetchImage: () => dispatch(fetchImageRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

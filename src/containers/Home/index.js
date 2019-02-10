/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import _isEmpty from "lodash/isEmpty";

// actions
import {
  fetchImageRequested,
  initialDataRequested,
  updateSelectedBreed
} from "./actions";

// components
import BreedPicker from "../../components/BreedPicker";

// styled
import {
  HomeView,
  HomeViewLoader,
  ImageView,
  MainImage,
  BlurredImage
} from "./styleds";

type Props = {};
class Home extends Component<Props> {
  componentDidMount() {
    const { handleFetchInitialData } = this.props;
    handleFetchInitialData();
  }

  onNextImage = () => {
    this.fetchImage();
  };

  fetchImage = () => {
    const { handleFetchImage, selectedBreed } = this.props;
    handleFetchImage(selectedBreed);
  };

  render() {
    const {
      currentImage,
      loading,
      breeds,
      selectedBreed,
      handleUpdateBreed,
      handleFetchImage
    } = this.props;

    if (loading)
      return (
        <HomeViewLoader>
          <ActivityIndicator size="large" color="#000" />
        </HomeViewLoader>
      );

    return (
      <HomeView>
        {!_isEmpty(breeds) && (
          <BreedPicker
            breeds={breeds}
            selectedBreed={selectedBreed}
            onChangeBreed={item => {
              handleUpdateBreed(item);
            }}
            onSubmit={() => handleFetchImage(selectedBreed)}
          />
        )}
        {currentImage && (
          <TouchableWithoutFeedback onPress={this.onNextImage}>
            <ImageView>
              <BlurredImage blurRadius={5} source={{ uri: currentImage }} />
              <MainImage source={{ uri: currentImage }} />
            </ImageView>
          </TouchableWithoutFeedback>
        )}
      </HomeView>
    );
  }
}

const mapStateToProps = state => ({
  currentImage: state.home.image,
  selectedBreed: state.home.selectedBreed,
  breeds: state.home.breeds,
  loading: state.home.loading
});

const mapDispatchToProps = dispatch => ({
  handleFetchImage: breed => dispatch(fetchImageRequested(breed)),
  handleUpdateBreed: breed => dispatch(updateSelectedBreed(breed)),
  handleFetchInitialData: () => dispatch(initialDataRequested())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

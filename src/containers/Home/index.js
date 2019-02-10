import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";
import _isEmpty from "lodash/isEmpty";

// actions
import {
  fetchImageRequested,
  initialDataRequested,
  updateSelectedBreed
} from "./actions";

// components
import BreedPicker from "../../components/BreedPicker";
import DogImage from "../../components/DogImage";

// styled
import {
  HomeView,
  HomeViewLoader
} from "./styleds";

class Home extends Component {
  static propTypes = {
    currentImage: PropTypes.string,
    selectedBreed: PropTypes.object,
    breeds: PropTypes.array,
    imageLoading: PropTypes.bool,
    loading: PropTypes.bool
  };

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
      imageLoading,
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
        <DogImage
          image={currentImage}
          loading={imageLoading}
          onPress={this.onNextImage}
        />
      </HomeView>
    );
  }
}

const mapStateToProps = state => ({
  currentImage: state.home.image,
  selectedBreed: state.home.selectedBreed,
  breeds: state.home.breeds,
  imageLoading: state.home.imageLoading,
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

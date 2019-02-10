import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";

// styled
import { BlurredImage, ImageView, MainImage, DogImageLoader } from "./styleds";

class DogImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onPress: PropTypes.func
  };

  render() {
    const { image, onPress, loading } = this.props;

    if (loading)
      return (
        <DogImageLoader>
          <ActivityIndicator size="large" color="#000" />
        </DogImageLoader>
      );

    if (image)
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          <ImageView>
            <BlurredImage blurRadius={5} source={{ uri: image }} />
            <MainImage source={{ uri: image }} />
          </ImageView>
        </TouchableWithoutFeedback>
      );

    return null;
  }
}

export default DogImage;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

// styled
import {
  BreedPickerView,
  BreedsList,
  BreedPickerSubmit,
  BreedItem,
  BreedItemText,
  BreedLabel,
  BreedItemSeparator,
  BREED_ITEM_HEIGHT,
  BREED_ITEM_SEPARATOR
} from "./styleds";

const BreedListAnimated = Animatable.createAnimatableComponent(BreedsList);

class BreedOption extends React.PureComponent {
  render() {
    const { onPressItem, selected } = this.props;
    return (
      <TouchableOpacity onPress={onPressItem}>
        <BreedItem selected={selected}>
          <BreedItemText selected={selected}>{this.props.title}</BreedItemText>
        </BreedItem>
      </TouchableOpacity>
    );
  }
}

class BreedPicker extends PureComponent {
  static propTypes = {
    breeds: PropTypes.array.isRequired,
    selectedBreed: PropTypes.object,
    onChangeBreed: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    showPicker: false
  };

  _keyExtractor = item => item.value;

  onSubmit = () => {
    const { onSubmit } = this.props;
    const { showPicker } = this.state;

    if (!showPicker) this.setState({ showPicker: true });
    else {
      this.setState(
        {
          showPicker: false
        },
        () => onSubmit()
      );
    }
  };

  _renderItem = ({ item }) => (
    <BreedOption
      id={item.value}
      onPressItem={() => this.props.onChangeBreed(item)}
      selected={this.props.selectedBreed.value === item.value}
      title={item.label}
    />
  );

  render() {
    const { showPicker } = this.state;
    const { breeds, selectedBreed } = this.props;

    return (
      <BreedPickerView>
        {showPicker && (
          <BreedListAnimated
            animation="fadeInUp"
            duration={300}
            easing="ease-in"
            useNativeDriver
            ItemSeparatorComponent={() => <BreedItemSeparator />}
            initialScrollIndex={breeds.findIndex(
              e => e.value === selectedBreed.value
            )}
            getItemLayout={(data, index) => ({
              length: BREED_ITEM_HEIGHT,
              offset: (BREED_ITEM_HEIGHT + BREED_ITEM_SEPARATOR) * index,
              index
            })}
            data={breeds}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        )}
        <TouchableHighlight onPress={this.onSubmit}>
          <BreedPickerSubmit>
            <BreedLabel>{showPicker ? "DONE" : selectedBreed.label}</BreedLabel>
          </BreedPickerSubmit>
        </TouchableHighlight>
      </BreedPickerView>
    );
  }
}

export default BreedPicker;

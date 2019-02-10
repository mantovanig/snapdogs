import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Text,
  Keyboard
} from "react-native";

// styled
import {
  BreedPickerView,
  BreedAutocompleteInput,
  BreedSuggestion,
  BreedItemSeparator
} from "./styleds";

// utils
import { comp } from "../../utils/string";

class BreedPicker extends PureComponent {
  static propTypes = {
    breeds: PropTypes.array.isRequired,
    selectedBreed: PropTypes.object,
    onChangeBreed: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  filterBreeds = query => {
    if (query === "") {
      return [];
    }

    const { breeds } = this.props;
    const regex = new RegExp(`${query.trim()}`, "i");
    return breeds.filter(breed => breed.label.search(regex) >= 0);
  };

  onSubmit = item => {
    const { onChangeBreed } = this.props;

    this.setState(
      {
        query: item.label
      },
      () => {
        Keyboard.dismiss();
        onChangeBreed(item);
      }
    );
  };

  render() {
    const { query } = this.state;
    const breeds = this.filterBreeds(query);

    return (
      <BreedPickerView>
        <BreedAutocompleteInput
          listContainerStyle={{ marginTop: 10 }}
          listStyle={{ borderWidth: 0, borderRadius: 10 }}
          autoCapitalize="none"
          data={
            breeds.length === 1 && comp(query, breeds[0].label) ? [] : breeds
          }
          defaultValue={query}
          placeholder="Search an other breed"
          inputContainerStyle={{ borderWidth: 0 }}
          onChangeText={text => this.setState({ query: text })}
          renderSeparator={() => <BreedItemSeparator />}
          renderItem={item => (
            <TouchableOpacity onPress={() => this.onSubmit(item)}>
              <BreedSuggestion>
                <Text>{item.label}</Text>
              </BreedSuggestion>
            </TouchableOpacity>
          )}
        />
      </BreedPickerView>
    );
  }
}

export default BreedPicker;

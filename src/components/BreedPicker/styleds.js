import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Autocomplete from 'react-native-autocomplete-input';

export const BREED_INPUT_HEIGHT = 50;
export const BREED_ITEM_HEIGHT = 50;
export const BREED_ITEM_SEPARATOR = 1;

export const BreedPickerView = styled.View`
  position: absolute;
  top: ${getStatusBarHeight(true) + 30}px;
  align-self: center;
  width: 90%;
  z-index: 999;
`;

export const BreedAutocompleteInput = styled(Autocomplete)`
  background: #FFF;
  border-radius: 10px;
  border-width: 0;
  padding-left: 12px;
  height: ${BREED_INPUT_HEIGHT}px;
`;

export const BreedSuggestion = styled.View`
  height: ${BREED_ITEM_HEIGHT}px;
  justify-content: center;
  padding: 8px;
`;

export const BreedItemSeparator = styled.View`
  width: 100%;
  height: ${BREED_ITEM_SEPARATOR}px;
  background: #CCC;
`;

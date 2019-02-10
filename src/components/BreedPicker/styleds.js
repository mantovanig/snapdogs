import styled from 'styled-components/native';

export const BREED_ITEM_HEIGHT = 60;
export const BREED_ITEM_SEPARATOR = 1;

export const BreedPickerView = styled.View`
  position: absolute;
  bottom: 50px;
  align-self: center;
  width: 90%;
  z-index: 999;
`;

export const BreedPickerSubmit = styled.View`
  background: #fbfbfb;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

export const BreedLabel = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const BreedItem = styled.View`
  justify-content: center;
  align-items: center;
  height: ${BREED_ITEM_HEIGHT}px;
  ${({ selected }) => selected && 'background-color: #000;'};
`;

export const BreedItemText = styled.Text`
 color: ${({ selected }) => selected ? '#FFF' : '#000'};
`;

export const BreedsList = styled.FlatList`
  background: #fbfbfb;
  border-radius: 40px;
  margin-bottom: 12px;
  height: 300px;
`;

export const BreedItemSeparator = styled.View`
  width: 100%;
  height: ${BREED_ITEM_SEPARATOR}px;
  background: #CCC;
`;

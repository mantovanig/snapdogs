/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import BreedPicker from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockBreeds = [
  { label: "Affenpinscher", value: "affenpinscher" },
  { label: "Bulldog Boston", value: "bulldog-boston" },
  { label: "Bulldog French", value: "bulldog-french" },
  { label: "Bullterrier Staffordshire", value: "bullterrier-staffordshire" }
];

describe('BreedPicker', () => {
  it('renders correctly', () => {
    renderer.create(<BreedPicker breeds={mockBreeds} onChangeBreed={() => {}} />);
  });
});



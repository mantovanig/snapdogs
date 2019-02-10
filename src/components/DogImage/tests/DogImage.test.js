/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import DogImage from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockImage = 'https://images.dog.ceo/breeds/maltese/n02085936_7311.jpg';

describe('DogImage', () => {
  it('renders correctly', () => {
    renderer.create(<DogImage loading={false} onPress={() => {}} image={mockImage} />);
  });
});



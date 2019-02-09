import _isEmpty from 'lodash/isEmpty';
import _capitalize from 'lodash/capitalize';
import _flatMapDeep from 'lodash/flatMapDeep';

// TODO: unit test + jsDOC
export const getBreedsOptions = (breeds) => {
  if (_isEmpty(breeds)) return [];

  const arr = Object.keys(breeds).map(function(key) {
    if (_isEmpty(breeds[key])) {
      return {
        label: _capitalize(key),
        value: key
      }
    }

    return breeds[key].map((e) => ({
      label: `${_capitalize(key)} ${_capitalize(e)}`,
      value: `${key}-${e}`
    }))
  });

  return _flatMapDeep(arr);
};

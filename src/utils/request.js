const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const request = (url, options = {}) => {
  return fetch(url, options)
    .then(handleErrors)
    .then(res => res.json())
    .then(res => Promise.resolve(res))
    .catch(e => Promise.reject(e))
};

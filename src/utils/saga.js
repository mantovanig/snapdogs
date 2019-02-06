export const pause = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay.millis);
  });

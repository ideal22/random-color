export const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let randomColor = '#';

  Array.from({ length: 6 }).forEach(() => {
    randomColor += letters[Math.floor(Math.random() * 16)];
  });

  return randomColor;
};

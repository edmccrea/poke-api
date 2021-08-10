export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const lpad = (value, padding) => {
  var zeroes = new Array(padding + 1).join('0');
  return (zeroes + value).slice(-padding);
};

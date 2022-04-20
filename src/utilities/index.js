// utility
export const titleCase = (str) => {
  return str
    .split("-")
    .map((e) => {
      return e[0].toUpperCase() + e.substr(1);
    })
    .join("-");
};

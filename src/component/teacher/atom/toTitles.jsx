export const toTitles = (s) => {
  return (
    s.toString().charAt(0).toUpperCase() +
    s.toString().substring(1).toLowerCase().split(",")[0]
  );
};

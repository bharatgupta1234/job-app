export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const convertToInr = (num: number) => {
  return num.toLocaleString("en-IN");
};

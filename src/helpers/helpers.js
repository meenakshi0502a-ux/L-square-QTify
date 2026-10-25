export const truncate = (text, maxLength = 30) => {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

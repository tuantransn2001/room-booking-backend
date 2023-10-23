export const removeDuplicateObjects = (arr: any[]): any[] => {
  const seen = new Set();
  return arr.filter((item) => {
    const itemString = JSON.stringify(item);
    if (!seen.has(itemString)) {
      seen.add(itemString);
      return true;
    }
    return false;
  });
};

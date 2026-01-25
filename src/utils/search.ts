/**
 * Normalizes a string for searching, strips punctuation.
 */
export const toSearchFormat = (value: string) =>
  value.toLowerCase().replace(/[:./,']/g, "");

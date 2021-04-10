export const formatDateToLocaleFromISO = (ISODate, locale) => {
  const date = new Date(ISODate);
  return date.toLocaleString(locale);
};

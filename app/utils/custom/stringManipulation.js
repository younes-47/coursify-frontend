const camelToKebab = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
const kebabToCamel = (str) =>
  str
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
    .replace(/^-/, '');
const camelToTitle = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z])([a-z])/g, '$1 $2$3')
    .replace(/\b\w/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
const DateTimeFormater = (DT) => {
  // Changes date time format from (yyyy-mm-ddThh:mm:ssz) to yyyy/mm/dd hh:mm
  const date = new Date(DT);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}  `;
  const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
  return `${formattedDate} ${formattedTime}`;
};

export const formatName = (name) => {
  // Capitalizes first letter, lowercase the rest and removes spaces, max 40 chars
  const noSpaces = name.replace(/[^a-zA-Z]/g, '');
  const capitalized =
    noSpaces.charAt(0).toUpperCase() + noSpaces.slice(1).toLowerCase();
  return capitalized.slice(0, 40);
};

export { camelToKebab, kebabToCamel, camelToTitle, DateTimeFormater };
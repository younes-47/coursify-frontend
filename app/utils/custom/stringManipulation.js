export const formatNumberToDate = (number) => {
  // Converts a number to a date string
  const date = new Date(number);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear();
  console.log(`${day}-${month}-${year}`);
  return `${day}-${month}-${year}`;
};

export const formatName = (name) => {
  // Capitalizes first letter, lowercase the rest and removes spaces, max 40 chars
  const noSpaces = name.replace(/[^a-zA-Z]/g, '');
  const capitalized =
    noSpaces.charAt(0).toUpperCase() + noSpaces.slice(1).toLowerCase();
  return capitalized.slice(0, 40);
};

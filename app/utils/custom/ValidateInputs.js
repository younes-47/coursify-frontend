import validator from 'validator';

export const validateFirstName = (firstName) => {
  // at least 1 character, at most 40 characters, only letters
  const regex = /^[A-Za-z]{2,40}$/;

  if (!regex.test(firstName)) {
    return false;
  }

  return true;
};

export const validateLastName = (lastName) => {
  // at least 1 character, at most 40 characters, only letters
  const regex = /^[A-Za-z]{2,40}$/;

  if (!regex.test(lastName)) {
    return false;
  }

  return true;
};

export const validateDate = (date) => {
  // yyyy-mm-dd
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(date)) {
    return false;
  }

  const inputDate = new Date(date);
  const currentDate = new Date();

  // Check if date is in the future, if it's an invalid date, or if it's less than 12 years ago
  if (
    inputDate > currentDate ||
    Number.isNaN(inputDate.getTime()) ||
    currentDate.getFullYear() - inputDate.getFullYear() < 12
  ) {
    return false;
  }

  return true;
};

export const validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    return false;
  }

  return true;
};

export const validatePassword = (password) => {
  // at least 8 characters, at most 24 characters, no spaces
  if (
    !validator.isLength(password, { min: 8, max: 24 }) ||
    password.includes(' ')
  ) {
    return false;
  }

  return true;
};

export const validateData = (data) => {
  const { firstName, lastName, birthdate, email, password } = data;

  if (
    !validateFirstName(firstName) ||
    firstName === '' ||
    !validateLastName(lastName) ||
    lastName === '' ||
    !validateDate(birthdate) ||
    birthdate === '' ||
    !validateEmail(email) ||
    email === '' ||
    !validatePassword(password) ||
    password === ''
  ) {
    return false;
  }

  return true;
};

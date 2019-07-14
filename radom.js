function radom(options = {}) {
  const generatorOptions = Object.assign(
    {
      length: 5,
      useLetters: true,
      useNumbers: true,
      useSpecials: true,
      useLowercase: true,
      useUppercase: true
    },
    typeof options === 'number' ? {length: options} : options
  );

  const lowercaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
  const uppercaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const numbers = '1234567890';
  const specials = '!@#$%^&*';

  let availableCharacters = '';
  let randomString = '';

  if (!generatorOptions.useLetters && !generatorOptions.useNumbers && !generatorOptions.useSpecials) {
    generatorOptions.useLetters = true;
  }

  if (generatorOptions.useLetters && !generatorOptions.useLowercase && !generatorOptions.useUppercase) {
    generatorOptions.useLowercase = true;
  }

  if (generatorOptions.length <= 0) {
    generatorOptions.length = 5;
  }

  if (generatorOptions.useLetters && generatorOptions.useLowercase) {
    availableCharacters += lowercaseLetters;
  }

  if (generatorOptions.useLetters && generatorOptions.useUppercase) {
    availableCharacters += uppercaseLetters;
  }

  if (generatorOptions.useNumbers) {
    availableCharacters += numbers;
  }

  if (generatorOptions.useSpecials) {
    availableCharacters += specials;
  }

  for (let i = 0; i < generatorOptions.length; i++) {
    randomString += availableCharacters[Math.round(Math.random() * (availableCharacters.length - 1))];
  }

  return randomString;
}

module.exports = radom;

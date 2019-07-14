const radom = require('./radom.js');

test('Generates string of 5 characters if no argument is passed', () => {
  const testRandomString = radom();
  expect(testRandomString.length).toBe(5);
});

test('Generates string of n characters if number is passes as argument', () => {
  const testRandomString = radom(10);
  expect(testRandomString.length).toBe(10);
});

test('Uses only letters if \'useNumbers\' and \'useSpecials\' options are set to false', () => {
  const testRandomString = radom({
    useNumbers: false,
    useSpecials: false
  });

  expect(testRandomString).toMatch(/^[a-zA-Z]{5}$/);
});

test('Uses only numbers if \'useLetters\' and \'useSpecials\' options are set to false', () => {
  const testRandomString = radom({
    useLetters: false,
    useSpecials: false
  });

  expect(testRandomString).toMatch(/^[0-9]{5}$/);
});

test('Uses only special characters if \'useLetters\' and \'useNumbers\' options are set to false', () => {
  const testRandomString = radom({
    useLetters: false,
    useNumbers: false
  });

  expect(testRandomString).toMatch(/^[!@#$%^&*]{5}$/);
});

test('Uses only lowercase letters if \'useNumbers\', \'useSpecials\' and \'useUppercase\' are set to false', () => {
  const testRandomString = radom({
    useSpecials: false,
    useNumbers: false,
    useUppercase: false
  });

  expect(testRandomString).toMatch(/^[a-z]{5}$/);
});

test('Uses only uppercase letters if \'useNumbers\', \'useSpecials\' and \'useLowercase\' are set to false', () => {
  const testRandomString = radom({
    useSpecials: false,
    useNumbers: false,
    useLowercase: false
  });

  expect(testRandomString).toMatch(/^[A-Z]{5}$/);
});

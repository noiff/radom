# Radom

Radom (not random) is simple random string generator.

## Installation

`npm install radom`

## Usage

Radom is a function which returns random string.

```javascript
const radom = require('radom');
const randomString = radom(); // returns random string
```

By default returns 5-character string. You can change it by passing a positive number as argument.

```javascript
const radom = require('radom');
const randomString = radom(7); // now the string should have 7 characters
```

Radom uses letters, numbers and some special characters (`!@#$%^&*`) to generate string. You can change it by passing as argument object with config.

## Options

You can pass as argument number, to change generated string length, or config object to change some other options.

```javascript
const radom = require('radom');
const randomString = radom({
  length: 4,
  useLowercase: false
});
```

### Options list

Option | Default | Description
--- | --- | ---
`length` | `5` | Length of generated string.
`useLetters` | `true` | Determines if letters can be used to generate string. It's always true if you set both `useNumbers` and `useSpecials` to `false`.
`useNumbers` | `true` | Determines if numbers can be used to generate string.
`useSpecials` | `true` | Determines if special characters (range: `!@#$%^&*`) can be used to generate string.
`useLowercase` | `true` | Determines if lowercase letters can be used to generate string (`useLetters` must be `true`). If `useLetters` is true, but somehow you decided to set both `useLowercase` and `useUppercase` to false, then radom will use only lowercase letters anyway.
`useUppercase` | `true` | Determines if uppercase letters can be used to generate string (`useLetters` must be `true`).

## WTF is Radom?

It's a city in Poland - https://en.wikipedia.org/wiki/Radom

## Random Character Generator

### Introduction
This JavaScript code generates random characters based on the options provided. The generator can produce alphabetic, numeric, or a mix of both characters.

### Options
The options object allows you to customize the generation of random characters. The available options are:

- `type`: The type of characters to generate. Can be one of the following:
  - `alpha` or `a` for alphabetic characters only
  - `digit` or `d` for numeric characters only
  - `alphadigit` or `ad` for a mix of alphabetic and numeric characters
  - `digitalpha` or `da` for a mix of numeric and alphabetic characters
  - `mixed` or `m` for a shuffled mix of alphabetic and numeric characters
  - `all` or no value for a random mix of alphabetic and numeric characters
- `numOfAlpha`: The number of alphabetic characters to generate (default: 2)
- `numOfDig`: The number of numeric characters to generate (default: 5)

### Functions
The code defines the following functions:

- `generateRandomNumber(min, max)`: Generates a random number between `min` and `max`
- `shuffleArray(arr)`: Shuffles the elements of an array
- `randomCharacters({type, numOfAlpha, numOfDig})`: Generates random characters based on the provided options
- `randomAlpha()`: Generates random alphabetic characters
- `randomDig()`: Generates random numeric characters
- `randomMixed()`: Generates a shuffled mix of alphabetic and numeric characters
- `randomChar()`: Generates a random mix of alphabetic and numeric characters

### Usage
To use the code, create an options object with the desired settings and pass it to the `randomCharacters()` function. The function will return a string of random characters.

**Example:**
```javascript
let options = {
  type: "ad",
  numOfAlpha: 2,
  numOfDig: 5
}
let randomCharacter = randomCharacters(options);
console.log(randomCharacter);
```
This will generate a string of 2 alphabetic characters and 5 numeric characters.
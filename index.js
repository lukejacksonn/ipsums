export default (length) => {
  // Dictionary of words
  let paragraph =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.',
    words = paragraph.split(' '),
    word = '',
    out = capitalize(randomWord());

  // Helper functions
  const charAtEndOfOut = (char, step) =>
    out.indexOf(char, out.length - step - 1) !== -1;

  const randomWord = () =>
    words[Math.floor(Math.random() * (words.length - 1))];

  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  [...Array(length)].forEach(() => {
    word = randomWord();
    out += ' ';

    //Append to out, capitalize first letter if necessary
    out +=
      charAtEndOfOut('.', 1) || charAtEndOfOut('?', 1)
        ? capitalize(word)
        : word.toLowerCase();
  });

  //Append full stop to the end of string, strip punctuation if necessary
  out =
    charAtEndOfOut('.') || charAtEndOfOut(',') || charAtEndOfOut('?')
      ? out.slice(0, -1) + '.'
      : out + '.';

  return out;
};

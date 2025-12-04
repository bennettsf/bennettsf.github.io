export const vowels: string[] = ['A', 'E', 'I', 'O', 'U'];

export const pointDict: { [key: number]: string[] } = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

// get point value for a letter
export function getPointValue(char: string): string {
  for (const [point, letters] of Object.entries(pointDict)) {
    if (letters.includes(char.toUpperCase())) {
      return point;
    }
  }
  return '0';
}

// generate random letters with point values
// 25 letters by default for a 5x5 grid
export function randomLetters(numLetters = 25): string[][] {
  let letters: string[][] = [];
  let lettersSinceLastVowel = 0;

  // grab a random letter numletters times
  // ensure at least one vowel every 4 letters
  for (let i = 0; i < numLetters; i++) {
    if (lettersSinceLastVowel == 4) {
      const vowel = vowels[Math.floor(Math.random() * vowels.length)];
      letters[i] = [vowel, getPointValue(vowel)];
      lettersSinceLastVowel = 0;
      continue;
    }

    const char = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    // if random char is a vowel, reset time since last vowel counter
    if (vowels.includes(char.toUpperCase())) {
      lettersSinceLastVowel = 0;
    }

    letters[i] = [char, getPointValue(char)];
    lettersSinceLastVowel++;
  }
  return letters;
}

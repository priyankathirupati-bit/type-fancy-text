// Unicode font conversion utilities
export interface FontStyle {
  id: string;
  name: string;
  category: string;
  convert: (text: string) => string;
}

const FONT_STYLES: FontStyle[] = [
  {
    id: 'bold',
    name: 'Bold',
    category: 'Basic',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119743); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119737); // a-z
          if (code >= 48 && code <= 57) return String.fromCharCode(code + 120734); // 0-9
          return char;
        })
        .join('');
    }
  },
  {
    id: 'italic',
    name: 'Italic',
    category: 'Basic',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119795); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119789); // a-z
          return char;
        })
        .join('');
    }
  },
  {
    id: 'cursive',
    name: 'Cursive',
    category: 'Stylish',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119951); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119945); // a-z
          return char;
        })
        .join('');
    }
  },
  {
    id: 'double-struck',
    name: 'Double Struck',
    category: 'Mathematical',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 120055); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 120049); // a-z
          if (code >= 48 && code <= 57) return String.fromCharCode(code + 120744); // 0-9
          return char;
        })
        .join('');
    }
  },
  {
    id: 'fraktur',
    name: 'Fraktur',
    category: 'Gothic',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 120003); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119997); // a-z
          return char;
        })
        .join('');
    }
  },
  {
    id: 'monospace',
    name: 'Monospace',
    category: 'Technical',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 120263); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 120257); // a-z
          if (code >= 48 && code <= 57) return String.fromCharCode(code + 120764); // 0-9
          return char;
        })
        .join('');
    }
  },
  {
    id: 'small-caps',
    name: 'Small Caps',
    category: 'Basic',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 8336); // A-Z to small caps
          if (code >= 97 && code <= 122) return String.fromCharCode(code - 32 + 8336); // a-z to small caps
          return char;
        })
        .join('');
    }
  },
  {
    id: 'upside-down',
    name: 'Upside Down',
    category: 'Fun',
    convert: (text: string) => {
      const flippedChars: { [key: string]: string } = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
        'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
        'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ',
        '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0', '.': '˙', ',': "'",
        '?': '¿', '!': '¡', "'": ',', '"': '„', '(': ')', ')': '(', '[': ']', ']': '['
      };
      return text
        .toLowerCase()
        .split('')
        .map(char => flippedChars[char] || char)
        .reverse()
        .join('');
    }
  },
  {
    id: 'bubble',
    name: 'Bubble Text',
    category: 'Fun',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 9333); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 9327); // a-z
          if (code >= 48 && code <= 57) return String.fromCharCode(code + 9263); // 0-9
          return char;
        })
        .join('');
    }
  },
  {
    id: 'square',
    name: 'Square Text',
    category: 'Fun',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 127280); // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 127248); // a-z
          return char;
        })
        .join('');
    }
  },
  {
    id: 'wide',
    name: 'Wide Text',
    category: 'Stylish',
    convert: (text: string) => {
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          if (code >= 33 && code <= 126) return String.fromCharCode(code + 65248); // Full-width
          return char;
        })
        .join('');
    }
  },
  {
    id: 'strikethrough',
    name: 'Strikethrough',
    category: 'Basic',
    convert: (text: string) => {
      return text.split('').map(char => char + '\u0336').join('');
    }
  },
  {
    id: 'underlined',
    name: 'Underlined',
    category: 'Basic',
    convert: (text: string) => {
      return text.split('').map(char => char + '\u0332').join('');
    }
  },
  {
    id: 'glitch',
    name: 'Glitch',
    category: 'Fun',
    convert: (text: string) => {
      const glitchChars = ['̃', '̂', '̆', '̇', '̈', '̉', '̊', '̋', '̌', '̍', '̎', '̏', '̐', '̑', '̒', '̓'];
      return text
        .split('')
        .map(char => {
          if (char !== ' ') {
            const randomGlitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            return char + randomGlitch;
          }
          return char;
        })
        .join('');
    }
  },
  {
    id: 'zalgo',
    name: 'Zalgo',
    category: 'Fun',
    convert: (text: string) => {
      const zalgoChars = ['̴', '̵', '̶', '̷', '̸', '̹', '̺', '̻', '̼', '̽', '̾', '̿', '̀', '́', '̂', '̃', '̄', '̅', '̆', '̇', '̈', '̉', '̊', '̋', '̌', '̍', '̎', '̏', '̐', '̑', '̒'];
      return text
        .split('')
        .map(char => {
          if (char !== ' ') {
            let result = char;
            const numZalgo = Math.floor(Math.random() * 3) + 1;
            for (let i = 0; i < numZalgo; i++) {
              result += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
            }
            return result;
          }
          return char;
        })
        .join('');
    }
  }
];

export const getFontStyles = (): FontStyle[] => FONT_STYLES;

export const getCategories = (): string[] => {
  return [...new Set(FONT_STYLES.map(style => style.category))];
};

export const convertText = (text: string, styleId: string): string => {
  const style = FONT_STYLES.find(s => s.id === styleId);
  return style ? style.convert(text) : text;
};

export const filterStylesByCategory = (category: string): FontStyle[] => {
  return FONT_STYLES.filter(style => style.category === category);
};

export const searchStyles = (query: string): FontStyle[] => {
  const lowercaseQuery = query.toLowerCase();
  return FONT_STYLES.filter(style => 
    style.name.toLowerCase().includes(lowercaseQuery) ||
    style.category.toLowerCase().includes(lowercaseQuery)
  );
};
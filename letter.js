// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

var placeholder = "_";
class Letter {
    constructor(character, hasBeenGuessed) {
        this.character = character;
        this.hasBeenGuessed = hasBeenGuessed;
    }
    returnCharacter() {
        if (this.hasBeenGuessed) {
            return this.character;
        } else {
            return placeholder;
        }
    }
    checkCharacter(characterGuessed) {
        if (characterGuessed === this.character) {
            hasBeenGuessed = true;
        }
    }
}

const a = new Letter ("a", false);
const b = new Letter ("b", false);
const c = new Letter ("c", false);
const d = new Letter ("d", false);
const e = new Letter ("e", false);
const f = new Letter ("f", false);
const g = new Letter ("g", false);
const h = new Letter ("h", false);
const i = new Letter ("i", false);
const j = new Letter ("j", false);
const k = new Letter ("k", false);
const l = new Letter ("l", false);
const m = new Letter ("m", false);
const n = new Letter ("n", false);
const o = new Letter ("o", false);
const p = new Letter ("p", false);
const q = new Letter ("q", false);
const r = new Letter ("r", false);
const s = new Letter ("s", false);
const t = new Letter ("t", false);
const u = new Letter ("u", false);
const v = new Letter ("v", false);
const w = new Letter ("w", false);
const x = new Letter ("x", false);
const y = new Letter ("y", false);
const z = new Letter ("z", false);

module.exports = Letter;

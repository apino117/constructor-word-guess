// Require in word to have all our properties available
var Word = require("./word")

// Create a new word object 
var word = new Word();

// Entire alphabet(?)
const a = new Letter("a", false);
const b = new Letter("b", false);
const c = new Letter("c", false);
const d = new Letter("d", false);
const e = new Letter("e", false);
const f = new Letter("f", false);
const g = new Letter("g", false);
const h = new Letter("h", false);
const i = new Letter("i", false);
const j = new Letter("j", false);
const k = new Letter("k", false);
const l = new Letter("l", false);
const m = new Letter("m", false);
const n = new Letter("n", false);
const o = new Letter("o", false);
const p = new Letter("p", false);
const q = new Letter("q", false);
const r = new Letter("r", false);
const s = new Letter("s", false);
const t = new Letter("t", false);
const u = new Letter("u", false);
const v = new Letter("v", false);
const w = new Letter("w", false);
const x = new Letter("x", false);
const y = new Letter("y", false);
const z = new Letter("z", false);


const butts = word(b,u,t,t,s)

console.log(butts.toString());


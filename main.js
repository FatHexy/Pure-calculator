// let display = document.getElementById('output');
// let expression = '';

// function appendValue(value) {
//   expression += value;
//   display.value = expression;
// }

// function clearValue() {
//   // slice(-1) menghapus setiap value terakhir yang ada dalam ekspression
//   expression = expression.slice(0, -1);
//   display.value = expression;
// }

// function clearDisplay() {
//   expression = '';
//   display.value = '';
// }

// function calculate() {
//   try {
//     let result = eval(expression);
//     display.value = result;
//     expression = '';
//   } catch (error) {
//     display.value = 'Gabisa Blok🥸';
//   }
// }

// Encode JS
var _0x1631 = [
  "\x6F\x75\x74\x70\x75\x74",
  "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
  "",
  "\x76\x61\x6C\x75\x65",
  "\x73\x6C\x69\x63\x65",
  "\x47\x61\x62\x69\x73\x61\x20\x42\x6C\x6F\x6B\uD83E\uDD78",
];
let display = document[_0x1631[1]](_0x1631[0]);
let expression = _0x1631[2];
function appendValue(_0xf235x4) {
  expression += _0xf235x4;
  display[_0x1631[3]] = expression;
}
function clearValue() {
  expression = expression[_0x1631[4]](0, -1);
  display[_0x1631[3]] = expression;
}
function clearDisplay() {
  expression = _0x1631[2];
  display[_0x1631[3]] = _0x1631[2];
}
function calculate() {
  try {
    let _0xf235x8 = eval(expression);
    display[_0x1631[3]] = _0xf235x8;
    expression = _0x1631[2];
  } catch (error) {
    display[_0x1631[3]] = _0x1631[5];
  }
}

let display = document.getElementById('output');
let expression = '';

function appendValue(value) {
  expression += value;
  display.value = expression;
}

function clearValue() {
  // slice(-1) menghapus setiap value terakhir yang ada dalam ekspression
  expression = expression.slice(0, -1);
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Gabisa Blok🥸';
  }
}

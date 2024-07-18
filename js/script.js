"use strict"; // Define o modo estrito para evitar erros comuns.

let btn = document.getElementById("convert-button");

let insertText = document.getElementById("result");

let btnClear = document.getElementById("clear-button");

btnClear.addEventListener("click", function () {
  insertText.textContent = "";

  let convert = (document.getElementById("textConvert").value = "");
});

btn.addEventListener("click", function () {
  let convert = parseFloat(document.getElementById("textConvert").value);

  let OpCunit = document.getElementById("unit-selector").value;

  let calculed;

  switch (OpCunit) {
    case "cm":
      calculed = convert * 0.393701;

      insertText.textContent = `${convert}  cm convert for in, is: ${calculed.toFixed(
        2
      )}`;
      break;

    case "in":
      calculed = convert * 2.54;
      insertText.textContent = `${convert}  in convert for cm, is: ${calculed.toFixed(
        2
      )}`;
      break;

    case "m":
      calculed = convert * 0.3048;
      insertText.textContent = `${convert}  m convert for in, is: ${calculed.toFixed(
        2
      )}`;
      break;

    case "ft":
      calculed = convert * 30.48;
      insertText.textContent = `${convert}  ft convert for cm, is: ${calculed.toFixed(
        2
      )}`;
      break;

    default:
  }
});

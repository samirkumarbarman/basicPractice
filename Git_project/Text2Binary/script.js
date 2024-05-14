
function convertToBinary() {
    const textInput = document.getElementById('textInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
    const binary = textInput.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    binaryOutput.textContent = binary;
  }

  function convertToText() {
    const binaryInput = document.getElementById('binaryInput').value;
    const textOutput = document.getElementById('textOutput');
    const text = binaryInput.split(' ').map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
    textOutput.textContent = text;
  }
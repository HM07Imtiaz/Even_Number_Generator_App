async function generate() {
  const n = document.getElementById('numberInput').value;
  const response = await fetch(`/api/index?n=${n}`);
  const data = await response.json();

  let output = document.getElementById('output');
  if (!output) {
    output = document.createElement('div');
    output.id = 'output';
    document.getElementById('resultArea').appendChild(output);
  }

  if (data.error) {
    output.textContent = `Error: ${data.error}`;
  } else {
    output.textContent = `Even Numbers: ${data.result.join(', ')}`;
  }
}

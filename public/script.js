document.getElementById('generateBtn').addEventListener('click', async () => {
  const n = document.getElementById('numberInput').value;
  const response = await fetch(`/api/index?n=${n}`);
  const data = await response.json();

  const output = document.getElementById('output');
  if (data.error) {
    output.textContent = `Error: ${data.error}`;
  } else {
    output.textContent = `Even Numbers: ${data.result.join(', ')}`;
  }
});

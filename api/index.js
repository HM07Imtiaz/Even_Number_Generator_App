export default function handler(req, res) {
  const n = parseInt(req.query.n);
  if (isNaN(n) || n < 1) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const evenNumbers = [];
  for (let i = 2; evenNumbers.length < n; i += 2) {
    evenNumbers.push(i);
  }

  res.status(200).json({ result: evenNumbers });
}

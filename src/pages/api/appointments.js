export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Fetch appointments data here' });
  } else if (req.method === 'POST') {
    res.status(201).json({ message: 'Create a new appointment here' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
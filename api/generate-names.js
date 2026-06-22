module.exports = async function handler(req, res) {
  // Sirf POST request allow karo
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server me API key set nahi hai' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'prompt missing' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return res.status(response.status).json({ error: data.error?.message || 'Anthropic API error' });
    }

    // Claude ka text response nikal ke bhejo
    const textBlock = data.content?.find(b => b.type === 'text');
    const text = textBlock ? textBlock.text : '';

    return res.status(200).json({ text });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

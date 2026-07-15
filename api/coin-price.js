export default async function handler(req, res) {
  const { symbol = 'bitcoin' } = req.query;

  try {
    const response = await fetch(`${process.env.COINGECKO_API_URL || 'https://api.coingecko.com/api/v3'}/simple/price?ids=${encodeURIComponent(symbol)}&vs_currencies=usd`, {
      headers: {
        'Accept': 'application/json',
        ...(process.env.COINGECKO_API_KEY ? { 'x-cg-pro-api-key': process.env.COINGECKO_API_KEY } : {})
      }
    });

    if (!response.ok) {
      throw new Error(`CoinGecko failed with status ${response.status}`);
    }

    const data = await response.json();
    const priceUsd = data?.[symbol]?.usd ?? null;

    res.status(200).json({
      symbol,
      priceUsd,
      source: 'coingecko',
      cached: false
    });
  } catch (error) {
    res.status(500).json({
      error: 'Unable to fetch price',
      details: error.message
    });
  }
}

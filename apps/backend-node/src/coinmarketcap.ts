export const getBTCQuote = async () => {
  const response = (await fetch(
    'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1',
    {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKET_CAP_API_KEY || '',
        Accept: 'application/json'
      },
      method: 'GET'
    }
  ).then((res) => res.json())) as any

  console.log('CoinMarketCap Response:', response)

  const quote = response?.data['1']?.quote?.USD

  console.log('BTC Quote:', quote)

  return quote
}

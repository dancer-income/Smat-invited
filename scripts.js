// Example: Fetching live stock prices (mock data)
const stockPrices = document.getElementById('stock-prices');
const newsFeed = document.getElementById('news-feed');

const stocks = [
  { symbol: 'AAPL', price: 150.25 },
  { symbol: 'GOOGL', price: 2800.50 },
  { symbol: 'TSLA', price: 750.00 },
];

const news = [
  "Market hits all-time high!",
  "Tech stocks surge amid earnings season.",
  "Federal Reserve announces interest rate hike.",
];

// Display stock prices
stocks.forEach(stock => {
  const stockElement = document.createElement('div');
  stockElement.textContent = `${stock.symbol}: $${stock.price}`;
  stockPrices.appendChild(stockElement);
});

// Display financial news
news.forEach(item => {
  const newsItem = document.createElement('li');
  newsItem.textContent = item;
  newsFeed.appendChild(newsItem);
});

// Example: Chart for market trends
const ctx = document.getElementById('trend-chart').getContext('2d');
const trendChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Market Trend',
      data: [65, 59, 80, 81, 56],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

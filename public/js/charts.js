// Placeholder chart logic
const ctx = document.getElementById('priceChart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Price',
        data: [150, 152, 148, 155, 160],
        borderColor: '#00ffcc',
        backgroundColor: 'rgba(0,255,204,0.2)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}

export function generateTransactionPieChart(canvasId, revenueCount, expenseCount) {
    const ctx = document.getElementById(canvasId);

    const data = {
        labels: ['Receitas', 'Despesas'],
        datasets: [{
            label: 'Proporção entre Receitas e Despesas',
            data: [revenueCount, expenseCount],
            backgroundcolor: [
                'rgb(86,255,178)',
                'rgb(255,95,97)'
            ],
            hoverOffset: 10
        }]
    };

    const options = {
            responsive: true,
            maintainAspectRatio: false,
            borderWidth: 1.8,
            plugins: {
                title: {
                    display: true,
                    text: "Receitas x Despesas",
                    color: "#fff",
                    font: {
                        size: 24,
                        weight: "bold"
                    }
                },
                legend: {
                    labels: {
                        color: '#fff' // 🟢 Cor do texto da legenda
                    }
                }
            }
        }

    const chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    })
}
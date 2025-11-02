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
                    position: "bottom",
                    title: {
                        display: true,
                        padding: 10,
                        text: "Compara o valor total em Receita com o valor total em Despesas",
                        color: "#fff",
                        font: {
                            weight: 'bolder'
                        }
                    },
                    labels: {
                        color: '#fff',
                        padding: 10
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

export function generateTransactionsBytrimesterBarChart(canvasId, valuesBytrimester) {
    const ctx = document.getElementById(canvasId);

    const data = {
        borderColor: '#ff0000ff',
        labels: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre'],
        datasets: [
            {
                label: 'Total em Receitas',
                data: valuesBytrimester.map((value) => {
                    return value.totalRevenue;
                }),
                backgroundColor: '#56FFB2',
                hoverOffset: 10
            },
            {
                label: 'Total em Despesas',
                data: valuesBytrimester.map((value) => {
                    return value.totalExpenses;
                }),
                backgroundColor: '#FF5F61',
                hoverOffset: 10
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Receitas/Despesas por trimestre",
                color: "#fff",
                font: {
                    size: 24,
                    weight: "bold"
                }
            },
            legend: {
                position: "bottom",
                title: {
                    display: true,
                    padding: 10,
                    text: "Compara a quantia de gastos e despesas por trimestre",
                    color: "#fff",
                    font: {
                        weight: 'bolder'
                    }
                },
                labels: {
                    color: '#fff',
                    padding: 10
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: '#525252'
                }
            },
            y: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: '#525252'
                }
            }
        }
    }

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    })
}
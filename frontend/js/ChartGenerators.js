export function generateTransactionPieChart(canvasId, revenueCount, expenseCount) {
    const ctx = document.getElementById(canvasId);

    const data = {
        labels: ['Receitas', 'Despesas'],
        datasets: [{            
            label: 'Proporção entre Receitas e Despesas',
            data: [revenueCount, expenseCount],
            backgroundColor: ['rgb(86,255,178)', 'rgb(255,95,97)'],
            hoverOffset: 10
        }]
    };

    const options = {
            responsive: true,
            maintainAspectRatio: false,
            borderWidth: 0,
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

export function generateRevenueCategoriesComparisionPolarAreaChart(canvasId, valuesByCategorie) {
    const ctx = document.getElementById(canvasId);

    const color = "#56FFB2";

    const data = {
        labels: ["Salário", "Investimentos", "Freelance", "Doações", "Outros"],
        datasets: [{
            label: 'Receita',
            data: [
                valuesByCategorie.salary,
                valuesByCategorie.investments,
                valuesByCategorie.freelance,
                valuesByCategorie.gifts,
                valuesByCategorie.others
            ],
            borderColor: color,
            backgroundColor: color + "80",
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Lucro por Categoria",
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
                    text: "Compara a quantidade de gastos por categoria",
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
                    color: '#ffffffff'
                },
                grid: {
                    color: '#525252'
                }
            },
            r: {
                ticks: {
                    color: '#525252',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    color: '#929292'
                },
                pointLabels: {
                    color: '#fff',
                    font: {
                        size: 16
                    }
                }
            }
        }
    }

    const chart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    })
}

export function generateExpensesCategoriesComparisionPolarAreaChart(canvasId, valuesByCategorie) {
    const ctx = document.getElementById(canvasId);

    const color = "#FF5F61";

    const data = {
        labels: ["Comida", "Transporte", "Entretenimento", "Contas", "Outros"],
        datasets: [{
            label: 'Despesas',
            data: [
                valuesByCategorie.food,
                valuesByCategorie.transportation,
                valuesByCategorie.entertainment,
                valuesByCategorie.utilities,
                valuesByCategorie.others
            ],
            borderColor: color,
            backgroundColor: color + "80",
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Gasto por Categoria",
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
                    text: "Compara a quantidade de gastos por categoria",
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
                    color: '#ffffffff'
                },
                grid: {
                    color: '#525252'
                }
            },
            r: {
                ticks: {
                    color: '#525252',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    color: '#929292'
                },
                pointLabels: {
                    color: '#fff',
                    font: {
                        size: 16
                    }
                }
            }
        }
    }

    const chart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    })
}
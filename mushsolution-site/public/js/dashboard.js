var context = document.getElementById("chart").getContext("2d");
    context.canvas.width = 1000;
    context.canvas.height = 300;

    var configuration = {
        type: 'line',
        data: {
            datasets: [{
                label: ["Atual - Ideal"],
                type: 'line',
                borderColor: ['#01b5ff'],
                backgroundColor: ['#006f9d'],
            },
            {
                label: ["Critico"],
                type: 'line',
                borderColor: ['#fff'],
                backgroundColor: ['#810B0B'],
            },
            {
                label: ["Alto"],
                type: 'line',
                borderColor: ['#fff'],
                backgroundColor: ['#BDB200'],
            },
            {
                label: ["Moderado"],
                type: 'line',
                borderColor: ['#fff'],
                backgroundColor: ['#006d00'],
            },
            {
                label: ["Ideal"],
                type: 'line',
                borderColor: ['#fff'],
                backgroundColor: ['#006f9d'],
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatura'
                    },
                    ticks: {
                        beginAtZero: true
                    }, plugins: {
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart - Logarithmic'
                        }
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    };

    var chart = new Chart(context, configuration);

    //Função para obter os dados de temperatura do server
    //Seria mais interessante fazer isso com WebSocket, porém para fins academicos, os dados serão atualizados via HTTP

    //Esse atributo dentro do contexto serve para saber qual foi o último índice processado, assim eliminado os outros elementos na
    //hora de montar/atualizar o gráfico
    this.lastIndexTemp = 0;
    this.time = 0;

    function get_data() {

        var http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/api', false);
        http.send(null);

        var obj = JSON.parse(http.responseText);
        if (obj.data.length == 0) {
            return;
        }

        var _lastIndexTemp = this.lastIndexTemp;
        this.lastIndexTemp = obj.data.length;
        listTemp = obj.data.slice(_lastIndexTemp);

        listTemp.forEach(data => {
            //Máximo de 60 itens exibidos no gráfico
            if (chart.data.labels.length == 10 && chart.data.datasets[0].data.length == 10) {
                chart.data.labels.shift();
                chart.data.datasets[0].data.shift();
            }

            chart.data.labels.push(this.time++);
            chart.data.datasets[0].data.push(parseFloat(data));
            chart.update();
        });
        //Alertas
        var temperatura = (chart.data.datasets[0].data[9]).toFixed(2);

        if (temperatura >= 24 && temperatura <= 26) {
            configuration.data.datasets[0].label = "Atual - Ideal";
            configuration.data.datasets[0].borderColor = ['#01bb5ff'];
            configuration.data.datasets[0].backgroundColor = ['#006f9d'];
            setTimeout(
                (document.getElementById('lb_temperatura').style.color = '#01b5ff',
                    document.getElementById('lb_temperatura').textContent = `${temperatura}°C`), 5000);

        } else if (temperatura >= 23 && temperatura <= 27) {
            configuration.data.datasets[0].label = "Atual - Moderado";
            configuration.data.datasets[0].borderColor = ['#00e400'];
            configuration.data.datasets[0].backgroundColor = ['#006d00'];
            setTimeout(
                (document.getElementById('lb_temperatura').style.color = '#00e400',
                    document.getElementById('lb_temperatura').textContent = `${temperatura}°C`), 5000);

        } else if (temperatura >= 22 && temperatura <= 28) {
            configuration.data.datasets[0].label = "Atual - Alto";
            configuration.data.datasets[0].borderColor = ['#FFF000'];
            configuration.data.datasets[0].backgroundColor = ['#BDB200'];
            setTimeout(
                (document.getElementById('lb_temperatura').style.color = '#FFF000',
                    document.getElementById('lb_temperatura').textContent = `${temperatura}°C`), 5000);

        } if (temperatura < 21.9 || temperatura > 28) {
            configuration.data.datasets[0].label = "Atual - Critico";
            configuration.data.datasets[0].borderColor = ['#B80D0D'];
            configuration.data.datasets[0].backgroundColor = ['#810B0B'];
            setTimeout(
                (document.getElementById('lb_temperatura').style.color = '#B80D0D',
                    document.getElementById('lb_temperatura').textContent = `${temperatura}°C`), 5000);
        };

        document.getElementById('average').textContent = `${obj.average}°C`;

    }
    setInterval(() => {
        get_data();
    }, 1000);
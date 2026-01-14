// Inicializa gráfico de passes
window.onload = function() {
    const ctx = document.getElementById('passesChart').getContext('2d');
    const passesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jogador 1', 'Jogador 2', 'Jogador 3'],
            datasets: [{
                label: 'Passes certos',
                data: [12, 19, 7],
                backgroundColor: '#FFA500'
            }]
        },
        options: { responsive: true }
    });

    // Simulação de eventos do jogo
    const events = [
        { time: 5, text: "Gol do Jogador 1" },
        { time: 10, text: "Falta no Jogador 2" },
        { time: 15, text: "Escanteio para o Time B" },
        { time: 20, text: "Cartão amarelo Jogador 3" }
    ];

    let currentEvent = 0;
    const eventContainer = document.createElement('div');
    eventContainer.id = 'eventContainer';
    eventContainer.style.marginTop = '20px';
    document.body.appendChild(eventContainer);

    // Função para mostrar eventos de 5 em 5 segundos
    const interval = setInterval(() => {
        if(currentEvent < events.length) {
            const event = events[currentEvent];
            const div = document.createElement('div');
            div.className = 'card';
            div.style.backgroundColor = '#FFA500';
            div.style.color = '#0A1F44';
            div.style.marginBottom = '10px';
            div.textContent = `⏱ ${event.time}' - ${event.text}`;
            eventContainer.appendChild(div);
            currentEvent++;
        } else {
            clearInterval(interval);
        }
    }, 5000);
};
window.onload = function() {

    // ----------------------------
    // 1️⃣ Gráfico de Passes
    // ----------------------------
    const ctx = document.getElementById('passesChart').getContext('2d');
    const passesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jogador 1', 'Jogador 2', 'Jogador 3', 'Jogador 4', 'Jogador 5'],
            datasets: [{
                label: 'Passes certos',
                data: [12, 19, 7, 14, 10],
                backgroundColor: '#FFA500'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // ----------------------------
    // 2️⃣ Simulação de Eventos do Jogo
    // ----------------------------
    const events = [
        { time: 5, text: "Gol do Jogador 1" },
        { time: 10, text: "Falta no Jogador 2" },
        { time: 15, text: "Escanteio para o Time B" },
        { time: 20, text: "Cartão amarelo Jogador 3" },
        { time: 25, text: "Chute perigoso do Jogador 4" }
    ];

    let currentEvent = 0;
    const eventContainer = document.getElementById('eventContainer');

    const interval = setInterval(() => {
        if(currentEvent < events.length) {
            const event = events[currentEvent];
            const div = document.createElement('div');
            div.className = 'card';
            div.textContent = `⏱ ${event.time}' - ${event.text}`;
            eventContainer.appendChild(div);
            currentEvent++;
        } else {
            clearInterval(interval);
        }
    }, 5000);

    // ----------------------------
    // 3️⃣ Simulação de Heatmap
    // ----------------------------
    const heatmapContainer = document.getElementById('heatmapContainer');

    const players = [
        { name: 'Jogador 1', x: 20, y: 50 },
        { name: 'Jogador 2', x: 50, y: 80 },
        { name: 'Jogador 3', x: 80, y: 40 },
        { name: 'Jogador 4', x: 30, y: 20 },
        { name: 'Jogador 5', x: 60, y: 60 }
    ];

    players.forEach(player => {
        const dot = document.createElement('div');
        dot.style.width = '15px';
        dot.style.height = '15px';
        dot.style.backgroundColor = '#FFA500';
        dot.style.borderRadius = '50%';
        dot.style.position = 'absolute';
        dot.style.left = player.x + '%';
        dot.style.top = player.y + '%';
        dot.title = player.name;
        heatmapContainer.appendChild(dot);
    });

    // ----------------------------
    // 4️⃣ Estatísticas rápidas simuladas
    // ----------------------------
    const statsContainer = document.getElementById('statsContainer');

    const stats = [
        { name: 'Chutes', value: 12 },
        { name: 'Escanteios', value: 5 },
        { name: 'Faltas', value: 3 },
        { name: 'Posse de bola', value: '57%' },
        { name: 'Cartões', value: 1 }
    ];

    stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<strong>${stat.value}</strong><br>${stat.name}`;
        statsContainer.appendChild(div);
    });
};
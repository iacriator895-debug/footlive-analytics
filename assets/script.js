body {
    font-family: Arial, sans-serif;
    background-color: #0A1F44;
    color: #fff;
    margin: 0;
    padding: 0;
}

header {
    background-color: #1F3F77;
    padding: 15px;
    text-align: center;
}

header h1 {
    color: #FFA500;
}

.container {
    padding: 20px;
}

.dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
}

.card {
    background-color: #123A5B;
    padding: 15px;
    border-radius: 10px;
}

#heatmapContainer {
    width: 100%;
    height: 200px;
    background-color: #123A5B;
    border-radius: 10px;
    position: relative;
}

#eventContainer .card {
    background-color: #FFA500;
    color: #0A1F44;
    margin-bottom: 10px;
}

#statsContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

#statsContainer .card {
    padding: 10px;
    width: 120px;
    text-align: center;
}
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f8ff;
        color: #333;
        margin: 0;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1 {
        margin-bottom: 20px;
    }
    #clima {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    .card {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
        padding: 16px;
        width: 200px;
        text-align: center;
        transition: transform 0.3s;
    }
    .card:hover {
        transform: scale(1.05);
    }
    .card h3 {
        margin: 0 0 10px;
        color: #007BFF;
    }
    .card p {
        margin: 5px 0;
        font-size: 14px;
    }
    .temp-high {
        color: #d9534f;
    }
    .temp-low {
        color: #5bc0de;
    }
`;

// Adjunta el elemento style al head del documento
document.head.appendChild(style);

// Creación de los elementos h1 y div#clima
const h1 = document.createElement('h1');
h1.textContent = 'Clima en Punta Arenas';

const divClima = document.createElement('div');
divClima.id = 'clima';

// Adjunta los elementos al body del documento
document.body.appendChild(h1);
document.body.appendChild(divClima);

// Enlaza el archivo script.js
const script = document.createElement('script');
script.src = 'script.js';
document.body.appendChild(script);
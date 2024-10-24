/*
fetch('nomi.txt') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nel caricamento del file');
        }
        return response.text();
    })
    .then(text => {
        console.log('Contenuto del file:', text); // Aggiungi questa riga per vedere il contenuto
        processFile(text);
    })
    .catch(error => {
        console.error('Errore nel caricamento del file:', error);
        document.getElementById('output').textContent = 'Errore nel caricamento del file.';
    });

function processFile(content) {
    const lines = content.split('\n'); 
    let lastXIndex = -1;
    
    lines.forEach((line, index) => {
        const [name, x] = line.trim().split(' '); 
        if (x === 'x') {
            lastXIndex = index; 
        }
    });

    const nextName = lastXIndex >= 0 && lastXIndex < lines.length - 1
        ? lines[lastXIndex + 1].trim().split(' ')[0]
        : 'Nessun nome disponibile dopo l\'ultima "x".';

    document.getElementById('output').textContent = `Nome dopo l'ultima "x": ${nextName}`;
}
*/

// Contenuto del file nomi.txt incorporato direttamente
const fileContent = `
Gabriele x
Tommaso
Rocco
Giovanni
`;

processFile(fileContent);

function processFile(content) {
    const lines = content.trim().split('\n'); // Dividi il file in linee
    let lastXIndex = -1;
    
    lines.forEach((line, index) => {
        const [name, x] = line.trim().split(' '); // Supponendo che "x" sia separato da uno spazio
        if (x === 'x') {
            lastXIndex = index; 
        }
    });

    const nextName = lastXIndex >= 0 && lastXIndex < lines.length - 1
        ? lines[lastXIndex + 1].trim().split(' ')[0]
        : 'Nessun nome disponibile dopo l\'ultima "x".';

    // Mostra il risultato nell'elemento output
    document.getElementById('output').textContent = `${nextName}`;
}

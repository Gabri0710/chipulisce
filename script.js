// Lista di nomi
const names = ['Gabriele', 'Tommaso', 'Rocco', 'Giovanni', 'COPPIA'];
let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;
let lastCheck = localStorage.getItem('lastCheck') ? new Date(localStorage.getItem('lastCheck')) : null;

// Funzione per visualizzare il nome corrente
function displayCurrentName() {
    const nameToShow = names[currentIndex];
    document.getElementById('output').textContent = nameToShow; // Mostra solo il nome, senza la "x"
}

// Funzione per controllare se è passato un minuto e aggiornare il nome
function checkForNextMinute() {
    const now = new Date();
    const nextMinute = new Date(lastCheck ? lastCheck.getTime() + 60000 : now.getTime()); // Aggiungi 1 minuto (60000 ms)

    // Controllo se è passato un minuto dall'ultimo aggiornamento
    if (!lastCheck || now >= nextMinute) {
        changeName();  // Passa al nome successivo
        lastCheck = now;
        localStorage.setItem('lastCheck', lastCheck.toString());
    }
}

// Funzione per cambiare al nome successivo
function changeName() {
    currentIndex = (currentIndex + 1) % names.length; // Passa al nome successivo
    localStorage.setItem('currentIndex', currentIndex.toString());
    displayCurrentName();
}

// Mostra il nome corrente al caricamento della pagina
window.onload = function() {
    displayCurrentName();
    // Controlla ogni 5 secondi per vedere se è passato un minuto
    setInterval(checkForNextMinute, 5000);
};

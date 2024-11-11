let count = 0;

function incrementCounter() {
    count++;
    document.getElementById('counter').textContent = count;
}

function resetCounter() {
    count = 0;
    document.getElementById('counter').textContent = count;
}

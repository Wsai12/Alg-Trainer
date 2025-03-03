document.getElementById('hintButton').addEventListener('click', () => showHint("U R U' R'"));

function showHint(algorithm) {
    const nextMove = getNextMove(algorithm);
    document.getElementById('hintdisp').innerText = `Next Move: ${nextMove}`;
}

function getNextMove(algorithm) {
    // Implement logic to get the next move of the algorithm
    return algorithm.split(" ")[0];
}
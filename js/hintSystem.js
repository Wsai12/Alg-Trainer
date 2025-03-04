document.getElementById('hintButton').addEventListener('click', showHint);

function showHint() {
    const algorithm = "U R U' R'"; // Example algorithm, replace with actual algorithm
    const nextMove = getNextMove(algorithm);
    const plan = getPlan(algorithm);
    document.getElementById('hintdisp').innerText = `Next Move: ${nextMove}\nPlan: ${plan}`;
}

function getNextMove(algorithm) {
    // Implement logic to get the next move of the algorithm
    return algorithm.split(" ")[0];
}

function getPlan(algorithm) {
    // Implement logic to get the plan for the algorithm
    return "Solve the cross";
}
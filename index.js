function findWords() {
    // Get input text
    const inputText = document.getElementById('inputText').value;
    
    // Define the regex pattern to find words starting with 't' and ending with 'm'
    const regex = /\bt[a-zA-Z]*m\b/g;
    
    // Find matches
    const matches = inputText.match(regex);
    
    // Display the results
    const resultDiv = document.getElementById('result');
    if (matches) {
        resultDiv.innerHTML = `<strong>Found words:</strong><br>${matches.join('<br>')}`;
    } else {
        resultDiv.innerHTML = 'No words found.';
    }
}

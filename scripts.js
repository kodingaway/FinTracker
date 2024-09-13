document.getElementById('trackerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const balance = document.getElementById('balance').value;
    
    if (name && product && balance) {
        sendToGoogleSheets(name, product, balance);
        this.reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});

function sendToGoogleSheets(name, product, balance) {
    const url = 'https://script.google.com/macros/s/AKfycbxBUWLfIaZ8C2g59TFqOen6S25eQ2yz9KMmcCqGppguIMk0u6aciQH31eZNlrhgTVtH/exec';
    const data = { name, product, balance };

    fetch(url, {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
}

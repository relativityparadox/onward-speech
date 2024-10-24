function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load the header and footer
loadHTML('header-placeholder', 'header.html');
loadHTML('footer-placeholder', 'footer.html');

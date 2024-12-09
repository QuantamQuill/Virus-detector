// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scanButton = document.getElementById('scan-button');
    const deleteButton = document.getElementById('delete-button');
    const fileUpload = document.getElementById('file-upload');
    const results = document.getElementById('results');
    const deleteSection = document.getElementById('delete-section');

    scanButton.addEventListener('click', () => {
        const file = fileUpload.files[0];
        if (file) {
            results.innerHTML = `<p>Scanning ${file.name} for viruses...</p>`;
            // Simulate scanning process
            setTimeout(() => {
                const hasVirus = Math.random() < 0.5; // Randomly decide if a virus is detected
                if (hasVirus) {
                    results.innerHTML = `<p>Virus detected in ${file.name}</p>`;
                    deleteSection.style.display = 'block';
                } else {
                    results.innerHTML = `<p>No virus detected in ${file.name}</p>`;
                    deleteSection.style.display = 'none';
                }
            }, 2000);
        } else {
            results.innerHTML = '<p>Please choose a file to scan.</p>';
            deleteSection.style.display = 'none';
        }
    });

    deleteButton.addEventListener('click', () => {
        results.innerHTML = '<p>Virus deleted successfully.</p>';
        deleteSection.style.display = 'none';
    });
});
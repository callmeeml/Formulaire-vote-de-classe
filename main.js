document.getElementById('voteForm').addEventListener('submit', function() {
    setTimeout(function() {
        document.getElementById('voteForm').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
        const nom = document.getElementById('nom').value;
        if (nom) {
            document.querySelector('.merci-title').innerHTML = `Merci d'avoir voté, ${nom} ! 🎊`;
        }
    }, 1000); // Affiche la confirmation après 1 seconde
});

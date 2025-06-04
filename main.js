document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('voteForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
    // Optionnel : afficher le nom dans le message de remerciement
    const nom = document.getElementById('nom').value;
    if (nom) {
        document.querySelector('.merci-title').innerHTML = `Merci d'avoir voté, ${nom} ! 🎊`;
    }
});
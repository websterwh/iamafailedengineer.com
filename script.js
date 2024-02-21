document.getElementById('text').addEventListener('click', function() {
    this.classList.add('fade-out');
    setTimeout(() => {
        this.classList.add('hidden');
        document.getElementById('image').classList.remove('hidden');
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    if (button1) {
        button1.addEventListener('click', function () {
            alert('Article ajouté au panier !');
        });
    }

    if (button2) {
        button2.addEventListener('click', function () {
            window.location.href = 'p1.html';
        });
    }

    if (button3) {
        button3.addEventListener('click', function () {
            window.location.href = 'p3.html';
        });
    }
});

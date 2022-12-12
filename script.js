    const goat = document.getElementsByClassName('goat');

    document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        goat.style.position = 'absolute';
        goat.style.left = x + 1+ 'px';
        goat.style.top = y + 1 + 'px';
    });
    });

                
    const popup = document.getElementById('popup');
    const showPopupBtn = document.querySelector('button[id="contact]');



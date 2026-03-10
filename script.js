document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');
    const subBtn = document.getElementById('sub-btn');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            document.body.classList.toggle('sidebar-active');
        });
    }

    if (subBtn) {
        const bntInscrito = `<i class="bi bi-bell"></i> Inscrito <i class="bi bi-chevron-down"></i>`;
        const btnPadrao = `Inscrever-se`;

        const salvo = localStorage.getItem('inscrito') === 'true';

        if (salvo) {
            subBtn.classList.add('subscribed');
            subBtn.innerHTML = bntInscrito;
        } else {
            subBtn.classList.remove('subscribed');
            subBtn.innerHTML = btnPadrao;
        }

        subBtn.addEventListener('click', () => {
            const estaInscritoNow = subBtn.classList.toggle('subscribed');
            
            if (estaInscritoNow) {
                subBtn.innerHTML = bntInscrito;
                localStorage.setItem('inscrito', 'true');
            } else {
                subBtn.innerHTML = btnPadrao;
                localStorage.setItem('inscrito', 'false');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');
    const subBtn = document.getElementById('sub-btn');

    // --- Lógica da Sidebar ---
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            // Toggle na classe do body para o CSS empurrar o layout
            document.body.classList.toggle('sidebar-active');
        });
    }

    // --- Lógica do Botão de Inscrição ---
    if (subBtn) {
        // Conteúdos das fases do botão baseados no YouTube Real
        const bntInscrito = `<i class="bi bi-bell"></i> Inscrito <i class="bi bi-chevron-down"></i>`;
        const btnPadrao = `Inscrever-se`;

        // 1. Carregar estado salvo do LocalStorage
        const salvo = localStorage.getItem('inscrito') === 'true';

        if (salvo) {
            subBtn.classList.add('subscribed');
            subBtn.innerHTML = bntInscrito;
        } else {
            subBtn.classList.remove('subscribed');
            subBtn.innerHTML = btnPadrao;
        }

        // 2. Evento de Clique
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
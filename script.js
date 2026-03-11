document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DO MENU LATERAL E INSCRIÇÃO ---
    const menuBtn = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');
    const subBtn = document.getElementById('sub-btn');

    // --- ELEMENTOS DO BOTTOM MENU (MOBILE) ---
    const dotsBtnMobile = document.querySelector('.header-right .bi-three-dots-vertical');
    const bottomMenu = document.getElementById('bottomMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    // 1. LÓGICA DO MENU LATERAL (DESKTOP)
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            document.body.classList.toggle('sidebar-active');
        });
    }

    // 2. LÓGICA DO BOTÃO DE INSCRIÇÃO (COM LOCALSTORAGE)
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

    // 3. LÓGICA DO BOTTOM MENU (OPÇÕES DO CANAL)
    if (dotsBtnMobile && bottomMenu && menuOverlay) {
        
        // Abrir o menu
        dotsBtnMobile.addEventListener('click', () => {
            // Primeiro, mudamos o display para ele passar a existir no DOM
            bottomMenu.style.display = 'block';
            menuOverlay.style.display = 'block';
            
            // Usamos um pequeno delay para que o navegador processe o display:block
            // e consiga executar a animação de subida (transform)
            setTimeout(() => {
                bottomMenu.classList.add('active');
                menuOverlay.classList.add('active'); // Caso queira animar a opacidade do fundo
            }, 10);
        });

        // Fechar o menu (ao clicar no overlay/fundo escuro)
        menuOverlay.addEventListener('click', () => {
            bottomMenu.classList.remove('active');
            
            // Esperamos a animação de 0.3s (do CSS) acabar para dar display: none
            setTimeout(() => {
                bottomMenu.style.display = 'none';
                menuOverlay.style.display = 'none';
            }, 300);
        });
    }
});
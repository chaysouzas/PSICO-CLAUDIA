// MENU HAMBÚRGUER
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        function closeMenu() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function openMenu() {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (hamburger.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Fechar ao clicar em qualquer link do menu
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                closeMenu();
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    }
                }
            });
        });

        // Fechar ao clicar fora (apenas se menu estiver aberto)
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        // FAQ toggle
        function toggleFaq(element) {
            const item = element.closest('.faq-item');
            item.classList.toggle('active');
        }

        // Formulário
        document.getElementById('formContato')?.addEventListener('submit', function(e){
            e.preventDefault();
            alert('Obrigada pelo contato! Em breve retornarei (site de portfólio).');
            closeMenu(); // garante que menu feche se estiver aberto
        });

        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
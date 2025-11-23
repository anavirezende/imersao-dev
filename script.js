document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const searchInput = document.getElementById('input-busca');
    const searchForm = document.querySelector('.search-form');
    let todosOsArtigos = []; // Armazena todos os artigos para não precisar buscar novamente
    const filterStatus = document.getElementById('filter-status');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Função que renderiza os cards na tela
    const renderizarArtigos = (artigosParaRenderizar) => {
        main.innerHTML = ''; // Limpa o conteúdo atual antes de renderizar

        if (artigosParaRenderizar.length === 0) {
            main.innerHTML = '<p class="no-results">Nenhum resultado encontrado para sua busca.</p>';
            return;
        }

        artigosParaRenderizar.forEach((artigo, index) => {
            // Cria as tags HTML
            const tagsHTML = artigo.tags.map(tag => `<button class="card-tag" data-tag="${tag}">${tag}</button>`).join('');

            const articleElement = document.createElement('article');
            articleElement.classList.add('card');

            // Adiciona uma classe para a animação de entrada
            articleElement.style.animationDelay = `${index * 50}ms`; // Reduz o delay para a busca ser mais rápida
            articleElement.classList.add('fade-in-up');
            
            articleElement.innerHTML = `
                <button class="card-close-button" aria-label="Fechar">&times;</button>
                <div class="card-header">
                    <h2>${artigo.nome}</h2>
                    <p>${artigo.descricao}</p>
                    <div class="card-tags-container">${tagsHTML}</div>
                </div>
                <div class="card-content">
                    <p>${artigo.detalhes}</p>
                    <a href="${artigo.link}" target="_blank" rel="noopener noreferrer">Ler artigo completo</a>
                </div>
            `;
            main.appendChild(articleElement);
        });

        // Adiciona listeners para abrir e fechar o card focado (precisa ser re-adicionado a cada renderização)
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', (event) => {
                if (event.target.closest('a, .card-close-button') || card.classList.contains('card--focado')) {
                    return;
                }
                document.body.classList.add('card-focado');
                card.classList.add('card--focado');
            });

            card.querySelector('.card-close-button').addEventListener('click', () => {
                document.body.classList.remove('card-focado');
                card.classList.remove('card--focado');
            });
        });

        // Adiciona listener para o clique nas tags
        document.querySelectorAll('.card-tag').forEach(tagButton => {
            tagButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Impede que o card abra ao clicar na tag
                handleTagClick(tagButton.dataset.tag);
            });
        });

        // Adiciona o efeito de inclinação 3D
        addTiltEffect();
    };

    const addTiltEffect = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardHeader = card.querySelector('.card-header');

            card.addEventListener('mousemove', (e) => {
                if (card.classList.contains('card--focado')) return;

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -7; // O valor 7 controla a intensidade
                const rotateY = ((x - centerX) / centerX) * 7;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                cardHeader.style.transform = `translateZ(20px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                cardHeader.style.transform = 'translateZ(0)';
            });
        });
    };

    // Função para carregar os artigos do JSON
    const carregarArtigos = async () => {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            todosOsArtigos = await response.json();
            renderizarArtigos(todosOsArtigos); // Renderiza todos os artigos inicialmente
        } catch (error) {
            console.error("Não foi possível carregar os artigos:", error);
            main.innerHTML = '<p style="text-align: center;">Ocorreu um erro ao carregar o conteúdo. Tente novamente mais tarde.</p>';
        }
    };

    // Função que filtra os artigos com base no input de busca
    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        const artigosFiltrados = todosOsArtigos.filter(artigo => {
            const nome = artigo.nome.toLowerCase();
            const descricao = artigo.descricao.toLowerCase();
            return nome.includes(searchTerm) || descricao.includes(searchTerm);
        });

        renderizarArtigos(artigosFiltrados);
    };

    // Função que filtra os artigos por tag
    const handleTagClick = (tag) => {
        const artigosFiltrados = todosOsArtigos.filter(artigo => artigo.tags.includes(tag));
        renderizarArtigos(artigosFiltrados);
        searchInput.value = ''; // Limpa a busca
        showClearFilterButton(tag);
    };

    // Mostra o botão de limpar filtro
    const showClearFilterButton = (tag) => {
        filterStatus.innerHTML = `
            <button class="clear-filter-button">
                Filtrando por: <strong>${tag}</strong> &times;
            </button>
        `;
        filterStatus.querySelector('.clear-filter-button').addEventListener('click', () => {
            renderizarArtigos(todosOsArtigos);
            filterStatus.innerHTML = '';
        });
    };

    // Lógica para o seletor de tema
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    };

    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    // Aplica o tema salvo ao carregar a página
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // Adiciona os event listeners
    carregarArtigos();
    themeToggleButton.addEventListener('click', toggleTheme);

    searchInput.addEventListener('input', (event) => {
        handleSearch(event);
        filterStatus.innerHTML = ''; // Limpa o filtro de tag se o usuário começar a digitar
    });
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página ao submeter o form
    });
});
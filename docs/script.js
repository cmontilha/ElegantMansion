document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("footer form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Obrigado por entrar em contato! Retornaremos em breve.");
        form.reset();
    });

    const buttons = document.querySelectorAll(".galeria-grid button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const image = button.previousElementSibling;
            openSidebar(image.alt, image.getAttribute("data-info"));
        });
    });

    const sidebar = document.getElementById("sidebar");
    const closeSidebarButton = sidebar.querySelector("button");
    
    closeSidebarButton.addEventListener("click", function () {
        closeSidebar();
    });

    // Ajuste da galeria para 4 imagens por linha
    const galeriaGrid = document.querySelectorAll(".galeria-grid");
    galeriaGrid.forEach((grid) => {
        grid.style.gridTemplateColumns = "repeat(4, 1fr)";
    });

    // Botões "Ver mais" para as categorias "Diurno" e "Noturno"
    const categoriaButtons = document.querySelectorAll(".categoria-button");
    categoriaButtons.forEach(button => {
        button.addEventListener("click", function() {
            const categoryTitle = button.closest(".categoria").querySelector("h3").textContent;
            let sidebarContent = "";

            if (categoryTitle === "Diurno") {
                sidebarContent = `
                    A seção Diurna do nosso imóvel destaca toda a beleza e requinte dos espaços bem iluminados pela luz natural. 
                    Veja como os raios de sol realçam os detalhes arquitetônicos da fachada, os jardins e as áreas externas cuidadosamente planejadas.
                    Cada ângulo traz um charme único, proporcionando uma experiência visual encantadora e acolhedora.
                    
                    As fotos destacam a integração perfeita entre o interior e o exterior, onde grandes janelas de vidro permitem a entrada de luz natural, 
                    criando um ambiente arejado e harmonioso. O deck da piscina e as áreas de lazer são ideais para relaxar enquanto aprecia a vista deslumbrante 
                    ao redor da propriedade.
                `;
            } else if (categoryTitle === "Noturno") {
                sidebarContent = `
                    A seção Noturna revela uma atmosfera mágica e acolhedora, onde a iluminação estratégica realça a elegância da propriedade durante a noite. 
                    A fachada do imóvel é valorizada por luzes que acentuam seus detalhes arquitetônicos, enquanto o jardim ganha um brilho especial que cria 
                    um ambiente aconchegante e sofisticado.

                    A área da piscina iluminada convida a desfrutar de momentos relaxantes sob as estrelas, e os ambientes internos, como o lavabo e a sala de estar, 
                    mostram como o projeto de iluminação foi pensado para oferecer conforto visual e elegância. A decoração com tons quentes e materiais nobres 
                    é exaltada pelo brilho suave das luzes, garantindo um espaço luxuoso e intimista.
                `;
            }

            openSidebar(categoryTitle, sidebarContent);
        });
    });
});

function openSidebar(title, content) {
    document.getElementById('sidebar-title').textContent = title;
    document.getElementById('sidebar-content').innerHTML = content;
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar').style.display = 'block';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar').style.display = 'none';
}

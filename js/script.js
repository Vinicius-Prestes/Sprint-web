function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

//criação do carrossel
let imagemIndex = 0;
mostraimagem(imagemIndex);

function mostraimagem(n) {
    let imagem = document.getElementsByClassName("imagem-carrossel");
    if (n >= imagem.length) { imagemIndex = 0 }
    if (n < 0) { imagemIndex = imagem.length - 1 }
    for (let i = 0; i < imagem.length; i++) {
        imagem[i].style.display = "none";
    }
    imagem[imagemIndex].style.display = "block";
}

// função para mudar as imagens do carrossel
function proxima() {
    mostraimagem(++imagemIndex);
}

function anterior() {
    mostraimagem(--imagemIndex);
}

// configurando a página criar_conta.html

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    
    alert('Email cadastrado com sucesso: ' + email);
    window.location.href = 'mahindra.html';
});
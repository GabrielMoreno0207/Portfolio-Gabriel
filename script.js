document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    emailjs.init('a9TJPbwSl6OtqQdgz'); 
    
    // Enviar o e-mail usando EmailJS
    emailjs.sendForm('gabrielemail_service', 'template_ri59uve', this)
        .then(function(response) {
            alert('E-mail enviado com sucesso!');
        }, function(error) {
            console.error('Erro ao enviar o e-mail:', error);
            alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
});

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar na imagem, abre o modal
document.querySelector(".zeuss img").addEventListener("click", function() {
    modal.style.display = "block";
});

// Quando o usuário clicar no botão de fechar (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
};

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function baixarCurriculo() {
    var link = document.createElement('a');
    link.href = 'https://github.com/GabrielMoreno0207/C-rriculo/files/10427264/Curriculo-GabrielM.pdf';
    link.download = 'meu_curriculo.pdf';
    link.click();
  }

function playVideo() {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.style.display = 'block';
    videoPlayer.play();
}

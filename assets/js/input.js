
// Input
const inputFile = document.querySelector('#picture__input');

//Imagem
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = 'Selecione uma Imagem 🖼️';
pictureImage.innerHTML = pictureImageTxt;

// Botões
const resetButton = document.querySelector('#button-1');
const sendButton = document.querySelector('#button-2');

// Inserir Imagem
inputFile.addEventListener('change', function (e) {

    const inputTarget = e.target;
    const file = inputTarget.files[0];

    //Exibe o resultado da img no console.
    console.log(inputTarget);

    //Exibe o preview da Imagem caso seja um arquivo válido.
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function (e) {
            const readerTarget = e.target;

            // Cria o documento do tipo imagem por meio do JS
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__img');

            //Limpa o último Estado
            pictureImage.innerHTML = '';

            // Adiciona o Preview da Imagem a tela.
            pictureImage.appendChild(img);
            console.log(img.src);

            // Botões
            resetImage();
            sendImage(img.src);

        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }

    pictureImage.style(reset)
});
// Resetar Imagem

function resetImage() {
    resetButton.addEventListener('click', function () {

        //Limpa o último Estado
        pictureImage.innerHTML = 'Tente outra imagem 🖼️';
    });
}

// Enviar Imagem
function sendImage(string) {
    sendButton.addEventListener('click', function (e) {

        // Confirma no console log
        console.log("deu certo");
        console.log(string)
    });
}
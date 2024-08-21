document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            placeholder: 'Ingrese el texto aquí...',
            infoLabel: 'Solo letras minúsculas y sin acentos',
            encryptButton: 'Encriptar',
            decryptButton: 'Desencriptar',
            noMessage: 'Ningún mensaje fue encontrado',
            enterText: 'Ingresa el texto que desees encriptar o desencriptar.',
            copyButton: 'Copiar'
        },
        en: {
            placeholder: 'Enter the text here...',
            infoLabel: 'Only lowercase letters and no accents',
            encryptButton: 'Encrypt',
            decryptButton: 'Decrypt',
            noMessage: 'No message was found',
            enterText: 'Enter the text you want to encrypt or decrypt.',
            copyButton: 'Copy'
        }
    };

    const languageSelect = document.getElementById('language-select');
    const inputTitle = document.getElementById('input-title');
    const infoLabel = document.getElementById('info-label');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const outputSubtext = document.getElementById('output-subtext');
    const outputParagraph = document.querySelector('.output-paragraph');
    const copyButton = document.getElementById('copy-button');

    function updateLanguage(language) {
        inputTitle.placeholder = translations[language].placeholder;
        infoLabel.textContent = translations[language].infoLabel;
        encryptButton.textContent = translations[language].encryptButton;
        decryptButton.textContent = translations[language].decryptButton;
        outputSubtext.textContent = translations[language].noMessage;
        outputParagraph.textContent = translations[language].enterText;
        copyButton.textContent = translations[language].copyButton;
    }

    // Set initial language based on the select value
    updateLanguage(languageSelect.value);

    // Update language when the user selects a new language
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    });
});


// ***********ENCRYPTION PROCESS*********

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncryption() {
    // Obtiene el texto ingresado en el textarea de input
    let inputText = document.querySelector("#input-title").value;

    // Verifica si hay contenido en el textarea
    if (!inputText.trim()) {
            // Si el textarea está vacío, muestra la imagen y los textos en output-section
            document.querySelector(".output-image").style.display = "block";
            document.querySelector(".output-texts").style.display = "block"; // Si el textarea está vacío,
            document.querySelector("#output-text").style.display = "none";
            document.querySelector("#copy-button").style.display = "none";
            return; // Salir de la función sin realizar cambios 
        }
    
    // Reemplazos de caracteres
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Asigna el texto encriptado al textarea de output
    document.querySelector("#output-text").value = encryptedText;

    // Limpia el textarea de input
    document.querySelector("#input-title").value = "";

    // Oculta la imagen y los textos en output-section y muestra el textarea de output y el boton copiar
    document.querySelector(".output-image").style.display = "none";
    document.querySelector(".output-texts").style.display = "none";
    document.querySelector("#output-text").style.display = "block";
    document.querySelector("#copy-button").style.display = "block";

     // Añade la clase 'encrypted' a la sección de salida
     document.querySelector(".output-section").classList.add("encrypted");

    // Cambia el padding-top y padding-bottom de 243px a 32px, solo si encrypted class no esta presente:
    if (!document.querySelector(".output-section").classList.contains("encrypted")) {
        document.querySelector(".text-output").style.paddingtopTop = "32px";
        document.querySelector(".text-output").style.paddingBottom = "32px";
    }
}


// ***********DENCRYPTION PROCESS*********

function btnDecrypt() {
    // Obtiene el texto ingresado en el textarea de input
    let inputText = document.querySelector("#input-title").value;

    // Verifica si hay contenido en el textarea
    if (!inputText.trim()) {
        // Si el textarea está vacío, muestra la imagen y los textos en output-section
        document.querySelector(".output-image").style.display = "block";
        document.querySelector(".output-texts").style.display = "block"; // Si el textarea está vacío,
        document.querySelector("#output-text").style.display = "none";
        document.querySelector("#copy-button").style.display = "none";
        return; // Salir de la función sin realizar cambios 
    }
    
    // Retorna a los caracteres originales
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Asigna el texto desencriptado al textarea de output
    document.querySelector("#output-text").value = decryptedText;

    // Limpia el textarea de input
    document.querySelector("#input-title").value = "";

    // Oculta la imagen y los textos en output-section y muestra el textarea de output y el boton copiar
    document.querySelector(".output-image").style.display = "none";
    document.querySelector(".output-texts").style.display = "none";
    document.querySelector("#output-text").style.display = "block";
    document.querySelector("#copy-button").style.display = "block";

    // Añade la clase 'encrypted' a la sección de salida
    document.querySelector(".output-section").classList.add("encrypted");

    // Cambia el padding-top y padding-bottom de 243px a 32px, solo si encrypted class no esta presente:
    if (!document.querySelector(".output-section").classList.contains("encrypted")) {
        document.querySelector(".text-output").style.paddingtopTop = "32px";
        document.querySelector(".text-output").style.paddingBottom = "32px";
    }
}

// ***********COPY PROCESS*********

function btnCopy() {
    // Obtiene el texto ingresado en el textarea de output
    let copyText = document.querySelector("#output-text").value;

    // Asigna el texto copiado al textarea de input
    document.querySelector("#input-title").value = copyText;

    // Limpia el textarea de output
    document.querySelector("#output-text").value = "";

    // Retorna a la condicion original, mostrando la imagen y los textos en output-section y oculta el textarea de output y el boton copiar
    document.querySelector(".output-image").style.display = "block";
    document.querySelector(".output-texts").style.display = "block";
    document.querySelector("#output-text").style.display = "none";
    document.querySelector("#copy-button").style.display = "none";
}


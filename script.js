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
//********************************************************************** */
//********************************************************************** */

    // Assign the respective functions to the buttons

/*****Función para verificar si estamos en modo pantalla, tablet o smartphone******/
function ScreenType() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        return "Tablet";
    }
    if (window.matchMedia("(max-width: 375px)").matches) {
        return "Smartphone";
    }
    else {
        return "Desktop";
    }
    
}

document.querySelector(".btn-encrypt").addEventListener("click", function() {
    if (ScreenType() == "Tablet" || "Smarphone" ) {
        // Aquí va la nueva función para tablet o smarphone
        tabletEncryptFunction();
    } 
    else {
        // Ejecuta la Encriptacion de pantalla normal
        btnEncryption()
    }
});


document.querySelector(".btn-decrypt").addEventListener("click", function() {
    if (ScreenType() == "Tablet" || "Smarphone" ) {
        // Aquí va la nueva función para tablet o smarphone
        tabletDecryptFunction();
    } else {
        // Ejecuta la Encriptacion de pantalla normal
        btnDecrypt();
    }
    });

document.querySelector(".btn-copy").addEventListener("click", function() {
    if (ScreenType() == "Tablet" || "Smarphone") {
        // Aquí va la nueva función para tablet o smarphone
        tabletCopyFunction();
    } else {
        // Ejecuta la Encriptacion de pantalla normal
        btnCopy();
    }
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
            document.querySelector(".output-section").style.paddingTop = "8rem";
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

     //Cambia el padding-top en output-section y el margin en output-text, solo si encrypted class esta presente:
   if (document.querySelector(".output-section").classList.contains("encrypted")) {
        document.querySelector(".text-output").style.marginTop = "2rem";
        document.querySelector(".output-section").style.paddingTop = "0rem";
    }
}


// ***********DECRYPTION PROCESS*********

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
        document.querySelector(".output-section").style.paddingTop = "8rem";
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

    //Cambia el padding-top en output-section y el margin en output-text, solo si encrypted class esta presente:
   if (document.querySelector(".output-section").classList.contains("encrypted")) {
        document.querySelector(".text-output").style.marginTop = "2rem";
        document.querySelector(".output-section").style.paddingTop = "0rem";
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
    document.querySelector(".output-section").style.paddingTop = "8rem";
}


//****************************************
//***MODO TABLET or Smarphone, CAMBIOS PARA SEGUNDA PANTALLA******

//*****/ Encryption function for tablet mode****
function tabletEncryptFunction() {

    // Obtiene el texto ingresado en el textarea de input
    let inputText = document.querySelector("#input-title").value;

    // Verifica si hay contenido en el textarea
    if (!inputText.trim()) {
        // Si el textarea está vacío, no muestra la imagen pero si los textos en output-section
        document.querySelector(".output-image").style.display = "none";
        document.querySelector(".output-texts").style.display = "block"; // Si el textarea está vacío,
        document.querySelector(".text-output").style.display = "none";
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
    document.querySelector(".output-section").style.paddingTop = "4rem";
    document.querySelector("#output-text").style.paddingBottom = "0";
    document.querySelector("#output-text").style.marginBottom = "0";
    document.querySelector("#output-text").style.marginTop = "0";
    document.querySelector("#copy-button").style.marginTop = "0";
    document.querySelector("#copy-button").style.paddingTop = "0";
    document.querySelector(".output-section").style.gap = "1rem";
}


//***** */ Decryption function for tablet mode*****
function tabletDecryptFunction() {
    // Obtiene el texto ingresado en el textarea de input
    let inputText = document.querySelector("#input-title").value;
    
    // Verifica si hay contenido en el textarea
    if (!inputText.trim()) {
            // Si el textarea está vacío, no muestra la imagen pero si los textos en output-section
            document.querySelector(".output-image").style.display = "none";
            document.querySelector(".output-texts").style.display = "block"; // Si el textarea está vacío,
            document.querySelector(".text-output").style.display = "none";
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
    document.querySelector(".output-section").style.paddingTop = "4rem";
    document.querySelector("#output-text").style.paddingBottom = "0";
    document.querySelector("#output-text").style.marginBottom = "0";
    document.querySelector("#output-text").style.marginTop = "0";
    document.querySelector("#copy-button").style.marginTop = "0";
    document.querySelector("#copy-button").style.paddingTop = "0";
    document.querySelector(".output-section").style.gap = "1rem";
        
}


///***** */ Copy function for tablet mode****

function tabletCopyFunction() {
   
    // Obtiene el texto ingresado en el textarea de output
    let copyText = document.querySelector("#output-text").value;

    // Asigna el texto copiado al textarea de input
    document.querySelector("#input-title").value = copyText;

    // Limpia el textarea de output
    document.querySelector("#output-text").value = "";

    // Retorna a la condicion original, no muestra la imagen pero si los textos en output-section y oculta el textarea de output y el boton copiar
    document.querySelector(".output-texts").style.display = "block";
    document.querySelector("#output-text").style.display = "none";
    document.querySelector("#copy-button").style.display = "none";

}

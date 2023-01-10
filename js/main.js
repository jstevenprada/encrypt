function encrypt() {
    let text = document.getElementById('textinput').value;
    let textencrypted = text.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.getElementById('showtext').innerText = textencrypted;
    hidediv(text);
}

function decrypt() {
    let text = document.getElementById('textinput').value;
    let textdecrypted =  text.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    document.getElementById('showtext').innerText = textdecrypted;
    hidediv(text);
}

function hidediv(text) {
    if (text.length > 0) {
        console.log(text)
        document.getElementById('textinput').value = '';
        document.getElementById('divimage').style.display = 'none';
        document.getElementById('divtext').style.display = 'flex';
        document.getElementById('divtext').style.flexDirection = 'column';
    }
}

async function copy() {
    let text = document.getElementById('showtext').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        document.getElementById("textinput").focus();
    } catch (err) {
        console.error('Hubo un error al copiar el texto: ', err);
    }
}
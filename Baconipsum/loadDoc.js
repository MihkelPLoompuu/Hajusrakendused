function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    };
    xhttp.open("GET", "https://baconipsum.com/api/?type=all-meat");
    xhttp.send();
}

function processREsponse(jsontext){
    const baconList = JSON.parse(jsontext);
    const paragraphs ="";
    for (const bacon of baconList){
        paragraphs += `<p>${bacon}</p>`
    }
    return baconList
}
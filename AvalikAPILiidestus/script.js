function loadPic() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    };

    xhttp.open("GET", "https://dogapi.dog/api/v2/facts?limit=1");
    xhttp.send();
}
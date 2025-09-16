function localxml(filename){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filename, false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}

function getPlatfoms(platformElements){
    let result = [];
    for (const platform of platformElements){
        result.push.platform.textContent;
    }
    return result.join("/")
}


function gamerateTableRows(xml){
    let tableRows = "<tr><th>Title</th><th>Price</th><th>Platforms</th></tr>";
    const gamesElements = xml.getElementByTagName("games");

    for (let i = 0; i < gamesElements.length; i++) {
        const element = gamesElements[i];
        tableRows += 
        `<tr>
            <td>
                ${element.getElementByTagName("title")[0].childNodes[0].nodeValue}
            </td>
            <td>
                ${element.getElementByTagName("price")[0].childNodes[0].nodeValue}
            </td>
            <td>
                ${element.getElementByTagName("platforms")[0].childNodes[0].nodeValue}
            </td>
        </tr>`

        for(const platform of element.getElementByTagName("platform")){
            platform.textContent;
        }
    }
    return tableRows;
}

document.getElementById("app").innerHTML = `<table id="xmlTable"></table>`;
document.getElementById("xmlTable").innerHTML = gamerateTableRows(localxml("XML/games.xml"));
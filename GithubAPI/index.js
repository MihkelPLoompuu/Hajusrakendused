let givenProfile = "";
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";

function renderPage() {
    document.getElementById("app").innerHTML = `
    <div>
    <h1>Github profile viewer</h1>
    <p>Please enter profile name: </p>
    <input />   
        <div class="content">
        <h1 id="name">Name: ${profileName}</h1>
        <p id="id">Id: ${profileId}</p>
        <p id="repos">Public repos: ${profileRepos}</p>
        <p id="profileurl">Link: ${profileLink}
    <a href="${profileName}
    " target="_blank">/users/</a></p>
        </div>
     </div>
    `;
}

renderPage();

function fetchProfile(){
    const reqHeader = new Headers();
    reqHeader.set("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e")
    const options = {
        headers: reqHeader,
    };

    const req = new Request("https://api.github.com/users/"+ givenProfile, options);
    fetch(req).then((res) =>  res.json()).then((data) => {
        console.log(data);
        console.log(data.login);
        console.log(data.id);
        console.log(data.html_url);
        console.log(data.public_repos);
    });
}
 const importCElemnt = document.querySelector("input");
 inputElement.addEventListener("change", updateValue);

 function updateValue(event){
    givenProfile = event.target.value;
    fetchProfile();
 }
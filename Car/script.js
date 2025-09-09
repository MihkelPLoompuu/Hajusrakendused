const myJson = [
    {
      Car:{
        Color: "Rose red",
        "Tinted windows": false,
        wheels: "4",
        "Roof cargo": false,
        Accessories : [
            "Self driven system",
            "luggage cover"
        ]
      }
    }
  ];

  document.getElementById("app").innerHTML = `
  <div id="json">
    <h1>Car properties</h1>
    <p>Color: ${myJson[0].Car.Color}</p>
    <p>Tinted windows: ${myJson[0].Car["Tinted Windows"]?"False": "True"}</p>
    <p>Wheels: ${myJson[0].Car.wheels}</p>
    <p>Roof cargo: ${myJson[0].Car["Roof cargo"]?"null": "Thule"}</p>
    <p>Accessories: ${myJson[0].Car.Accessories}</p>
    </div>
  `;
  
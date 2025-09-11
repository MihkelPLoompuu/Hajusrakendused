const myJson = [
    {
      Car:{
        Color: "Rose red",
        "Tinted Windows": false,
        wheels: "4",
        "Roof cargo": true,
        Entertainment : [
          "FM Radio",
          "MP3, MP4 and MKV player",
          "harman/kardon speakers",
          "Apple CarPlay/Android Auto",
          "Browers & Wilkins Premium Sound speakers"
        ],
        Accessories : [
            "Self driven system",
            "luggage cover",
            "satnav",
            "cruise control"
        ]
      }
    }
  ];

  document.getElementById("app").innerHTML = `
  <div id="json">
    <h1>Car1 properties</h1>
    <p>Color: ${myJson[0].Car.Color}</p>
    <p>Tinted windows: ${myJson[0].Car["Tinted Windows"]?"true": "false"}</p>
    <p>Wheels: ${myJson[0].Car.wheels}</p>
    <p>Roof cargo: ${myJson[0].Car["Roof cargo"]?"null": "Thule"}</p>
    <p>Audiosystem: ${myJson[0].Car.Entertainment[0]}, ${myJson[0].Car.Entertainment[3]}</p>
    <p>Accessories: ${myJson[0].Car.Accessories[1]},${myJson[0].Car.Accessories[0]}</p>
    </div>
      <div id="json">
    <h1>Car2 properties</h1>
    <p>Color: ${myJson[0].Car.Color}</p>
    <p>Tinted windows: ${myJson[0].Car["Tinted Windows"]?"false": "true"}</p>
    <p>Wheels: ${myJson[0].Car.wheels}</p>
    <p>Roof cargo: ${myJson[0].Car["Roof cargo"]?"Thule": "null"}</p>
    <p>Audiosystem: ${myJson[0].Car.Entertainment[2]}${myJson[0].Car.Entertainment[1]}</p>
    <p>Accessories: ${myJson[0].Car.Accessories[2]}, ${myJson[0].Car.Accessories[3]}</p>
    </div>
  `;
  
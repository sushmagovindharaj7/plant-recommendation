const crops = {

    rice: {
        name: "Rice",
        image:
        "https://images.unsplash.com/photo-1536633055551-3d1f8f6f5a3d?auto=format&fit=crop&w=1000&q=85",

        definition:
        "Rice is a cereal crop that grows well in warm and humid conditions and requires adequate water availability.",

        reason:
        "The entered values indicate warm conditions, good moisture and suitable soil characteristics for rice cultivation.",

        range:
        "N: 60–100 | P: 30–60 | K: 30–60 | pH: 5.5–7.0 | Rainfall: 150–300 mm"
    },


    maize: {
        name: "Maize",
        image:
        "https://images.unsplash.com/photo-1601593768790-2f2f4b7e1e4f?auto=format&fit=crop&w=1000&q=85",

        definition:
        "Maize is a cereal crop commonly grown in moderately warm conditions with balanced soil nutrients.",

        reason:
        "The input values show conditions that can support maize when nutrient levels and rainfall are moderate.",

        range:
        "N: 60–100 | P: 35–60 | K: 30–70 | pH: 5.5–7.5 | Rainfall: 60–150 mm"
    },


    wheat: {
        name: "Wheat",
        image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1000&q=85",

        definition:
        "Wheat is a cereal crop that generally prefers cooler growing conditions and balanced soil nutrients.",

        reason:
        "Wheat becomes more suitable when temperature is relatively cool, humidity is moderate and the soil is near neutral.",

        range:
        "N: 50–90 | P: 30–60 | K: 30–60 | pH: 6.0–7.5 | Rainfall: 40–100 mm"
    },


    cotton: {
        name: "Cotton",
        image:
        "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=1000&q=85",

        definition:
        "Cotton is a warm-season fibre crop that grows well under suitable warm temperatures and soil conditions.",

        reason:
        "Warm temperature, suitable pH and moderate rainfall can make cotton a suitable crop choice.",

        range:
        "N: 60–100 | P: 35–60 | K: 30–60 | pH: 5.5–8.0 | Rainfall: 50–150 mm"
    },


    groundnut: {
        name: "Groundnut",
        image:
        "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1000&q=85",

        definition:
        "Groundnut is a legume and oilseed crop that prefers warm weather and moderately fertile soil.",

        reason:
        "Warm conditions, moderate rainfall and slightly acidic to neutral soil can support groundnut cultivation.",

        range:
        "N: 20–60 | P: 25–50 | K: 20–50 | pH: 5.5–7.0 | Rainfall: 50–120 mm"
    }

};


function getValue(id) {

    return parseFloat(
        document.getElementById(id).value
    );

}


function sampleInput() {

    document.getElementById("n").value = 90;
    document.getElementById("p").value = 42;
    document.getElementById("k").value = 43;

    document.getElementById("temp").value = 25;
    document.getElementById("hum").value = 80;

    document.getElementById("ph").value = 6.5;
    document.getElementById("rain").value = 200;

    recommendCrop();

}


function recommendCrop() {

    const n = getValue("n");
    const p = getValue("p");
    const k = getValue("k");

    const temp = getValue("temp");
    const humidity = getValue("hum");

    const ph = getValue("ph");
    const rain = getValue("rain");


    if (
        [n, p, k, temp, humidity, ph, rain]
        .some(Number.isNaN)
    ) {

        alert("Please enter all 7 parameters.");

        return;
    }


    let cropName = "Rice";

    let score = 0;


    /*
       Simple prototype decision logic
    */

    if (
        rain >= 150 &&
        humidity >= 70 &&
        temp >= 20 &&
        temp <= 32 &&
        ph >= 5.5 &&
        ph <= 7.5
    ) {

        cropName = "Rice";
        score = 92;

    }

    else if (
        temp >= 20 &&
        temp <= 32 &&
        rain >= 60 &&
        rain <= 160
    ) {

        cropName = "Maize";
        score = 88;

    }

    else if (
        temp >= 15 &&
        temp <= 25 &&
        rain >= 40 &&
        rain <= 110
    ) {

        cropName = "Wheat";
        score = 86;

    }

    else if (
        temp >= 21 &&
        temp <= 34 &&
        rain >= 50 &&
        rain <= 160
    ) {

        cropName = "Cotton";
        score = 84;

    }

    else {

        cropName = "Groundnut";
        score = 80;

    }


    const crop = Object.values(crops)
        .find(c => c.name === cropName);


    document.getElementById("result").innerHTML = `

        <img
            class="crop-image"
            src="${crop.image}"
            alt="${crop.name}"
        >

        <p>Recommended Crop</p>

        <h1>${crop.name}</h1>

        <span class="badge">
            Suitability: ${score}%
        </span>


        <div class="reason">

            <b>📖 Definition</b>

            <br>

            ${crop.definition}

        </div>


        <div class="reason">

            <b>💡 Why is this crop recommended?</b>

            <br>

            ${crop.reason}

        </div>


        <div class="reason">

            <b>🧪 Suitable Reference Range</b>

            <br>

            ${crop.range}

        </div>


        <div class="stats">

            <div>
                <b>${ph}</b>
                Soil pH
            </div>

            <div>
                <b>${rain}</b>
                Rainfall
            </div>

            <div>
                <b>${temp}°C</b>
                Temperature
            </div>

        </div>


        <p style="
            font-size:11px;
            color:#68776b;
            margin-top:15px;
        ">

            Prototype estimate for educational demonstration.
            Actual crop selection should use local agricultural
            data and expert agricultural advice.

        </p>

    `;

}

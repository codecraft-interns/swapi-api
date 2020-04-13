((window, document, undefined) => {
    var category = 'person';
    var index = 0;
    const first = document.getElementById('first-label');
    const second = document.getElementById('second-label');
    const third = document.getElementById('third-label');
    const fourth = document.getElementById('fourth-label');
    const fifth = document.getElementById('fifth-label');
    const sixth = document.getElementById('sixth-label');

    const firsta = document.getElementById('first');
    const seconda = document.getElementById('second');
    const thirda = document.getElementById('third');
    const fourtha = document.getElementById('fourth');
    const fiftha = document.getElementById('fifth');
    const sixtha = document.getElementById('sixth');

    const next = document.getElementById('forward-button');
    const back = document.getElementById('back-button');

    const peopleCategory = document.getElementById("people-choice");
    const planetCategory = document.getElementById("planet-choice");
    const spaceCategory = document.getElementById("space-choice");
    const speciesCategory = document.getElementById("species-choice");

    const swapiAPI = (category, index) => `https://tejusravi.000webhostapp.com/swap-api/${category}/${index}/`;

    function getRecord(category, index) {
        fetch(swapiAPI(category, index)).then(data => data.json()).then(function (data) {
            getobject(data, category);
        });
    }
    const person = { "label1": "Name", "label2": "Height", "label3": "Birth", "label4": "Hair Color", "label5": "Skin Color", "label6": "Gender", "key1": "name", "key2": "height", "key3": "birth", "key4": "hair_color", "key5": "skin_color", "key6": "gender" };
    const planet = { "label1": "Name", "label2": "Position", "label3": "Color", "label4": "Width", "label5": "years", "label6": "Moon", "key1": "name", "key2": "position", "key3": "color", "key4": "width", "key5": "noy", "key6": "nom" };
    const spaces = { "label1": "Name", "label2": "Capcity", "label3": "Range", "label4": "Year", "label5": "Weight", "label6": "Seat", "key1": "name", "key2": "capacity", "key3": "range", "key4": "year", "key5": "weight", "key6": "seat" };
    const species = { "label1": "Name", "label2": "Height", "label3": "Birth", "label4": "Hair Color", "label5": "Skin Color", "label6": "Gender", "key1": "name", "key2": "height", "key3": "birth", "key4": "hair_color", "key5": "skin_color", "key6": "gender" };
    
    function appenddata(data, choice) {
        //label fetching 
        first.innerHTML = choice["label1"];
        second.innerHTML = choice["label2"];
        third.innerHTML = choice["label3"];
        fourth.innerHTML = choice["label4"];
        fifth.innerHTML = choice["label5"];
        sixth.innerHTML = choice["label6"];

        //Attribute fetching
        firsta.innerHTML = data[0][choice["key1"]];
        seconda.innerHTML = data[0][choice["key2"]];
        thirda.innerHTML = data[0][choice["key3"]];
        fourtha.innerHTML = data[0][choice["key4"]];
        fiftha.innerHTML = data[0][choice["key5"]];
        sixtha.innerHTML = data[0][choice["key6"]];
    }
    function getobject(data, category) {
        switch (category) {
            case 'person': appenddata(data, person); break;
            case 'planet': appenddata(data, planet); break;
            case 'spaces': appenddata(data, spaces); break;
            case 'species': appenddata(data, species); break;
        }
    }

    function inti(category1, index) {
        category = category1;
        getRecord(category, index);
        back.disabled = true;
    }
    
    next.addEventListener('click', function (e) {
        if (index > 4) {
            next.disabled = true;

        }
        else {
            back.disabled = false;
            getRecord(category, ++index);
        }
    }, false)

    back.addEventListener('click', function (e) {

        if (index <= 1) {
            back.disabled = true;
        }
        else {
            next.disabled = false;
            getRecord(category, --index);
        }
    }, false)

    peopleCategory.addEventListener('click', function (e) {
        inti(e.target.value, index = 1)
    }, false)

    planetCategory.addEventListener('click', function (e) {
        inti(e.target.value, index = 1)
    }, false)

    spaceCategory.addEventListener('click', function (e) {
        inti(e.target.value, index = 1)
    }, false)

    speciesCategory.addEventListener('click', function (e) {
        inti(e.target.value, index = 1)
    }, false)

    inti(category, ++index);
})(window, document, undefined);
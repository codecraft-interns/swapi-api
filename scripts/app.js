(() => {

    var index = 1;
    var people = [];
    var planets = [];
    var species = [];
    // var category = "";

    //category-to-select
    const peopleBtn = document.getElementById("people");
    const planetBtn = document.getElementById("planets");
    const spaceship = document.getElementById("spaceships");
    const speciesBtn = document.getElementById("species");

    //display-box__LHS-content
    let argone = document.getElementById("lhs-one");
    let argtwo = document.getElementById("lhs-two");
    let argthree = document.getElementById("lhs-three");
    let argfour = document.getElementById("lhs-four");
    let argfive = document.getElementById("lhs-five");
    let argsix = document.getElementById("lhs-six");

    //display-box__RHS-content
    let valueone = document.getElementById("rhs-one");
    let valuetwo = document.getElementById("rhs-two");
    let valuethree = document.getElementById("rhs-three");
    let valuefour = document.getElementById("rhs-four");
    let valuefive = document.getElementById("rhs-five");
    let valuesix = document.getElementById("rhs-six");

    //display-box__button
    const nextbtn = document.getElementById("next");
    const prevbtn = document.getElementById("prev")

    // const elementRef = [
    //     [...{ lableref: argone }, ...{ valueRef: valueone }],
    //     [...{ lableref: argtwo }, ...{ valueRef: valuetwo }],
    //     [...{ lableref: argthree }, ...{ valueRef: valuethree }],
    //     [...{ lableref: argfour }, ...{ valueRef: valuefour }],
    //     [...{ lableref: argfive }, ...{ valueRef: valuefive }],
    //     [...{ lableref: argsix }, ...{ valueRef: valuesix }]
    // ];

    const arrppl = ["name" ,"height", "hair_color", "skin_color", "birth_year", "gender"];
    const arrplnt = ["name","diameter","climate","gravity","surface_water","population"];
    const arrspc = ["name","classification","designation","average_height","average_lifespan","language"];

    var crrArr = [];


    // var swAPI = (index=1) => `https://swapi.co/api/people/${index}/?format=json`;

    // function getData(index = 1) {
    //     return fetch(swAPI(index)).then(data => data.json());
    // }

    // function getNextData() {
    //     return ++index;
    // }

    // function getPrevData() {
    //     return --index;
    // }

    // async function displayData() {
    //     const {name, height} = await getData(index);
    //     argone.innerText = "people";
    //     valueone.innerText = name;
    //     argtwo.innerText = "height";
    //     valuetwo.innerText = height;
    // }

    // peopleBtn.addEventListener('click', (e) => {
    //     category = "people";
    //     displayData();
    // },false)

    // planetBtn.addEventListener('click', (e) => {
    //     category = "planet";
    //     displayData();
    // },false)

    // speciesBtn.addEventListener('click', (e) => {
    //     category = "species";
    //     displayData();
    // },false)

    // nextbtn.addEventListener('click', (e) => {
    //     displayData(getNextData());
    // },false)

    // prevbtn.addEventListener('click', (e) => {
    //     displayData(getPrevData());
    // },false)

    // displayData();
    function fetchJson() {
        fetch("./mock.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((cat) => {
               people = cat.people; 
               planets = cat.planets;
               species = cat.species;
            });
            })
    }
    console.log(people);

    async function sepCategory() {
        const {people,planets,species} = await fetchJson();
        return [people, planets, species];
    }

    var category = sepCategory();
    var people = category[0];
    var planets = category[1];
    var species = category[2];

    async function displayData() {
        // const {crrArr[0],crrArr[1],crrArr[2],crrArr[3],crrArr[4],crrArr[5]} = await people[index];
        const {name,height} = await people[index];
        argone.innerText = "Name";
        valueone.innerText = crrArr[0];
        argtwo.innerText = "Height";
        valuetwo.innerText = crrArr[1];
    }

    peopleBtn.addEventListener('click', (e) => {
        crrArr = arrppl;
        displayData();
    })

    displayData();

})();
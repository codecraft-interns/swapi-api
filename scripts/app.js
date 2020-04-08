((window,document,undefined) => {

    var index = 1;

    //category-to-select
    const people = document.getElementById("people");
    const planet = document.getElementById("planets");
    const spaceship = document.getElementById("spaceships");
    const species = document.getElementById("species");

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

    // const arrppl = ["name" ,"height", "hair_color", "skin_color", "birth_year", "gender"]

    const swapipplAPI = (index=1) => `https://swapi.co/api/people/${index}/?format=json`;

    function getData(index = 1) {
        return fetch(swapipplAPI(index)).then(data => data.json());
    }

    function getNextData() {
        return ++index;
    }

    function getPrevData() {
        return --index;
    }

    async function displayData() {
        const {name, height} = await getData(index);
        argone.innerText = "people";
        valueone.innerText = name;
        argtwo.innerText = "height";
        valuetwo.innerText = height;
    }

    people.addEventListener('click', (e) => {
        displayData();
    },false)

    nextbtn.addEventListener('click', (e) => {
        displayData(getNextData());
    },false)

    prevbtn.addEventListener('click', (e) => {
        displayData(getPrevData());
    },false)

})(window,document);
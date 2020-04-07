((window,document,undefined) => {

    let index = 0;
    var category = 0;

    //category-to-select
    let people = document.getElementById("people");
    let planet = document.getElementById("planets");
    let spaceship = document.getElementById("spaceships");
    let species = document.getElementById("species");

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
    let nextbtn = document.getElementById("next");
    let prevbtn = document.getElementById("prev")

    // function getURL(cat) {
    //     let cat = cat;
    //     var swapiAPI = (index = 1) => `https://swapi.co/api/${cat}/${index}/?format=json`;
    //     return swapiAPI;
    // }

    // function getdata(URL,index=1) {
    //     return (fetch(URL(index)).then(data => data.jason());
    // }

    // async function displayRHScontent() {
    //     const {name, height, hair_color} = await getdata(undefined, index);
    //     valueone.innerHTML = name;
    //     argone.innerHTML = "name";
    // }

    // //eventliteners of radio button 
    // people.addEventListener('click', (e) => {
    //     category = "people";
    //     var URL = getURL(category);
    //     let data = getdata(URL);
    //     displayRHScontent(data);
    // },false)

    // planet.addEventListener('click', (e) => {
    //     displayPlanet();
    // },false)
    
    // spaceship.addEventListener('click', (e) => {
    //     displaySpaceship();
    // },false)

    // species.addEventListener('click', (e) => {
    //     displaySpecies();
    // },false)

    const swapi = (index=1) => `https://swapi.co/api/people/${index}/?format=json`;


    function getitem(index=1) {
        return fetch(swapi(index)).then(data => data.json());
    }

    async function display() {
        const {name, height} = await getitem(++index);
        argone.innerText = "people";
        valueone.innerText = name;
        argtwo.innerText = "height";
        valuetwo.innerText = height;
    }

    people.addEventListener('click', (e) => {
        display();
    })

    //eventliteners of display box button
    nextbtn.addEventListener('click', (e) => {
        nextContent();
    },false)

    prevbtn.addEventListener('click', (e) => {
        prevContent();
    },false)


})(window,document)
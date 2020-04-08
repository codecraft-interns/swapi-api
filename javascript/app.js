(() =>{
let index = 0;

//labels for people

let personname = document.getElementById("personname");
let personheight = document.getElementById("personheight");
let personhaircolor = document.getElementById("personhaircolor");
let personskincolor = document.getElementById("personskincolor");
let personbirthyear = document.getElementById("personbirthyear");
let persongender = document.getElementById("persongender");

personname.innerText = "Name:";
personheight.innerText = "Height:";
personhaircolor.innerText = "Hair-color:";
personskincolor.innerText = "Skin-color:";
personbirthyear.innerText = "Birth-year:";
persongender.innerText ="Gender:";


let personName = document.getElementById("personName");
let personHeight = document.getElementById("personHeight");
let personHairColor = document.getElementById("personHairColor");
let personSkinColor = document.getElementById("personSkinColor");
let personBirthYear = document.getElementById("personBirthYear");
let personGender = document.getElementById("personGender");

let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let peopleRbtn = document.getElementById("peopleRbtn");


//people API url
const swapiPeopleApi = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
console.log(swapiPeopleApi);
//fetch people API
function getPerson(index = 1){
    return fetch(swapiPeopleApi(index)).then(data => data.json());
}


async function updateNextPerson() {
    const{name, height, hair_color, skin_color, birth_year, gender} = await getPerson(++index);
    personName.innerText = name;
    personHeight.innerText = height;
    personHairColor.innerText = hair_color;
    personSkinColor .innerText= skin_color;
    personBirthYear.innerText = birth_year;
    personGender.innerText = gender;
}

async function updatePrevPerson() {
    const{name, height, hair_color, skin_color, birth_year, gender} = await getPerson(--index);
    personName.innerText = name;
    personHeight.innerText = height;
    personHairColor.innerText = hair_color;
    personSkinColor .innerText= skin_color;
    personBirthYear.innerText = birth_year;
    personGender.innerText = gender;
}


prevBtn.addEventListener('click', (e) => {
    updatePrevPerson();
},false)

nextBtn.addEventListener('click', (e) => {
    updateNextPerson();
},false)

peopleRbtn.addEventListener('click', (e) => {
    updateNextPerson();
},false)

updateNextPerson();
})();












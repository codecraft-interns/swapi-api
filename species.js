
    let index = 0;
    var count = 1;
    
    //labels for people
    
    let personname = document.getElementById("personname");
    let personheight = document.getElementById("personheight");
    let personhaircolor = document.getElementById("personhaircolor");
    let personskincolor = document.getElementById("personskincolor");
    let personbirthyear = document.getElementById("personbirthyear");
    let persongender = document.getElementById("persongender");
    
    personname.innerText = "name:";
    personheight.innerText = "diameter:";
    personhaircolor.innerText = "climate:";
    personskincolor.innerText = "gravity:";
    personbirthyear.innerText = "surface_water:";
    persongender.innerText ="population:";
    
    
    let personName = document.getElementById("personName");
    let personHeight = document.getElementById("personHeight");
    let personHairColor = document.getElementById("personHairColor");
    let personSkinColor = document.getElementById("personSkinColor");
    let personBirthYear = document.getElementById("personBirthYearbirth-year");
    let personGender = document.getElementById("personGendergender");
    
    let nextBtn = document.getElementById("nextBtn");
    let prevBtn = document.getElementById("prevBtn");
    //let people = document.getElementById("people");
    
    
    //people API url
    const swapiPlanetsApi = (index = 1) => `https://swapi.co/api/planets/${index}/?format=json`;
    //fetch people API
    function getPerson(index = 1){
        return fetch(swapiPlanetsApi(index)).then(data => data.json());
    }
    
    async function updateNextPerson(person) {
        const{name, diameter, climate, gravity, surface_water, population} = await getPerson(++index);
        personName.innerText = name;
        personHeight.innerText = diameter;
        personHairColor.innerText = climate;
        personSkinColor .innerText= gravity;
        personBirthYear.innerText = surface_water;
        personGender.innerText = population;
    }
    
    async function updateNextPerson(person) {
        const{name, diameter, climate, gravity, surface_water, population} = await getPerson(--index);
        personName.innerText = name;
        personHeight.innerText = diameter;
        personHairColor.innerText = climate;
        personSkinColor .innerText= gravity;
        personBirthYear.innerText = surface_water;
        personGender.innerText = population;
    }
    
    
    prevBtn.addEventListener('click', function(e){
        updatePrevPerson();
    },false)
    
    /*people.addEventListener('click', function(e){
        updateNextPerson();
    },false)*/
    
    nextBtn.addEventListener('click', function(e){
        updateNextPerson();
    },false)
    
    updateNextPerson();
    

    
    
    
    
    
    
    
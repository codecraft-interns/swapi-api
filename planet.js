
    let index = 0;
    
    //labels for people
    
    let personname = document.getElementById("personname");
    let personheight = document.getElementById("personheight");
    let personhaircolor = document.getElementById("personhaircolor");
    let personskincolor = document.getElementById("personskincolor");
    let personbirthyear = document.getElementById("personbirthyear");
    let persongender = document.getElementById("persongender");
    
    personname.innerText = "Name:";
    personheight.innerText = "diameter:";
    personhaircolor.innerText = "climate:";
    personskincolor.innerText = "gravity:";
    personbirthyear.innerText = "surface_water:";
    persongender.innerText ="population:";
    
    
    let personName = document.getElementById("personName");
    let personHeight = document.getElementById("personHeight");
    let personHairColor = document.getElementById("personHairColor");
    let personSkinColor = document.getElementById("personSkinColor");
    let personBirthYear = document.getElementById("personBirthYear");
    let personGender = document.getElementById("personGender");
    
    let nextBtn = document.getElementById("nextBtn");
    let prevBtn = document.getElementById("prevBtn");
    let planetRbtn = document.getElementById("planetRbtn");
    
    
    //people API url
    const swapiPlanetsApi = (index = 1) => `https://swapi.co/api/planets/${index}/?format=json`;

    //fetch people API
    function getPlanet(index = 1){
        return fetch(swapiPlanetsApi(index)).then(data => data.json());
    }
    
    async function updateNextPlanets(data) {
        const data = await getPlanet(++index);
        personName.innerText = name;
        personHeight.innerText = diameter;
        personHairColor.innerText = climate;
        personSkinColor .innerText= gravity;
        personBirthYear.innerText = surface_water;
        personGender.innerText = population;
    }
    
    async function updateNextPlanets() {
        const{name, diameter, climate, gravity, surface_water, population} = await getPlanet(--index);
        personName.innerText = name;
        personHeight.innerText = diameter;
        personHairColor.innerText = climate;
        personSkinColor .innerText= gravity;
        personBirthYear.innerText = surface_water;
        personGender.innerText = population;
    }
    
    
    prevBtn.addEventListener('click', function(e){
        updatePrevPlanets();
    },false)
    
    
    
    nextBtn.addEventListener('click', function(e){
        updateNextPlanets();
    },false)
    
    planetRbtn.addEventListener('click', function(e){
        updateNextPlanets();
    },false)

    

    
    
    
    
    
    
    
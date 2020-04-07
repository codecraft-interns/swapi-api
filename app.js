// window.onload=function(){
//     var mb=this.document.getElementById('fetchuserbtn');
// mb.addEventListener("click",fetchuserdata)
// }


// function fetchuserdata(){
//     fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response=>response.json())
//     .then(json=>console.log(json))
// }
(()=>{
    let index = 0;
    const personName = document.getElementById('name');
    const personHeight=document.getElementById('height');
    const personHair=document.getElementById('hair_color');
    const personSkin_color=document.getElementById('skin_color');
   const personGender=document.getElementById('gender');
   const personBirth=document.getElementById('birth_year')

    
    const nextPersonBtn = document.getElementById('nextbtn');
    const prevPersonBtn=document.getElementById('previousbtn');
    
    const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    // const swapiSpeciesAPI = (index = 1) => `https://swapi.co/api/species/${index}/?format=json`;

    
    function getPerson(index = 1) {
      return fetch(swapiPeopleAPI(index)).then(data => data.json());
    }
    
    /* next button  */

    async function updateNxtPerson() {
      const {name,height,hair_color,gender,skin_color,birth_year} = await getPerson(index);
      personName.innerText = name;
      personHeight.innerText=height;
      personHair.innerText=hair_color;
      personSkin_color.innerText=skin_color;   
      personGender.innerText=gender;
      personBirth.innerText=birth_year;
      
    }
    
    /* previous  button  */

    async function updateprevPerson() {
        const {name,height,hair_color,gender,skin_color,birth_year} = await getPerson(--index);
        peronName.innerText = name;
        personHeight.innerText=height;
         personhair.innerText=hair_color;
        personGender.innerText=gender;
        personSkin_color.innerText=skin_color;    
        personBirth.innerText=birth_year; 

      }
      prevPersonBtn.addEventListener('click',function(e){
        updateprevPerson();
    },false)

      
    nextPersonBtn.addEventListener('click', function(e) {
      updateNxtPerson();
    }, false)
    

    updateNxtPerson();
    })();
    // function getSpecies(index=1){
    //   return fetch(swapiSpeciesAPI(index)).then(data => data.json());
    // }
    // async function updateSpecies(){
    //   const {name,classification,designation,average_height,skin_colors,eye_colors}=await getSpecies(++index);
    //   speciesName.innerText = name;
    //   speciesClassification.innerText=classification;
    //   speciesDesignation.innerText=designation;
    //   speciesSkin_color.innerText=skin_color;   
    //   speciesAverage_height.innerText=average_heightaverage_height;
    //   speciesEye_colors.innerText=eye_colors;
    // }
    // async function updateBackSpecies(){
    //   const {name,classification,designation,average_height,skin_colors,eye_colors}=await getSpecies(++index);
    //   speciesName.innerText = name;
    //   speciesClassification.innerText=classification;
    //   speciesDesignation.innerText=designation;
    //   speciesSkin_color.innerText=skin_color;   
    //   speciesAverage_height.innerText=average_heightaverage_height;
    //   speciesEye_colors.innerText=eye_colors;
    // }
{
    let index=0;
    const firstAttribute=document.getElementById('firstValue');
    const secondAttribute=document.getElementById('secondValue');
    const thirdAttribute=document.getElementById('thirdValue');
    const fourthAttribute=document.getElementById('fourthValue');
    
    const nextBttn = document.getElementById('next');
    const previousBttn=document.getElementById('previous');

    

     function categories(categoryName)
    {

    const swapiAPI = (index = 1) => `https://swapi.co/api/${categoryName}/${index}/?format=json`;
    
    function getPeople(index = 1) {
      return fetch(swapiAPI(index)).then(data => data.json());
    }
      
    /* next button code */
    async function updateNextPerson() {
    const {name,height,birth_year,gender} = await getPeople(++index);
      firstAttribute.innerText =ch;
      secondAttribute.innerText=height
      thirdAttribute.innerText=birth_year;
      fourthAttribute.innerText=gender;
          
    }
    
    /*this is previous  button part  name you change ok of function */

    async function updatePreviousPerson() {
      const {name,height,birth_year,gender} = await getPeople(--index);
      firstAttribute.innerText = name;
      secondAttribute.innerText=height;
      thirdAttribute.innerText=birth_year; 
      fourthAttribute.innerText=gender;

      }

      nextBttn.addEventListener('click',function(e){
        updatePreviousPerson();
    },false)

      
      previousBttn.addEventListener('click', function(e) {
      updateNextPerson();
    }, false)
    
    updateNextPerson();
  }
  function AssignPeople(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="HEIGHT";
    document.getElementById('third').innerHTML="BIRTH YEAR";
    document.getElementById('fourth').innerHTML="GENDER";
    let  type= document.getElementById("People").value;
     categories(type);
  }
  function AssignPlanet(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="DIAMETER";
    document.getElementById('third').innerHTML="CLIMATE";
    document.getElementById('fourth').innerHTML="GRAVITY";
    let  type= document.getElementById("Planet").value;
    categories(type);
}


function AssignSpaceShips(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="MODEL";
    document.getElementById('third').innerHTML="CREW";
    document.getElementById('fourth').innerHTML="PASSENGER";
    let  type= document.getElementById("Space").value;
    categories(type);
}


function AssignSpecies(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="CLASSIFICATION";
    document.getElementById('third').innerHTML="HEIGHT";
    document.getElementById('fourth').innerHTML="LANGUAGE";
    let  people= document.getElementById("Species").value;
    categories(type);
}


    

  

   
}









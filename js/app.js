((window,document,undefined)=>{
  let index=0;
    const firstAttribute=document.getElementById('firstValue');
    const secondAttribute=document.getElementById('secondValue');
    const thirdAttribute=document.getElementById('thirdValue');
    const fourthAttribute=document.getElementById('fourthValue');
    
    const nextBttn = document.getElementById('next');
    const previousBttn=document.getElementById('previous');

    

     function categories(categoryName,index)
    {

    const swapiAPI = (index = 1) => `https://swapi.co/api/${categoryName}/${index}/?format=json`;
    
    function getPeople(index = 1) {
      if(index>=1){
      return fetch(swapiAPI(index)).then(data => data.json());
      }
      else{
        let index=1;
      }
    }
    
    /* next button code */
    
    async function updateNextPerson() {
      if(categoryName=='people')
      {
      const {name,height,birth_year,gender} = await getPeople(++index);
      
        firstAttribute.innerText =name;
        secondAttribute.innerText=height;
        thirdAttribute.innerText=birth_year;
        fourthAttribute.innerText=gender;
            
      }
    

      else if(categoryName=='planet'){
        const {name,diameter,climate,gravity} = await getPeople(++index);
        firstAttribute.innerText =name;
        secondAttribute.innerText=diameter;
        thirdAttribute.innerText=climate;
        fourthAttribute.innerText=gravity;
            
      }
      else if(categoryName=='spaceships'){
        const {name,model,crew,passenger} = await getPeople(++index);
        firstAttribute.innerText =name;
        secondAttribute.innerText=model;
        thirdAttribute.innerText=crew;
        fourthAttribute.innerText=passenger;
            
      }
      else if(categoryName=='species')
      {
        const {name,classification,height,language} = await getPeople(++index);
        firstAttribute.innerText =name;
        secondAttribute.innerText=classification;
        thirdAttribute.innerText=height;
        fourthAttribute.innerText=language;
      }

    }

    async function updatePreviousPerson(names) {
      
      if(categoryName=='people')
      {
      const {name,height,birth_year,gender} = await getPeople(--index);
      
        firstAttribute.innerText =name;
        secondAttribute.innerText=height;
        thirdAttribute.innerText=birth_year;
        fourthAttribute.innerText=gender;
            
      }
    

      else if(categoryName=='planet'){
        const {name,diameter,climate,gravity} = await getPeople(--index);
        firstAttribute.innerText =name;
        secondAttribute.innerText=diameter;
        thirdAttribute.innerText=climate;
        fourthAttribute.innerText=gravity;
            
      }
      else if(categoryName=='spaceships'){
        const {name,model,crew,passenger} = await getPeople(--index);
        firstAttribute.innerText =name;
        secondAttribute.innerText=model;
        thirdAttribute.innerText=crew;
        fourthAttribute.innerText=passenger;
            
      }
      else if(categoryName=='species')
      {
        const {name,classification,height,language} = await getPeople(--index);
        firstAttribute.innerText =name;
        secondAttribute.innerText=classification;
        thirdAttribute.innerText=height;
        fourthAttribute.innerText=language;
      }

      }

      nextBttn.addEventListener('click',function(e){
        
        updateNextPerson();
    },false)

      
      previousBttn.addEventListener('click', function(e) {
        updatePreviousPerson();
    }, false)
    
    updateNextPerson();
  }
  peoplebttn.addEventListener('click', function AssignPeople(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="HEIGHT";
    document.getElementById('third').innerHTML="BIRTH YEAR";
    document.getElementById('fourth').innerHTML="GENDER";
    let  type= document.getElementById("People").value;
    let index=0;
     categories(type,index);
  } , false)
    
   planetbttn.addEventListener('click', function AssignPlanet(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="DIAMETER";
    document.getElementById('third').innerHTML="CLIMATE";
    document.getElementById('fourth').innerHTML="GRAVITY";
    let  type= document.getElementById("Planet").value;
    let index=0;
    categories(type,index);
  }
  , false)
  
    spacebttn.addEventListener('click',function AssignSpaceShips(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="MODEL";
    document.getElementById('third').innerHTML="CREW";
    document.getElementById('fourth').innerHTML="PASSENGER";
    let  type= document.getElementById("Space").value;
    let index=0;
    categories(type,index);
  }
  , false)
  
  speciesbttn.addEventListener('click',function AssignSpecies(){
    document.getElementById('first').innerHTML="NAME";
    document.getElementById('second').innerHTML="CLASSIFICATION";
    document.getElementById('third').innerHTML="HEIGHT";
    document.getElementById('fourth').innerHTML="LANGUAGE";
    let  type= document.getElementById("Species").value;
    let index=0;
    categories(type,index);
  }
  , false)

})(window,document,undefined);








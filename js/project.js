((window,document,undefined)=>{    
  let index=0;
    const firstAttribute = document.getElementById('name');
    const secondAttribute=document.getElementById('height');
    const thirdAttribute=document.getElementById('gender');
    const fourthAttribute=document.getElementById('skin');
    const first=document.getElementById('first');
    const second=document.getElementById('second');
    const third=document.getElementById('third');
    const fourth=document.getElementById('fourth');
     
    const nextPersonBtn = document.getElementById('btn2');
    const prevPersonBtn=document.getElementById('btn1');

    function categories(choice,index)
    {

    const swapiAPI = (index = 1) => `https://swapi.co/api/${choice}/${index}/?format=json`;
    
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
      if(choice=="people")
      {
      const {name,height,gender,skin_color} = await getPeople(++index);
      firstAttribute.innerText = name;
      secondAttribute.innerText=height;
      thirdAttribute.innerText=gender;
      fourthAttribute.innerText=skin_color;     
    }
    else if(choice=='planets'){
      const {name,diameter,climate,gravity} = await getPeople(++index);
      firstAttribute.innerText =name;
      secondAttribute.innerText=diameter;
      thirdAttribute.innerText=climate;
      fourthAttribute.innerText=gravity;
          
    }
    else if(choice=='spaceships'){
      const {name,model,crew,passenger} = await getPeople(++index);
      firstAttribute.innerText =name;
      secondAttribute.innerText=model;
      thirdAttribute.innerText=crew;
      fourthAttribute.innerText=passenger;
          
    }
    else if(choice=='species')
    {
      const {name,classification,height,language} = await getPeople(++index);
      firstAttribute.innerText =name;
      secondAttribute.innerText=classification;
      thirdAttribute.innerText=height;
      fourthAttribute.innerText=language;
    }

  }
    
    /*this is previous button part */

    async function updatePreviousPerson() {
      if(choice=="people")
      {
      const {name,height,gender,skin_color} = await getPeople(--index);
      firstAttribute.innerText = name;
      secondAttribute.innerText=height;
      thirdAttribute.innerText=gender;
      fourthAttribute.innerText=skin_color;     
    }
    else if(choice=='planet'){
      const {name,diameter,climate,gravity} = await getPeople(--index);
      firstAttribute.innerText =name;
      secondAttribute.innerText=diameter;
      thirdAttribute.innerText=climate;
      fourthAttribute.innerText=gravity;
          
    }
    else if(choice=='spaceships'){
      const {name,model,crew,passenger} = await getPeople(--index);
      firstAttribute.innerText =name;
      secondAttribute.innerText=model;
      thirdAttribute.innerText=crew;
      fourthAttribute.innerText=passenger;
          
    }
    else if(choice=='species')
    {
      const {name,classification,height,language} = await getPeople(--index);
      firstAttribute.innerText =name;
      secondAttribute.innerText=classification;
      thirdAttribute.innerText=height;
      fourthAttribute.innerText=language;
    }
  
      }
      
      prevPersonBtn.addEventListener('click',function(e){
        updatePreviousPerson();
        },false)
  
      
    nextPersonBtn.addEventListener('click', function(e) {
      updateNextPerson();
    }, false)
    

   updateNextPerson();
  }

   peoplebttn.addEventListener('click', function AssignPeople(){
    first.innerHTML="NAME :";
    second.innerHTML="HEIGHT :";
    third.innerHTML="BIRTH YEAR :";
    fourth.innerHTML="GENDER :";
    let  choice= document.getElementById("people").value;
    let index=0;
     categories(choice,index);
  } , false)
    
   planetbttn.addEventListener('click', function AssignPlanet(){
    first.innerText="NAME :";
    second.innerText="DIAMETER :";
    third.innerText="CLIMATE :";
    fourth.innerText="GRAVITY :";
    let  choice= document.getElementById("planets").value;
    let index=0;
    categories(choice,index);
  }
  , false)
  
    spacebttn.addEventListener('click',function AssignSpaceShips(){
    first.innerText="NAME :";
    second.innerText="MODEL :";
    third.innerText="CREW :";
    fourth.innerText="PASSENGER :";
    let  choice= document.getElementById("space").value;
    let index=0;
    categories(choice,index);
  }
  , false)
  
  speciesbttn.addEventListener('click',function AssignSpecies(){
    first.innerText="NAME :";
    second.innerText="CLASSIFICATION :";
    third.innerText="HEIGHT :";
    fourth.innerText="LANGUAGE :";
    let  choice= document.getElementById("species").value;
    let index=0;
    categories(choice,index);
  }
  , false)

    })(window,document,undefined);

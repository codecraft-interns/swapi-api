(()=>{
    let index = 0;
    
    const peronName = document.getElementById('name');
    const personHeight=document.getElementById('height');
    const personGender=document.getElementById('gender');
    const personSkin_color=document.getElementById('skin');
    const choice=document.getElementById('person').value;
    
    const nextPersonBtn = document.getElementById('btn2');
    const prevPersonBtn=document.getElementById('btn1');
    
    const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/${choice}/${index}/?format=json`;
  
    function getPerson(index = 1) {
      return fetch(swapiPeopleAPI(index)).then(data => data.json());
    }
    
    /* next button code */

    async function updateNextPerson() {
      const {name,height,gender,skin_color} = await getPerson(++index);
      peronName.innerText = name;
      personHeight.innerText=height;
      personGender.innerText=gender;
      personSkin_color.innerText=skin_color;     
    }
    
    /*this is previous button part */

    async function updatePreviousPerson1() {
        const {name,height,gender,skin_color} = await getPerson(--index);
        peronName.innerText = name;
        personHeight.innerText=height;
        personGender.innerText=gender;
        personSkin_color.innerText=skin_color;     

      }
      prevPersonBtn.addEventListener('click',function(e){
        updatePreviousPerson1();
    },false)

      
    nextPersonBtn.addEventListener('click', function(e) {
      updateNextPerson();
    }, false)
    

    updateNextPerson();
    })();
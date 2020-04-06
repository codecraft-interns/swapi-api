(()=>{
    let index = 0;
    
    const peronName = document.getElementById('name');
    const personHeight=document.getElementById('height');
    const personGender=document.getElementById('gender');
    const personSkin_color=document.getElementById('skin');
    const nextPersonBtn = document.getElementById('btn2');

    const prevPersonBtn=document.getElementById('btn1');
    
    const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    
    function getPerson(index = 1) {
      return fetch(swapiPeopleAPI(index)).then(data => data.json());
    }
    
    async function updateNextPerson() {
      const {name} = await getPerson(++index);
      const {height}=await getPerson(++index);
      const {gender}=await getPerson(++index);
      const {skin_color}=await getPerson(++index);
      peronName.innerText = name;
      personHeight.innerText=height;
      personGender.innerText=gender;
      personSkin_color.innerText=skin_color;     
    }
    
    
    async function updateNextPerson1() {
        const {name} = await getPerson(--index);
        const {height} = await getPerson(--index);
        const {gender} = await getPerson(--index);
        const {skin_color} = await getPerson(--index);
        peronName.innerText = name;
        personHeight.innerText=height;
        personGender.innerText=gender;
        personSkin_color.innerText=skin_color;     

      }
      prevPersonBtn.addEventListener('click',function(e){
        updateNextPerson1();
    },false)

      
    nextPersonBtn.addEventListener('click', function(e) {
      updateNextPerson();
    }, false)
    

    updateNextPerson();
    })();
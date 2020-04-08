
((window,document,undefined)=>{

    console.log('hello');
    let index=-1;
    const previousBtn = document.getElementById("previous-btn");
    const nextBtn = document.getElementById("next-btn");

    const swapiPeopleAPI =`https://tejusravi.000webhostapp.com/swap-api/person/`;

    const displayDetails=document.getElementById("information");
    
    function getPerson() {
     
        return fetch(swapiPeopleAPI).then(data => data.json());

    }
    
    
    async function nextPerson() {

        const val = await getPerson(++index);

        displayDetails.innerText=`Name:${val[index].name}
                               hair_color:${val[index].hair_color}
                               skin_color:${val[index].skin_color}
                               gender:${val[index].gender}`;
                            
      }
      
      async function previousPerson() {

        const val = await getPerson(--index);

        displayDetails.innerText=`Name:${val[index].name}
                               hair_color:${val[index].hair_color}
                               skin_color:${val[index].skin_color}
                               gender:${val[index].gender}`;
                            
      }

      nextBtn.addEventListener('click', function(e) {
        nextPerson();
      }, false)
      
      
      previousBtn.addEventListener('click', function(e) {
        if(index){
        previousPerson();}
      }, false)

      nextPerson();
      

})(window,document)
((window, document, undefined)=>{
    let index = 0;
    
    const personInfo = document.getElementById('information');
    
    const nextBtn = document.getElementById('nextbutton');
    
    const prevBtn = document.getElementById('prevbutton');

    const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;

    function getNextRecord() {
      return ++index;
    }
    
    function getPrevRecord() {
      return --index;
    }

    function getRecord(index = 0) {
      return fetch(swapiPeopleAPI(index)).then(data => data.json());
    }
    
    nextBtn.addEventListener('click', function(e) {
      person(getNextRecord());
    }, false)
    
    prevBtn.addEventListener('click', function(e) {  
        person(getPrevRecord());
    }, false)
    
    
    async function person(){
        const output = await getRecord(index);
        personInfo.innerText = `Name:${output.name}
                              Height:${output.height}
                              Hair Color:${output.Hair_color}
                              Skin Color:${output.skin_color}
                              Birth Year:${output.birth_year}
                            Gender:${output.gender}`;
    
    
    }

    
    })(window, document);
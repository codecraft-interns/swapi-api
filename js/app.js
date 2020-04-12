((window, document, undefined) => {
    window.onload = function () {
      let index = 0;
      let currentCategory = 'people';
      const firstLabel = document.getElementById('first-label');
      const secondLabel = document.getElementById('second-label');
      const thirdLabel = document.getElementById('third-label');
      const fourthLabel = document.getElementById('fourth-label');
  
      const firstAttribute = document.getElementById('first-Attribute');
      const secondAttribute = document.getElementById('second-Attribute');
      const thirdAttribute = document.getElementById('third-Attribute');
      const fourthAttribute = document.getElementById('fourth-Attribute');
  
      const nextBtn = document.getElementById('next-btn');
      const prevBtn = document.getElementById('prev-btn');
  
  
      const peopleCategory = document.getElementById('people-Category');
      const planetsCategory = document.getElementById('planets-Category');
      const speciesCategory = document.getElementById('species-Category');
      const spaceshipCategory=document.getElementById('spaceship-Category');
  
      //const swapiAPI = (category, index = 1) => `https://swapi.co/api/${category}/${index}/?format=json`;
      const swapiAPI = (category,index=1) => `http://localhost:3000/${category}/${index}`;

  
      function getRecord(category, index = 1) {
        return fetch(swapiAPI(category, index)).then(data => data.json());
      }
  
      const keyValueMap = {
        people: [
          { key: 'name', label: 'Name' },
          { key: 'height', label: 'Height' },
          { key: 'gender', label: 'Gender' },
          { key: 'skin_color', label: 'Skin color' }
        ],
        planets: [
          { key: 'name', label: 'Name' },
          { key: 'diameter', label: 'Diameter' },
          { key: 'climate', label: 'Climate' },
          { key: 'gravity', label: 'Gravity' }
        ],
        species: [
          { key: 'name', label: 'Name' },
          { key: 'height', label: 'Height' },
          { key: 'classification', label: 'Classification' },
          { key: 'language', label: 'Language' }
        ],
        starships: [
            { key: 'name', label: 'Name' },
            { key: 'model', label: 'Model' },
            { key: 'crew', label: 'Crew' },
            { key: 'passenger', label: 'Passenger' }
          ]      
      };
  
      const attributeRefs = [
        {
          labelRef: firstLabel,
          valueRef: firstAttribute
        },
        {
          labelRef: secondLabel,
          valueRef: secondAttribute
        },
        {
          labelRef: thirdLabel,
          valueRef: thirdAttribute
        },
        {
          labelRef: fourthLabel,
          valueRef: fourthAttribute
        }
      ];
  
      function renderUI(data, currentCategory) {
        const keyValueMapByCategory = keyValueMap[currentCategory];
  
        keyValueMapByCategory.forEach((entry, index) => {
          const currentAttribute = attributeRefs[index];
          const {key, label} = entry;
          currentAttribute.labelRef.innerText = label;
          currentAttribute.valueRef.innerText = data[key];
        });
      }
  
      async function updateNextRecord() {
        const data = await getRecord(currentCategory, ++index);
        if(data["name"]==undefined)
        {
          nextBtn.disabled=true;
          --index;
        }
        else{
          renderUI(data, currentCategory);
        }
        updatePrevBtnStatus();
        
      }
  
      async function updatePreviousRecord() {
        const data = await getRecord(currentCategory, --index);       
        nextBtn.disabled=false;
        renderUI(data, currentCategory);
        updatePrevBtnStatus();
      }
  
      function initializeCategory(catgeoryName) {
        currentCategory = catgeoryName;
        index = 0;
        updateNextRecord();
        updatePrevBtnStatus();
      
      }
  
      function updatePrevBtnStatus() {
        if(index <= 1){
          prevBtn.disabled=true;
          }
          else{
              prevBtn.disabled=false;
          }
      }
  
      /* attach event listers*/
      //buttons
      nextBtn.addEventListener('click', function (e) {
        updateNextRecord();
      }, false)
  
  
      prevBtn.addEventListener('click', function (e) {
        updatePreviousRecord();
      }, false)
  
      //categories
      peopleCategory.addEventListener('click', function (e) {
        initializeCategory(e.target.value)
      }, false)
  
      planetsCategory.addEventListener('click', function (e) {
        initializeCategory(e.target.value);
      } , false)
  
      speciesCategory.addEventListener('click', function (e) {
        initializeCategory(e.target.value);
      }, false)
  
      spaceshipCategory.addEventListener('click', function (e) {
        initializeCategory(e.target.value);
      }, false)
    
      function init() {
        initializeCategory(currentCategory);
      }
      
      init();
  
    }
  })(window, document, undefined);


((window, document, undefined) => {
  window.onload = function () {
    
    let index = 0;
    let currentCategory = 'people';
    const firstLabel = document.getElementById('first-label');
    const secondLabel = document.getElementById('second-label');
    const thirdLabel = document.getElementById('third-label');
    const fourthLabel = document.getElementById('fourth-label');

    const firstAttribute = document.getElementById('first-attribute');
    const secondAttribute = document.getElementById('second-attribute');
    const thirdAttribute = document.getElementById('third-attribute');
    const fourthAttribute = document.getElementById('fourth-attribute');

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');


    const peopleCategory = document.getElementById('people-category');
    const planetCategory = document.getElementById('planet-category');
    const spaceshipsCategory=document.getElementById('spaceships-category');
    const speciesCategory = document.getElementById('species-category');

    const swapiAPI = (category, index = 1) => `http://localhost:3000/${category}/${index}/?format=json`;


    function getRecord(category, index = 1) {
      
      return fetch(swapiAPI(category, index)).then(data => data.json() );
    
    }

    const keyValueMap = {
      people: [
        { key: 'name', value: 'name' },
        { key: 'height', value: 'Height' },
        { key: 'gender', value: 'Gender' },
        { key: 'skin_color', value: 'Skin color' }
      ],
      planets: [
        { key: 'name', value: 'Name' },
        { key: 'diameter', value: 'Diameter' },
        { key: 'climate', value: 'Climate' },
        { key: 'gravity', value: 'Gravity' }
      ],
      spaceships:[
        {key:'name',value:'Name'},
        {key:'model',value:'Model'},
        {key:'MGLT',value:'MGLT'},
        {key:'consumbles',value:'Consumbles'},
      ],
      species: [
        { key: 'name', value: 'Name' },
        { key: 'average_height', value: 'Height' },
        { key: 'classification', value: 'Classification' },
        { key: 'designation', value: 'designation' }
      ],
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
        const {key, value} = entry;
        currentAttribute.labelRef.innerHTML = value;
        currentAttribute.valueRef.innerHTML = data[key];
        
      });
    }

    async function updateNextRecord() {
      
      const data = await getRecord(currentCategory, ++index);
      renderUI(data, currentCategory);
      updatePrevBtnStatus();
    }

    async function updatePreviousRecord() {
     
      const data = await getRecord(currentCategory, --index);
      renderUI(data, currentCategory)
      updatePrevBtnStatus();
    }
    

    function initializeCategory(catgeoryName) {
      currentCategory = catgeoryName;
      index = 0;
      updateNextRecord();
      updatePrevBtnStatus();
    }
    function updatePrevBtnStatus(){
      if(index<=1){
        prevBtn.disabled=true;
      }else{
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

    planetCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
    }
      , false)
    spaceshipsCategory.addEventListener('click',function(e){
        initializeCategory(e.target.value);
      }
    ,false)

    speciesCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
    }
      , false)

    function init() {
      initializeCategory(currentCategory);
    }

    init();

  }
})(window, document, undefined);
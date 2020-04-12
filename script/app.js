((window, document, undefined) => {
  window.onload = function () {
    
    let index = 0;
    let currentCategory = 'people';
    const firstLabel = document.getElementById('first-label');
    const secondLabel = document.getElementById('second-label');
    const thirdLabel = document.getElementById('third-label');
    const fourthLabel = document.getElementById('fourth-label');
    const fifthLabel = document.getElementById('fifth-label');
    const sixthLabel = document.getElementById('sixth-label');

    const firstAttribute = document.getElementById('first-attribute');
    const secondAttribute = document.getElementById('second-attribute');
    const thirdAttribute = document.getElementById('third-attribute');
    const fourthAttribute = document.getElementById('fourth-attribute');
    const fifthAttribute = document.getElementById('fifth-attribute');
    const sixthAttribute = document.getElementById('sixth-attribute');

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');


    const peopleCategory = document.getElementById('people-category');
    const spaceshipCategory = document.getElementById('spaceship-category');
    const planetCategory = document.getElementById('planet-category');
    const speciesCategory = document.getElementById('species-category');

    const swapiAPI = (category, index = 1) => ` http://localhost:3000/${category}/${index}/?format=json`;


    function getRecord(category, index = 1) {
      return fetch(swapiAPI(category, index)).then(data => data.json());
    }

    const keyValueMap = {
      people: [
        { key: 'name', label: 'Name' },
        { key: 'height', label: 'Height' },
        { key: 'gender', label: 'Gender' },
        { key: 'skin_color', label: 'Skin color' },
        { key : 'hair_color', label : 'Hair color'},
        { key : 'eye_color', label : 'Eye color'}
      ],
      starships:[
        {key :"name", label : 'Name'},
        {key : "model",  label : "Model"},
        {key : "manufacturer", label : "Manufacturer"},
        {key : "starship_class", label : "Class"},
        {key : "MGLT", label : "MGLT"},
        {key : "consumables", label : "Consumables"},
      
      ],
      planets: [
        { key: 'name', label: 'Name' },
        { key: 'diameter', label: 'Diameter' },
        { key: 'climate', label: 'Climate' },
        { key: 'gravity', label: 'Gravity' },
        { key: 'terrain', label: 'Terrain' },
        { key: 'surface_water', label: 'Surface water' }
      ],
      species: [
        { key: 'name', label: 'Name'},
        { key: 'height', label: 'Height'},
        { key: 'classification', label: 'Classification'},
        { key: 'language', label: 'Language'},
        { key: 'average_lifespan', label: 'Average lifespan'},
        { key: 'average_height', label: 'Average height' }
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
      },
      {
        labelRef: fifthLabel,
        valueRef: fifthAttribute
      },
      {
        labelRef: sixthLabel,
        valueRef: sixthAttribute
      },
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
      renderUI(data, currentCategory);
     // updatePrevBtnStatus();
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

    function updatePrevBtnStatus() {
      if(index <= 1)
      {
        prevBtn.disabled = true;
      }
      else{
        prevBtn.disabled = false;
      }
      
    }

    /* attach event listers*/
    //buttonsclick
    nextBtn.addEventListener('click', function (e) {
      updateNextRecord();
      updatePrevBtnStatus();
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

    speciesCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
    }
      , false)
    
      spaceshipCategory.addEventListener('click', function (e) {
        initializeCategory(e.target.value);
      }
        , false)
    function init() {
      
     
      initializeCategory(currentCategory);
    }

    init();

  }
})(window, document, undefined);
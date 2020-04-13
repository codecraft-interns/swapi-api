((window, document, undefined) => {
  window.onload = function () {

    let index = 1;
    let  count = 0;
    let currentCategory = 'people';

    //label id
    const firstLabel = document.getElementById('first-label');
    const secondLabel = document.getElementById('second-label');
    const thirdLabel = document.getElementById('third-label');
    const fourthLabel = document.getElementById('fourth-label');
    const fifthLabel = document.getElementById('fifth-label');
    const sixthLabel = document.getElementById('sixth-label');
    
    //value id
    const firstAttribute = document.getElementById('first-attribute');
    const secondAttribute = document.getElementById('second-attribute');
    const thirdAttribute = document.getElementById('third-attribute');
    const fourthAttribute = document.getElementById('fourth-attribute');
    const fifthAttribute = document.getElementById('fifth-attribute');
    const sixthAttribute = document.getElementById('sixth-attribute');
    
    //button id
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    //radio button id
    const peopleCategory = document.getElementById('people-category');
    const planetCategory = document.getElementById('planet-category');
    const speciesCategory = document.getElementById('species-category');
    const starshipsCategory = document.getElementById('starships-category');

    //Fetch Api 
    const swapiAPI = (category, index = 1) => `http://localhost:3000/${category}/${index}`;
    function getRecord(category, index = 1) {
      return fetch(swapiAPI(category, index)).then(data => data.json());
    }
    
    //keyValue Map Object
    const keyValueMap = {
      people: [
        { key: 'name', label: 'Name' },
        { key: 'height', label: 'Height' },
        { key: 'hair_color', label: 'Hair color' },
        { key: 'skin_color', label: 'Skin color' },
        { key: 'birth_year', label: 'Birth year' },
        { key: 'gender', label: 'Gender' }
      ],
      planets: [
        { key: 'name', label: 'Name' },
        { key: 'diameter', label: 'Diameter' },
        { key: 'climate', label: 'Climate' },
        { key: 'gravity', label: 'Gravity' },
        { key: 'rotation_period', label: 'Rotation period' },
        { key: 'orbital_period', label: 'Orbital_period' },

      ],
      species: [
        { key: 'name', label: 'Name' },
        { key: 'designation', label: 'Designation' },
        { key: 'classification', label: 'Classification' },
        { key: 'average_height', label: 'Average_height' },
        { key: 'hair_colors', label: 'Hair color' },
        { key: 'skin_colors', label: 'Skin color' },
      ],

      starships: [
        { key: 'name', label: 'Name' },
        { key: 'model', label: 'Model' },
        { key: 'length', label: 'Length' },
        { key: 'crew', label: 'Crew' },
        { key: 'MGLT', label: 'MGLT' },
        { key: 'passengers', label: 'passengers' },
      ],
    };

    //assigning properties to respective labels
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
      }
    ];
    
    //renderUI key value pair
    function renderUI(data, currentCategory) {
      const keyValueMapByCategory = keyValueMap[currentCategory];

      keyValueMapByCategory.forEach((entry, index) => {
        const currentAttribute = attributeRefs[index];
        const {key, label} = entry;
        currentAttribute.labelRef.innerHTML = label;
        currentAttribute.valueRef.innerHTML = data[key];
      });
    }
    
    //updateRecords
    async function updateNextRecord() {
      const data = await getRecord(currentCategory, ++index);
      renderUI(data, currentCategory);
    }
   
    async function updatePreviousRecord() {
      const data = await getRecord(currentCategory, --index);
      renderUI(data, currentCategory)
      updatePrevBtnStatus();
    }

    function initializeCategory(catgeoryName) {
      currentCategory = catgeoryName;
      index = 0;
      indexCount = 0;
      updateNextRecord();
      updateNextBtnStatus();
      updatePrevBtnStatus();
    }

    //button status
    function updateNextBtnStatus() {
      nextBtn.disabled = index === 5;
      
    }
    function updatePrevBtnStatus() {
      if(index === 5) and (nextBtn.disabled = true)
        nextBtn.disabled = false;
      prevBtn.disabled = index === 1;
    }

    //buttons
    nextBtn.addEventListener('click', function (e) {
      updateNextRecord();
      updateNextBtnStatus() 
      updatePrevBtnStatus();
      updateIndex();
    }, false)
    
    prevBtn.addEventListener('click', function (e) {
      updatePreviousRecord();
    }, false)

    //categories
    peopleCategory.addEventListener('click', function (e) {
      count =0;
      initializeCategory(e.target.value)
    }, false)

    planetCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
      count = 0;
    }, false)

    speciesCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
      count =0;
    }, false)

    starshipsCategory.addEventListener('click', function (e) {
      count = 0;
      initializeCategory(e.target.value);
    }, false)

    function init() {
      initializeCategory(currentCategory);
    }

    init();
    
  }
 })(window, document, undefined)
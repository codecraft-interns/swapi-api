((window, document, undefined)=>{
    let index = 0;

    let currentCategory = 'people';
    const firstLabel = document.getElementById('label1');
    const secondLabel = document.getElementById('label2');
    const thirdLabel = document.getElementById('label3');
    const fourthLabel = document.getElementById('label4');
    const fifthLabel = document.getElementById('label5');
    const sixthLabel = document.getElementById('label6');

    const firstAttribute = document.getElementById('value1');
    const secondAttribute = document.getElementById('value2');
    const thirdAttribute = document.getElementById('value3');
    const fourthAttribute = document.getElementById('value4');
    const fifthAttribute = document.getElementById('value5');
    const sixthAttribute = document.getElementById('value6');
    
    const personInfo = document.getElementById('information');
    
    const nextBtn = document.getElementById('nextbutton');
    const prevBtn = document.getElementById('prevbutton');

    const peopleCategory = document.getElementById('people');
    const planetCategory = document.getElementById('planet');
    const speciesCategory = document.getElementById('species');

    const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/${category}/${index}/?format=json`;

    //const swapiPeopleAPI = (category, index = 1) => `swapiApi.json`;

    const keyValueMap = {
      people: [
        { label: 'Name', key :'name' },
        { label: 'Height', key:'height' },
        { label: 'Mass', key:'mass' },
        { label: 'Hair color', key:'hair_color' },
        { label: 'Birth year', key:'birth_year' },
        { label: 'Gender', key:'gender' },
      ],
      planets: [
        { label: 'Name', key:'name' },
        { label: 'Rotation period', key:'rotation_period' },
        { label: 'Orbital period', key:'orbital_period' },
        { label: 'Diameter', key:'diameter' },
        { label: 'Gravity', key:'gravity' },
        { label: 'Population', key:'population' },
      ],
      species: [
        { label: 'Name', key:'name' },
        { label: 'Classification', key:'classification' },
        { label: 'Designation', key:'designation' },
        { label: 'Average height', key:'average_height' },
        { label: 'Skin colors', key:'skin_colors' },
        { label: 'Average lifespan', key:'average_lifespan' },
      ],
      starShips: [
        { label: 'Name', key:'name' },
        { label: 'Model', key:'model' },
        { label: 'Manufacturer', key:'manufacturer' },
        { label: 'Cost(in credits)', key:'name' },
        { label: 'Crew', key:'crew' },
        { label: 'Passengers', key:'passengers' },
      ]
    }


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
    ]

    function renderUI(data, currentCategory) {
      const keyValueMapByCategory = keyValueMap[currentCategory];

      keyValueMapByCategory.forEach((entry, index) => {
        const currentAttribute = attributeRefs[index];
        const {key, label} = entry;
        currentAttribute.labelRef.innerText = label;
        currentAttribute.valueRef.innerText = data[key];
      });
    }

    function getRecord(category, index = 1) {
      return fetch(swapiPeopleAPI(category, index)).then(data => data.json());
    }

    async function getNextRecord() {
      const data = await getRecord(currentCategory, ++index);
      renderUI(data, currentCategory);
      //return ++index;
    }
    
    async function getPrevRecord() {
      const data = await getRecord(currentCategory, --index);
      renderUI(data, currentCategory)
      updatePrevBtnStatus();
      //return --index;
    }

    function initializeCategory(catgeoryName) {
      currentCategory = catgeoryName;
      index = 0;
      getNextRecord();
      updatePrevBtnStatus();
    }

    function updatePrevBtnStatus() {
      prevBtn.disabled = index === 1;
    }
    
    nextBtn.addEventListener('click', function(e) {
      getNextRecord();
    }, false)
    
    prevBtn.addEventListener('click', function(e) {  
      getPrevRecord();
    }, false)
    
    peopleCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value)
    }, false)

    planetCategory.addEventListener('click', function () {
      initializeCategory(e.target.value);
    }
      , false)

    speciesCategory.addEventListener('click', function () {
      initializeCategory(e.target.value);
    }
      , false)

    function init() {
      initializeCategory(currentCategory);
    }

    init();

    
    })(window, document);
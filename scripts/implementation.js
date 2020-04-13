((window, document, undefined) => {
  window.onload = function () {

    var index = 1;
    var count = 0;
    
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
    const planetCategory = document.getElementById('planet-category');
    const speciesCategory = document.getElementById('species-category');

    const swapiAPI = (category, index = 1) => `http://localhost:3000/${category}/${index}`;    


    function getRecord(category, index = 1) {
      return fetch(swapiAPI(category, index)).then(data => data.json());
    }

    const keyValueMap = {
      people: [
        { key: 'name', label: 'Name :' },
        { key: 'height', label: 'Height :' },
        { key: 'gender', label: 'Gender :' },
        { key: 'skin_color', label: 'Skin color :' },
        { key: 'hair_color', label: 'Hair color :'},
        { key: 'birth_year', label: 'Birth year :'}
      ],
      planets: [
        { key: 'name', label: 'Name :' },
        { key: 'diameter', label: 'Diameter :' },
        { key: 'climate', label: 'Climate :' },
        { key: 'gravity', label: 'Gravity :' },
        {key: 'surface_water', label: 'Surface water :'},
        {key: 'population', label: 'population :'}
      ],
      species: [
        { key: 'name', label: 'Name :' },
        { key: 'average_height', label: 'Height :' },
        { key: 'classification', label: 'Classification :' },
        { key: 'language', label: 'Language :' },
        {key: 'average_lifespan', label: 'Lifespan :'},
        {key: 'designation', label: 'Designation :'}
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
      }
    ];

    function renderUI(data, currentCategory) {
      const keyValueMapByCategory = keyValueMap[currentCategory];

      keyValueMapByCategory.forEach((entry, index) => {
        const currentAttribute = attributeRefs[index];
        const {key, label} = entry;
        currentAttribute.labelRef.innerHTML = label;
        currentAttribute.valueRef.innerHTML = data[key];
      });
    }

    function updatePrevBtnStatus() {
      prevBtn.disabled = (index === 1) ? true : false;
    }

    function updateNextBtnStatus() {
      nextBtn.disabled = (index === 5) ? true : false;
    }

    async function updateNextRecord() {
      index = index + 1;
      const data = await getRecord(currentCategory, index);
      renderUI(data, currentCategory);
      updatePrevBtnStatus();
      updateNextBtnStatus();
    }

    async function updatePreviousRecord() {
      index = index - 1;
      const data = await getRecord(currentCategory, index);
      renderUI(data, currentCategory)
      updatePrevBtnStatus();
      updateNextBtnStatus();
    }

    function initializeCategory(catgeoryName) {
      currentCategory = catgeoryName;
      index = 0;
      updateNextRecord();
      updatePrevBtnStatus();
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
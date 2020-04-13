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
    const prevBtn = document.getElementById('previous-btn');


    const peopleCategory = document.getElementById('people-category');
    const planetCategory = document.getElementById('planet-category');
    const speciesCategory = document.getElementById('species-category');
    const starshipsCategory = document.getElementById('starships-category');

    const swapiAPI = (choice, index) => `http://localhost:3000/${choice}/${index}`;
    function getRecord(category, index = 1) {
      return fetch(swapiAPI(category, index)).then(data => data.json());
    }

    const keyValueMap = {
      people: [
        { label: 'Name', key: 'name' },
        { label: 'Height', key: 'height' },
        { label: 'Mass', key: 'mass' },
        { label: 'Hair color', key: 'hair_color' },
        { label: 'Birth year', key: 'birth_year' },
        { label: 'Gender', key: 'gender' },
      ],
      planets: [
        { label: 'Name', key: 'name' },
        { label: 'Rotation period', key: 'rotation_period' },
        { label: 'Orbital period', key: 'orbital_period' },
        { label: 'Diameter', key: 'diameter' },
        { label: 'Gravity', key: 'gravity' },
        { label: 'Population', key: 'population' },
      ],
      species: [
        { label: 'Name', key: 'name' },
        { label: 'Classification', key: 'classification' },
        { label: 'Designation', key: 'designation' },
        { label: 'Average height', key: 'average_height' },
        { label: 'Skin colors', key: 'skin_colors' },
        { label: 'Average lifespan', key: 'average_lifespan' },
      ],
      starships: [
        { label: 'Name', key: 'name' },
        { label: 'Model', key: 'model' },
        { label: 'Manufacturer', key: 'manufacturer' },
        { label: 'Cost(in credits)', key: 'name' },
        { label: 'Crew', key: 'crew' },
        { label: 'Passengers', key: 'passengers' },
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

    // function renderUI(data,currentCategory){}

    function renderUI(data, currentCategory) {
      const keyValueMapByCategory = keyValueMap[currentCategory];

      keyValueMapByCategory.forEach((entry, index) => {
        const currentAttribute = attributeRefs[index];
        const { label, key } = entry;
        currentAttribute.labelRef.innerText = label;
        currentAttribute.valueRef.innerText = data[key];
        //document.getElementById(currentAttribute[1]).innerText=
      });
    }
    async function updateNextRecord() {
      const data = await getRecord(currentCategory, ++index);
      renderUI(data, currentCategory);
    }

    async function updatePreviousRecord() {
      const data = await getRecord(currentCategory, --index);
      renderUI(data, currentCategory)
      updatePrevBtnStatus();
    }

    function initializeCategory(categoryName) {
      currentCategory = categoryName;
      index = 0;
      updateNextRecord();
      updatePrevBtnStatus(index);
    }

    function updatePrevBtnStatus(index) {
      if (index) {
        prevBtn.disabled = false;
      }
      else {
        prevBtn.disabled = true;
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

    speciesCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
    }
      , false)

    starshipsCategory.addEventListener('click', function (e) {
      initializeCategory(e.target.value);
    }
      , false)

    function init() {
      initializeCategory(currentCategory);
    }

    init();

  }
})(window, document)
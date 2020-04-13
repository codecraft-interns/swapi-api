((window, document, undefined) => {
  window.onload = function () {
    let index = 0;
    let currentCategory = "people";
    const firstValue = document.getElementById("first-value");
    const secondValue = document.getElementById("second-value");
    const thirdValue = document.getElementById("third-value");
    const fourthValue = document.getElementById("fourth-value");

    const firstAttribute = document.getElementById("first-attribute");
    const secondAttribute = document.getElementById("second-attribute");
    const thirdAttribute = document.getElementById("third-attribute");
    const fourthAttribute = document.getElementById("fourth-attribute");

    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");

    const peopleCategory = document.getElementById("people-category");
    const planetCategory = document.getElementById("planet-category");
    const spaceCategory = document.getElementById("space-category");
    const speciesCategory = document.getElementById("species-category");

    const swapiAPI = (category, index = 1) =>
      `http://localhost:3000/${category}/${index}`;
     
    function getRecord(category, index = 1) {
    return fetch(swapiAPI(category, index)).then((data) => data.json());
       
    }

    const keyValueMap = {
      people: [
        { key: "name", value: "Name" },
        { key: "height", value: "Height" },
        { key: "gender", value: "Gender" },
        { key: "skin_color", value: "Skin color" },
      ],
      planets: [
        { key: "name", value: "Name" },
        { key: "diameter", value: "Diameter" },
        { key: "climate", value: "Climate" },
        { key: "gravity", value: "Gravity" },
      ],
      space: [
        { key: "name", value: "Name" },
        { key: "model", value: "Model" },
        { key: "crew", value: "Crew" },
        { key: "passenger", value: "Passenger" },
      ],
      species: [
        { key: "name", value: "Name" },
        { key: "average_height", value: "Height" },
        { key: "classification", value: "Classification" },
        { key: "designation", value: "Designation" },
      ],
    };

    const attributeRefs = [
      {
        valueRef: firstValue,
        attributeRef: firstAttribute,
      },
      {
        valueRef: secondValue,
        attributeRef: secondAttribute,
      },
      {
        valueRef: thirdValue,
        attributeRef: thirdAttribute,
      },
      {
        valueRef: fourthValue,
        attributeRef: fourthAttribute,
      },
    ];

    

    function renderUI(data, currentCategory) {
      const keyValueMapByCategory = keyValueMap[currentCategory];
      keyValueMapByCategory.forEach((entry, index) => {
        const currentAttribute = attributeRefs[index];
        const { key, value } = entry;
        currentAttribute.attributeRef.innerHTML =value;
        currentAttribute.valueRef.innerHTML= data[key];
      });
    }

    async function updateNextRecord() {
      const data = await getRecord(currentCategory, ++index);
      if(data["name"]==undefined){
        nextBtn.disabled=true;
        --index;
      }
      else
      {
      renderUI(data,currentCategory);
      }
      
    }

    async function updatePreviousRecord() {
      if (index <= 1) {
        let index = 1;
      } else {
        nextBtn.disabled=false;
        const data = await getRecord(currentCategory, --index);
        renderUI(data, currentCategory);
      }
    }

    function initializeCategory(categoryName) {
      currentCategory = categoryName;
      index = 0;
      updateNextRecord();
    }
    //Button's  Event Listeners
    nextBtn.addEventListener(
      "click",
      function (e) {
        updateNextRecord();
      },
      false
    );

    prevBtn.addEventListener(
      "click",
      function (e) {
        updatePreviousRecord();
      },
      false
    );

    //CATEGORY
    peopleCategory.addEventListener(
      "click",
      function (e) {
        initializeCategory(e.target.value);
      },
      false
    );

    planetCategory.addEventListener(
      "click",
      function (e) {
        initializeCategory(e.target.value);
      },
      false
    );

    spaceCategory.addEventListener(
      "click",
      function (e) {
        initializeCategory(e.target.value);
      },
      false
    );

    speciesCategory.addEventListener(
      "click",
      function (e) {
        initializeCategory(e.target.value);
      },
      false
    );

    function init() {
      initializeCategory(currentCategory);
    }

    init();
  };
})(window, document, undefined);
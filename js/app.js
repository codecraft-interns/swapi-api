((window, document, undefined) => {
  window.onload = function () {
    let index = 0;
    let currentCategory = "people";
    const firstLabel = document.getElementById("first-label");
    const secondLabel = document.getElementById("second-label");
    const thirdLabel = document.getElementById("third-label");
    const fourthLabel = document.getElementById("fourth-label");

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
        { key: "name", label: "Name" },
        { key: "height", label: "Height" },
        { key: "gender", label: "Gender" },
        { key: "skin_color", label: "Skin color" },
      ],
      planets: [
        { key: "name", label: "Name" },
        { key: "diameter", label: "Diameter" },
        { key: "climate", label: "Climate" },
        { key: "gravity", label: "Gravity" },
      ],
      space: [
        { key: "name", label: "Name" },
        { key: "model", label: "Model" },
        { key: "crew", label: "Crew" },
        { key: "passenger", label: "Passenger" },
      ],
      species: [
        { key: "name", label: "Name" },
        { key: "average_height", label: "Height" },
        { key: "classification", label: "Classification" },
        { key: "designation", label: "Designation" },
      ],
    };

    const attributeRefs = [
      {
        labelRef: firstLabel,
        valueRef: firstAttribute,
      },
      {
        labelRef: secondLabel,
        valueRef: secondAttribute,
      },
      {
        labelRef: thirdLabel,
        valueRef: thirdAttribute,
      },
      {
        labelRef: fourthLabel,
        valueRef: fourthAttribute,
      },
    ];

    function renderUI(data, currentCategory) {
      const keyValueMapByCategory = keyValueMap[currentCategory];

      keyValueMapByCategory.forEach((entry, index) => {
        const currentAttribute = attributeRefs[index];
        const { key, label } = entry;
        currentAttribute.valueRef.innerHTML = label;
        currentAttribute.labelRef.innerHTML = data[key];
      });
    }

    async function updateNextRecord() {
      const data = await getRecord(currentCategory, ++index);
      if (data["name"] != undefined) {
        renderUI(data, currentCategory);
      } else {
        nextBtn.disabled = true;
        --index;
      }
    }
    async function updatePreviousRecord() {
      if (index <= 1) {
        let index = 1;
      } else {
        nextBtn.disabled = false;
        const data = await getRecord(currentCategory, --index);
        renderUI(data, currentCategory);
      }
    }

    function initializeCategory(catgeoryName) {
      currentCategory = catgeoryName;
      index = 0;
      updateNextRecord();
    }

    /* attach event listers*/
    //buttons
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

    //categories
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

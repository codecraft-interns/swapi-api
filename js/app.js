((window, document, undefined) => {
  window.onload = function () {
    let index = 0;
    let currentCategory = "people";
    const nextBtn = document.getElementById("nextbttn-status");
    const prevBtn = document.getElementById("prevbttn-status");
    var inputDetails = document.getElementById('mainview__box-content')


    const swapiAPI = (category, index = 1) =>
      `http://localhost:3000/${category}/${index}`;

    function getRecord(category, index = 1) {
      return fetch(swapiAPI(category, index)).then((data) =>  data.json())
    }
    

    const keyValueMap = {
      people:['name','height','skin_color','gender'],
      planets:['name','diameter',"climate","gravity"],
      starships:[ "name","model","crew","passengers"],
      species:[ "name","average_height", "classification","designation"]
    };

    function displayClean() {
      inputDetails.innerHTML = "";
    }

    function renderUI(data, currentCategory) {
        displayClean();
        const keyValueMapByCategory = keyValueMap[currentCategory];
        keyValueMapByCategory.forEach((entry, index) => {
        var detailtag = document.createElement('div')
        var propertytag = document.createElement('div');
        propertytag.className = "style"
        propertytag.innerHTML = `${entry}`.replaceAll('_',' ').toUpperCase();
        detailtag.innerHTML = data[entry];
        inputDetails.appendChild(propertytag);
        inputDetails.appendChild(detailtag)
      });
   
    }

    async function updateNextRecord() {
      const data = await getRecord(currentCategory, ++index);
      if (data["name"] == undefined) {
        nextBtn.disabled = true;
        --index;
      }
      else {
        prevBtn.disabled = false;
        renderUI(data, currentCategory);
      }
    }
    async function updatePreviousRecord() {
      if (index <= 1) {
        let index = 1;
        prevBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
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
    function targetButton(e) {
      const callUpdate = e.target.innerHTML == '&lt;&lt;PREVIOUS' ? updatePreviousRecord() : updateNextRecord();
    }
    const buttonEvent = document.querySelector('#button');
    buttonEvent.addEventListener('click', targetButton)

    //CATEGORY Selections Event listener
    function targetSelect(e) {
      initializeCategory(e.target.value)
    }

    const selectionEvent = document.querySelector('#selection-id');
    selectionEvent.addEventListener('click', targetSelect)


    function init() {
      initializeCategory(currentCategory);
    }

    init();
  };
})(window, document, undefined);

((window, document, undefined) =>{
  window.onload=function(){
   let index = 0;
   let currentCategory = 'people';
   /*ids of corresponding values*/
   let first_attribute = document.getElementById("first-attribute");
   let  second_attribute = document.getElementById("second-attribute");
   let  third_attribute = document.getElementById("third-attribute");
   let fourth_attribute = document.getElementById("fourth-attribute");
   let fifth_attribute = document.getElementById("fifth-attribute");
   let sixth_attribute = document.getElementById("sixth-attribute");
   /*previous and next button*/
   let nextBtn = document.getElementById("nextbtn");
   let prevBtn = document.getElementById("prevbtn");
   /*radio buttons*/
   let peopleRadio=document.getElementById("people");
   let planetsRadio=document.getElementById("planets");
   let spaceshipRadio=document.getElementById("spaceships");
   let speciesRadio=document.getElementById("Species");
   /*ids for corresponding labels*/
   let first_label= document.getElementById("first-label");
   let second_label= document.getElementById("second-label");
   let third_label= document.getElementById("third-label");
   let fourth_label= document.getElementById("fourth-label");
   let fifth_label= document.getElementById("fifth-label");
   let sixth_label= document.getElementById("sixth-label");

   const swapiApi = (index = 1,category) => `http://localhost:3000/${category}/${index}/?format=json`;


   function getRecord(category,index=1){
       return fetch(swapiApi(index,category)).then(data=>data.json());
   }

   const keyValueMap={
       people:[{key:'name',label:'name:'},
       {key:'height',label:'height:'},
       {key:'hair_color',label:'hair color:'},
       {key:'skin_color',label:'skin color:'},
       {key:'birth_year',label:'birth year:'},
       {key:'gender',label:'gender:'}
       ],
       planets:[{key:'name',label:'name:'},
       {key:'rotation_period',label:'rotation period:'},
       {key:'orbital_period',label:'orbital period:'},
       {key:'diameter',label:'diameter:'},
       {key:'climate',label:'climate:'},
       {key:'gravity',label:'gravity:'}
       ],
       starships:[{key:'name',label:'name:'},
       {key:'model',label:'model:'},
       {key:'manufacturer',label:'manufacturer:'},
       {key:'length',label:'length:'},
       {key:'crew',label:'crew:'},
       {key:'passengers',label:'passengers:'}
       ],
       species:[{key:'name',label:'name:'},
       {key:'classification',label:'classification:'},
       {key:'designation',label:'designation:'},
       {key:'average_height',label:'average_height:'},
       {key:'skin_colors',label:'skin_colors:'},
       {key:'hair_colors',label:'hair_colors:'}
       ]
   }

   const attributeRefs=[
       { labelref:first_label, valueref:first_attribute },
       { labelref:second_label, valueref:second_attribute },
       { labelref:third_label, valueref:third_attribute },
       { labelref:fourth_label, valueref:fourth_attribute },
       { labelref:fifth_label, valueref:fifth_attribute },
       { labelref:sixth_label, valueref:sixth_attribute }
   ];

   function renderUI(data,currentCategory){
       const keyValueMapByCategory = keyValueMap[currentCategory];
      
       keyValueMapByCategory.forEach((entry, index) => {
       const currentAttribute = attributeRefs[index];
       
       const {key,label} = entry;
       currentAttribute.labelref.innerText = label;
       
       currentAttribute.valueref.innerText = data[key];
     });
   }
   async function updateNextRecord() {
       const data = await getRecord(currentCategory, ++index);
       renderUI(data, currentCategory);
       updatePrevBtnStatus();
     }
 
   async function updatePreviousRecord() {
       const data = await getRecord(currentCategory, --index);
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


   nextBtn.addEventListener('click', function (e) {
       updateNextRecord();
     }, false)
 
 
     prevBtn.addEventListener('click', function (e) {
       updatePreviousRecord();
     }, false)

   
   //people updation on click
   peopleRadio.addEventListener('click',function(e){
      initializeCategory(e.target.value) 
      
   },false)

   planetsRadio.addEventListener('click',function(e){
       initializeCategory(e.target.value)
   },false)

   spaceshipRadio.addEventListener('click',function(e){
       initializeCategory(e.target.value)
    },false)

   //  species updation on click
   speciesRadio.addEventListener('click',function(e){
       initializeCategory(e.target.value)
         
   },false)

   function init(){
     debugger
       initializeCategory(currentCategory);
   }

   init();

  }
})(window, document);    

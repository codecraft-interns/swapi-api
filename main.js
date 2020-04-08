((window, document, undefined) =>{
    let index = 0;

    /*ids of corresponding values*/

    let Name = document.getElementById("name");
    let  Height = document.getElementById("Height");
    let  HairColor = document.getElementById("Hair-Color");
    let SkinColor = document.getElementById("Skin-Color");
    let BirthYear = document.getElementById("Birth-Year");
    let Gender = document.getElementById("Gender");

    /*previous and next button*/

    let nextBtn = document.getElementById("nextbtn");
    let prevBtn = document.getElementById("prevbtn");
    
    /*radio buttons*/

    let peopleRadio=document.getElementById("people");
    // let planetsRadio=document.getElementById("planets");
    // let spaceshipRadio=document.getElementById("spaceships");
    // let speciesRadio=document.getElementById("Species");

    /*ids for corresponding labels*/

    let lbl_name= document.getElementById("lbl-name");
    let lbl_height= document.getElementById("lbl-Height");
    let lbl_Hair_Color= document.getElementById("lbl-Hair-Color");
    let lbl_Skin_Color= document.getElementById("lbl-Skin-Color");
    let lbl_Birth_Year= document.getElementById("lbl-Birth-Year");
    let lbl_Gender= document.getElementById("lbl-Gender");

    const swapiApi = (index = 1,category) => `https://swapi.co/api/${category}/${index}/?format=json`;
    
    // debugger
    function value(name, height, hair_color, skin_color, birth_year, gender){
        Name.innerText = name;
        Height.innerText = height;
        HairColor.innerText = hair_color;
        SkinColor .innerText= skin_color; 
        BirthYear.innerText = birth_year;
        Gender.innerText = gender;
    }


    function label_updation(labels){
        lbl_name.innerHTML=labels[0];
        lbl_height.innerHTML=labels[1];
        lbl_Hair_Color.innerHTML=labels[2];
        lbl_Skin_Color.innerHTML=labels[3];
        lbl_Birth_Year.innerHTML=labels[4];
        lbl_Gender.innerHTML=labels[5];
    }

    function getData(index = 1,category){
        return fetch(swapiApi(index,category)).then(data => data.json());
    }
  
    
    
    async function updateData(index,category,labels) {
        const{name, height, hair_color, skin_color, birth_year, gender} = await getData(index,category);
        label_updation(labels);
        value(name, height, hair_color, skin_color, birth_year, gender);  
        
    }
    //action on radio button
    peopleRadio.addEventListener('click',function(e){
        index=0;
        let labels=["Name:","Height:","Hair-Color:","Skin-Color:","Birth-Year:","Gender:"];
       
        
        updateData(++index,"person",labels);
        prevBtn.addEventListener('click', function(e){
            if(index>1){
            updateData(--index,"person",labels);
            }
        },false)
        
        nextBtn.addEventListener('click', function(e){
            updateData(++index,"person",labels);
        },false)
    },false)
   
    //planets updation on click
    // planetsRadio.addEventListener('click',function(e){
    //     index=0;
    // let labels=["Name:","rotation_period:","orbital_period:","diameter:","climate:","gravity:"];
    //     // lblheight.innerHTML="rotation_period:";
    //     updateData(++index,"planets",labels);
      
    //     nextBtn.addEventListener('click', function(e){
    //         updateData(++index,"planets",labels);
    //     },false)
    //     prevBtn.addEventListener('click', function(e){
    //         if(index>1){
    //             updateData(--index,"planets",labels);
    //         }
    //     },false)
    // },false)

    //spaceship updation on click
    // spaceshipRadio.addEventListener('click',function(e){
    //      index=0;
    //      let labels=["Name:","model:","manufacturer:","cost_in_credits:","length:","max_atmosphering_speed:"];
    //     
    //     updateData(++index,"starships",labels);
      
    //     nextBtn.addEventListener('click', function(e){
    //         updateData(++index,"starships",labels);
    //     },false)
    //     prevBtn.addEventListener('click', function(e){
    //         if(index>1){
    //             updateData(--index,"starships",labels);
    //         }
    //     },false)

    // },false)

     //species updation on click
    // speciesRadio.addEventListener('click',function(e){
    //      index=0;
    //      let labels=["Name:","classification:","designation:","average_height:","skin_colors:","hair_colors:"];
    //     
    //     updateData(++index,"species",labels);
      
    //     nextBtn.addEventListener('click', function(e){
    //         updateData(++index,"species",labels);
    //     },false)
    //     prevBtn.addEventListener('click', function(e){
    //         if(index>1){
    //             updateData(--index,"species",labels);
    //         }
    //     },false)
        
       
    // },false)
})(window, document);    
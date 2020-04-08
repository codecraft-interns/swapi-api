(()=>{


  let index = 0;
  
  const one = document.getElementById('one');
  const two = document.getElementById('two');
  const three = document.getElementById('three');
  const four = document.getElementById('four');
  const five = document.getElementById('five');
  const six = document.getElementById('six');

  //const rbtn = document.getElementsById('people');
  //console.log(rbtn);
  // function checkradio()
  // {
  //   console.log(rbtn);
  // }
  
  // rbtn.addEventListener('click', function(e)
  // {
  //   checkradio(rbtn);
  // }, false)
  
  
  const nextPersonBtn = document.getElementById('next');
  const prevbtn = document.getElementById('previous');

  const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
  
  function getPerson(index = 1) {
    return fetch(swapiPeopleAPI(index)).then(data => data.json());
  }
  
  function nextdetails()
  {
    return ++index;
  }

  function prevdetails()
  {
    return --index;
  }
  async function details() {
    const Name = await getPerson(index);
   one.innerText = `${Name.name}`;
   two.innerText =  `${Name.height}`;
   three.innerText = `${Name.hair_color}`;
   four.innerText = `${Name.skin_color}`;
   five.innerText = `${Name.birth_year}`;
   six.innerText = `${Name.gender}`;
   console.log(Name);
  }
  
  nextPersonBtn.addEventListener('click', function(e) {
    
    details(nextdetails());
  }, false)

  prevbtn.addEventListener('click', function(e){
    details(prevdetails());
  }, false)
  
  //details(nextdetails());

  })();
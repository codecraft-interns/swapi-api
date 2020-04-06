(() => {
    let index = 0;

    const peronName = document.getElementById('next-people__name');
    const peronHeight = document.getElementById('next-people__height');
    const peronHairColor = document.getElementById('next-people__hair');
    const peronSkinColor = document.getElementById('next-people__skin');
    const peronBirthYear = document.getElementById('next-people__birth');
    const peronGender = document.getElementById('next-people__gender');

    const nextPersonBtn = document.getElementById('next');

    const swapiPeopleAPI1 = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    const swapiPeopleAPI2 = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    const swapiPeopleAPI3 = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    const swapiPeopleAPI4 = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    const swapiPeopleAPI5 = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    const swapiPeopleAPI6 = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;
    console.log('promise executed successfully1');

    function getPerson1(index = 1) {
        return fetch(swapiPeopleAPI1(index)).then(data => data.json());

    }

    function getPerson2(index = 1) {
        return fetch(swapiPeopleAPI2(index)).then(data => data.json());

    }

    function getPerson3(index = 1) {
        return fetch(swapiPeopleAPI3(index)).then(data => data.json());

    }

    function getPerson4(index = 1) {
        return fetch(swapiPeopleAPI4(index)).then(data => data.json());

    }

    function getPerson5(index = 1) {
        return fetch(swapiPeopleAPI5(index)).then(data => data.json());

    }

    function getPerson6(index = 1) {
        return fetch(swapiPeopleAPI6(index)).then(data => data.json());

    }
    console.log('promise executed successfully2');
    console.log(getPerson1())
    async function updateNextPerson() {
        const { name } = await getPerson1(++index);
        const { height } = await getPerson2(++index);
        const { hair_color } = await getPerson3(++index);
        const { skin_color } = await getPerson4(++index);
        const { birth_year } = await getPerson4(++index);
        const { gender } = await getPerson4(++index);

        peronName.innerText = name;
        peronHeight.innerText = height;
        peronHairColor.innerText = hair_color;
        peronSkinColor.innerText = skin_color;
        peronBirthYear.innerText = birth_year;
        peronGender.innerText = gender;

    }
    console.log('promise executed successfully3');
    nextPersonBtn.addEventListener('click', function(e) {
        updateNextPerson();

    }, false)
    console.log('promise executed successfully4');
    updateNextPerson();
})();
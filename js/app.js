(function(window, document, undefined) {
    let index = 0;

    const peronName = document.getElementById('people-name');
    const peronHeight = document.getElementById('people-height');
    const peronHairColor = document.getElementById('people-hair');
    const peronSkinColor = document.getElementById('people-skin');
    const peronBirthYear = document.getElementById('people-birth');
    const peronGender = document.getElementById('people-gender');

    const nextPersonBtn = document.getElementById('next-btn');
    const previousPersonBtn = document.getElementById('prev-btn');

    const swapiPeopleAPI = (index = 1) => `https://swapi.co/api/people/${index}/?format=json`;

    function getPerson(index = 1) {
        return fetch(swapiPeopleAPI(index)).then(data => data.json());

    }

    console.log(getPerson())
    async function updateNextPerson() {
        const { name, height, hair_color, skin_color, birth_year, gender } = await getPerson(++index);
        peronName.innerText = name;
        peronHeight.innerText = height;
        peronHairColor.innerText = hair_color;
        peronSkinColor.innerText = skin_color;
        peronBirthYear.innerText = birth_year;
        peronGender.innerText = gender;

    }
    async function updatePreviousPerson() {
        const { name, height, hair_color, skin_color, birth_year, gender } = await getPerson(--index);
        peronName.innerText = name;
        peronHeight.innerText = height;
        peronHairColor.innerText = hair_color;
        peronSkinColor.innerText = skin_color;
        peronBirthYear.innerText = birth_year;
        peronGender.innerText = gender;

    }
    nextPersonBtn.addEventListener('click', function(e) {
        updateNextPerson();

    }, false)
    previousPersonBtn.addEventListener('click', function(e) {
        updatePreviousPerson();

    }, false)
    updateNextPerson();
    updatePreviousPerson();
})(window, document, undefined);
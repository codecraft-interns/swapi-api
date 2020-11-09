((window, document, undefined) => {
    window.onload = function() {
        let index = 0;
        let currentCategory = 'people';
        const firstLabel = document.getElementById('first-label');
        const secondLabel = document.getElementById('second-label');
        const thirdLabel = document.getElementById('third-label');
        const fourthLabel = document.getElementById('fourth-label');
        const fifththLabel = document.getElementById('fifth-label');
        const sixthLabel = document.getElementById('sixth-label');

        const firstAttribute = document.getElementById('first-attribute');
        const secondAttribute = document.getElementById('second-attribute');
        const thirdAttribute = document.getElementById('third-attribute');
        const fourthAttribute = document.getElementById('fourth-attribute');
        const fifththAttribute = document.getElementById('fifth-attribute');
        const sixthAttribute = document.getElementById('sixth-attribute');

        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');

        const swapiAPI = (category, index = 1) => ` http://localhost:3000/${category}/${index}/?format=json`;


        getRecord = (category, index = 1) => {
            return fetch(swapiAPI(category, index)).then(data => data.json());
        }

        const keyValueMap = {
            people: [
                { key: 'name', label: 'Name' },
                { key: 'height', label: 'Height' },
                { key: 'gender', label: 'Gender' },
                { key: 'skin_color', label: 'Skin color' },
                { key: 'hair_color', label: 'Hair color' },
                { key: 'birth_year', label: 'Birth Year' }

            ],
            planets: [
                { key: 'name', label: 'Name' },
                { key: 'diameter', label: 'Diameter' },
                { key: 'climate', label: 'Climate' },
                { key: 'gravity', label: 'Gravity' },
                { key: 'rotation_period', label: 'Rotation Period' },
                { key: 'orbital_period', label: 'Orbital Period' }
            ],
            spaceships: [
                { key: 'name', label: 'Name' },
                { key: 'model', label: 'Model' },
                { key: 'MGLT', label: 'MGLT' },
                { key: 'cargoCapacity', label: 'Capacity' },
                { key: 'consumables', label: 'Consumables' },
                { key: 'costInCredits', label: 'Cost In Credits' }
            ],
            species: [
                { key: 'name', label: 'Name' },
                { key: 'average_height', label: 'Height' },
                { key: 'classification', label: 'Classification' },
                { key: 'designation', label: 'Designation' },
                { key: 'skin_colors', label: 'Skin Color' },
                { key: 'hair_colors', label: 'Hair Color' }
            ],
        };

        const attributeRefs = [{
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
                labelRef: fifththLabel,
                valueRef: fifththAttribute
            },
            {
                labelRef: sixthLabel,
                valueRef: sixthAttribute
            }
        ];

        renderUI = (data, currentCategory) => {
            const keyValueMapByCategory = keyValueMap[currentCategory];
            keyValueMapByCategory.forEach((entry, index) => {
                const currentAttribute = attributeRefs[index];
                const { key, label } = entry;
                currentAttribute.labelRef.innerText = label;
                currentAttribute.valueRef.innerText = data[key];
            });
        }

        updateRecord = async(value) => {
            if (nextBtn === value) {
                const data = await getRecord(currentCategory, ++index);
                renderUI(data, currentCategory);
                updatePrevBtnStatus();
            } else {
                const data = await getRecord(currentCategory, --index);
                renderUI(data, currentCategory)
                updatePrevBtnStatus();
            }
        }

        initializeCategory = (catgeoryName) => {
            currentCategory = catgeoryName;
            index = 0;
            updateRecord(nextBtn);
            updatePrevBtnStatus();
        }

        updatePrevBtnStatus = () => {
            index <= 1 ? prevBtn.disabled = true : prevBtn.disabled = false;
        }

        /* attach event listers*/
        //buttons
        nextBtn.addEventListener('click', (e) => {
            updateRecord(nextBtn);
        }, false)

        prevBtn.addEventListener('click', (e) => {
            updateRecord(prevBtn);
        }, false)

        //categories
        document.querySelectorAll('.content__categories_selection').forEach(selectCategory => {
            selectCategory.addEventListener('click', (e) => {
                initializeCategory(e.target.value);
            }, false)
        })

        init = () => {
            initializeCategory(currentCategory);
        }

        init();
    }
})(window, document, undefined);
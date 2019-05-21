const inputNameUser = document.querySelector('input[type="text"]');
const telephoneUser = document.querySelector('input[type="tel"]');
const selectRegions = document.getElementById('regions');
const selectCities = document.getElementById('cities');
const checkboxPrefer = document.querySelector('input[type="checkbox"]');
const citiesOfRegion = {
    'center': ['', 'Cherkasy', 'Dnipro', 'Kropyvnytskyi', 'Poltava', 'Vinnytsia', 'Zhytomyr', 'Not in the list'],
    'North':['', 'Chernihiv', 'Sumy', 'Not in the list'],
    'East': ['', 'Donetsk', 'Kharkiv', 'Luhansk', 'Not in the list'],
    'South':['', 'Kherson', 'Mykolaiv', 'Odesa', 'Zaporizhzhia', 'Not in the list'],
    'West': ['', 'Chernivtsi', 'Ivano-Frankivsk', 'Khmelnytskyi', 'Lutsk', 'Lviv', 'Rivne', 'Ternopil', 'Uzhhorod', 'Not in the list']
}

function checkInputName() {

    this.addEventListener('blur', function () {
        const valueThis = this.value.match(/\S+/g);

        if (valueThis) {
            const lengthValue = valueThis.length;
            if (lengthValue < 2 || lengthValue > 3) {
                this.classList.remove('backgroundGreen');
                this.classList.add('backgroundRed');

            } else if (lengthValue > 1 && lengthValue < 4) {
                this.classList.remove('backgroundRed');
                this.classList.add('backgroundGreen');
            }
        } else {
            this.classList.remove('backgroundGreen');
            this.classList.add('backgroundRed');
        }


    })

}

function checkInputTelephone() {
    this.addEventListener('blur', function () {
        const valueThis =/^\+?3?8?(0\d{9})$/.test(this.value);

        if (valueThis) {

                this.classList.remove('backgroundRed');
                this.classList.add('backgroundGreen');

        } else {
            this.classList.remove('backgroundGreen');
            this.classList.add('backgroundRed');
        }


    })
}

function showSelectCities() {


    while (selectCities.hasChildNodes()) {
        selectCities.removeChild(selectCities.firstChild);
    }
    const valueSelectRegions = this.value;
    const citiesRegion = citiesOfRegion[valueSelectRegions];
    if(citiesRegion) {

        citiesRegion.forEach(city => {

            const tegSelect = document.createElement('option');

            tegSelect.textContent = city;
            tegSelect.setAttribute('value', city);
            selectCities.append(tegSelect);

        })
    }

}

function hideDomElements() {
     telephoneUser.classList.toggle('hideElement');
    selectRegions.classList.toggle('hideElement');
   selectCities.classList.toggle('hideElement');
}

inputNameUser.addEventListener('focus', checkInputName);
telephoneUser.addEventListener('focus', checkInputTelephone);
selectRegions.addEventListener('click', showSelectCities);
checkboxPrefer.addEventListener('click', hideDomElements);
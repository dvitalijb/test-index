const inputNameUser = document.querySelector('input[type="text"]');
const telephoneUser = document.querySelector('input[type="tel"]');
const selectRegions = document.getElementById('regions');


function checkInputName() {

    this.addEventListener('blur', function () {
        const valueThis = this.value.match(/\S+/g);

        console.log(this)
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
    const citiesOfRegion = {
        'center': ['Cherkasy', 'Dnipro', 'Kropyvnytskyi', 'Poltava', 'Vinnytsia', 'Zhytomyr'],
        'North':['Chernihiv', 'Sumy'],
        'East': ['Donetsk', 'Kharkiv', 'Luhansk'],
        'South':['Kherson', 'Mykolaiv', 'Odesa', 'Zaporizhzhia'],
        'West': ['Chernivtsi', 'Ivano-Frankivsk', 'Khmelnytskyi', 'Lutsk', 'Lviv', 'Rivne', 'Ternopil', 'Uzhhorod']
    }
    const valueSelectRegions = this.value;
    const citiesRegion = citiesOfRegion[valueSelectRegions];
    if(citiesRegion) {
        console.log(citiesRegion)
    }

}

inputNameUser.addEventListener('focus', checkInputName);
telephoneUser.addEventListener('focus', checkInputTelephone);
selectRegions.addEventListener('click', showSelectCities);
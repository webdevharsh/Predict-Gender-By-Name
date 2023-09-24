let nameInput = document.querySelector('.container .user-input-box input');
let searchBtn = document.querySelector('.container .user-input-box .search-btn');

let nameTxt = document.querySelector('.container .result-box .name');
let genderLogo = document.querySelector('.container .result-box .gender-logo');
let gender = document.querySelector('.container .result-box .gender');
let probability = document.querySelector('.container .result-box .probability');
let resultBox = document.querySelector('.container .result-box');

let predictGender = (name) => {
        let url = 'https://api.genderize.io?name=';
        fetch(url + name).then(res => res.json()).then(data => {
                nameTxt.innerHTML = data.name;
                gender.innerHTML = data.gender;
                probability.innerHTML = `Probability: ${data.probability}`;
                if (data.gender == 'female') {
                        resultBox.style.background = '#F576AB';
                        genderLogo.innerHTML = `<ion-icon name="woman-outline"></ion-icon>`;
                        genderLogo.style.color = '#F576AB';
                } else {
                        resultBox.style.background = '#5BC4F3';
                        genderLogo.innerHTML = `<ion-icon name="man-outline"></ion-icon>`;
                        genderLogo.style.color = '#5BC4F3';
                }
        })
        resultBox.style.display = 'block';
}

searchBtn.addEventListener('click', () => {
        if (nameInput.value.length > 0 && /^[A-Za-z]+$/.test(nameInput.value)) {
                predictGender(nameInput.value);
        }
})

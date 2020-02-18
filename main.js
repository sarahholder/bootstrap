const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigrator: true,
        socialStatus: 'looking for friends',
        diet: 'bubbles',
        age: 12, 
        featherNum: 0,
        name: 'Regina',
        imgUrl: 'https://toppng.com/uploads/preview/blue-rubber-duck-11563236196ld4tpdeogb.png',
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'female',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'frogs',
        age: 34, 
        featherNum: 0,
        name: 'Lois',
        imgUrl: 'https://p7.hiclipart.com/preview/107/467/622/domestic-goose-duck-feather-big-white-goose-farm.jpg'
    },
    {
        color: 'blue',
        isRubber: false,
        gender: 'female',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47, 
        featherNum: 0,
        name: 'BluBri',
        imgUrl: 'https://images.fineartamerica.com/images-medium-large/blue-winged-teal-anas-discors-female-scott-leslie.jpg',
    },
    {
        color: 'yellow',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'grass only',
        age: 50, 
        featherNum: 0,
        name: 'Sunshine',
        imgUrl: 'https://i.pinimg.com/originals/9d/bd/20/9dbd20a1dd70777335479fa4118ead27.jpg',
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to rule',
        diet: 'married',
        age: 30, 
        featherNum: 0,
        name: 'Don',
        imgUrl: 'https://shop.r10s.jp/stab-blue/cabinet/05851142/imgrc0092164782.jpg',
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'donuts',
        age: 25, 
        featherNum: 0,
        name: 'Ted',
        imgUrl: 'https://us.123rf.com/450wm/gumpapa/gumpapa1510/gumpapa151000033/47332942-white-duck-stand-next-to-a-pond-or-lake-with-bokeh-background.jpg?ver=6',
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'unsure',
        diet: 'vegan',
        age: 47, 
        featherNum: 0,
        name: 'Doc',
        imgUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1012/10059/Surgeon-Blue-Rubber-Duck-Adline-3__58755.1568649695.jpg?c=2&imbypass=on',
    },
    {
        color: 'yellow',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'taken',
        diet: 'birdseed',
        age: 47, 
        featherNum: 0,
        name: 'Rick',
        imgUrl: 'https://i.pinimg.com/originals/40/94/f3/4094f3f5cefefc041a47b766a97f3fff.jpg',
    }
];



const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;  
};

const duckPrinter = (duckArr) => {
    let domString = '';
    for(let i=0; i < duckArr.length; i++){
    domString += `<div class="col-md-6 col-lg-4 card-separation">`;
    domString += `<div class="card">`;
    domString += `<img src=${duckArr[i].imgUrl} class="card-img-top" alt="...">`;
    domString +=    '<div class="card-body">';
    domString +=        `<h5 class="card-title">${duckArr[i].name}</h5>`;
    domString +=        `<p class="card-text">${duckArr[i].socialStatus}</p>`;
    domString +=        `<p class="card-text">${duckArr[i].diet}</p>`;
    domString +=    '</div>';
    domString += '</div>';     
    domString += '</div>';
    }

    printToDom('ponds', domString);
};
const choseColor = (e) =>{
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i=0; i<ducks.length; i++){
        if(ducks[i].color === buttonId){
            selectedDucks.push(ducks[i]);
        }
    }
    duckPrinter(selectedDucks);
};


const choseGender = (e) =>{
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i=0; i<ducks.length; i++){
        if(ducks[i].gender === buttonId){
            selectedDucks.push(ducks[i]);
        }
    }
    duckPrinter(selectedDucks);

};

const choseRubber = (e) =>{
    const selectedDucks = [];
    for(let i=0; i<ducks.length; i++){
        if(ducks[i].isRubber){
            selectedDucks.push(ducks[i]);
        }
    }
    duckPrinter(selectedDucks);
};

const events = () => {

document.getElementById('blue').addEventListener('click', choseColor);
document.getElementById('white').addEventListener('click', choseColor);
document.getElementById('yellow').addEventListener('click', choseColor);
document.getElementById('male').addEventListener('click', choseGender);
document.getElementById('female').addEventListener('click', choseGender);
document.getElementById('rubber').addEventListener('click', choseRubber);

};


const init = () => {
    duckPrinter(ducks);
    events();

};

init();





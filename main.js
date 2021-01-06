let opportunities = ['do something fun', 'thought it over again', 'I do not know' ];
const input = document.querySelector('input');
let h1 = document.querySelector('h1');

let div = document.createElement('div');
document.body.appendChild(div);

const btnAdd = document.getElementsByClassName("add")[0];
const btnReset = document.getElementsByClassName("reset")[0];
const btnAdvice = document.getElementsByClassName("showAdvice")[0];
const btnOptions = document.getElementsByClassName("showOptions")[0];

addElement = (e) =>{
    console.log('działa')
    e.preventDefault(); 
    opportunities.push(input.value);
    // alert('You added'+" - " + input.value)
    alert(`You added -  ${input.value}`)
    input.value = "";

// the If method can also be used

    // if(input.value.length > 0){
    //     opportunities.push(input.value);
    //     alert('You added'+" - " + input.value)
    // }
    // input.value = "";
};

resetList = (r) => {
    r.preventDefault();
        opportunities = [];
        div.textContent = "";
        alert('you have deleted all previously added items')
};

showAdvice = () => {
    const indexOpportunitie = Math.floor(Math.random()*opportunities.length);
    if(opportunities.length){     
        div.textContent = `${opportunities[indexOpportunitie]}`
    }
    else {
        alert('you have to add some values first to be able to display suggestions')
    }
};

showOptions = () => {
    if(opportunities.length > 0){
    alert(opportunities.join("---"))
    }
    else {
        alert('you have to add some values first to be able to display suggestions')
    }
};


btnAdd.addEventListener('click', addElement);
btnReset.addEventListener('click', resetList);
btnAdvice.addEventListener('click', showAdvice);
btnOptions.addEventListener('click', showOptions);



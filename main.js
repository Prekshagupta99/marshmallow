const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

btn.addEventListener('click', onSubmit);
function onSubmit(){
    if(nameInput ==' ' || emailInput == ' ' || phoneInput == ' '){
        document.querySelector('.container').style.backgroundColor='red';
    }else{
        document.querySelector('.container').style.backgroundColor='green';
    }
}



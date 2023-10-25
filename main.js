const btn = document.querySelector('.btn');

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

// btn.addEventListener('click',function(){
//     document.querySelector('.container').style.backgroundColor(randColor);
//     //document.querySelector('body').classList.add('bg-change');
// });

btn.addEventListener('click', setBg);
setBg();


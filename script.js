const button = document.querySelectorAll('button');
const body = document.querySelector('body');
console.log(button);
button.forEach((btn) => {
    btn.addEventListener("click",function (e){
        console.log(e.target.className);
        if(e.target.className === 'btn-white'){
            body.style.backgroundColor = 'white'
        }
        else if(e.target.className === 'btn-blue'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.className === 'btn-green'){
            body.style.backgroundColor = 'green'
        }
        else if(e.target.className === 'btn-yellow'){
            body.style.backgroundColor = 'yellow'
        }
        else{
            return
        }
    })
})
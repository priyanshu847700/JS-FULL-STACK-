const random=Math.floor(Math.random()*100+1);
console.log(random);

const usernum=document.querySelector('.guessfield')
const submit=document.querySelector('.submit')
const prev=document.querySelector('.prevgusses')
const remaining=document.querySelector('.remain')
const loworhi=document.querySelector('.loworhi')
const resultparas=document.querySelector('.resultparas')

const p=document.createElement('p')


let prevguess = []
let numguess = 1

let playgame = true;

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(usernum.value);
        console.log(guess);
        
        validation(guess);
    });
}


function validation(guess){
    if(isNaN(guess) || guess<0 || guess>100){
        alert("enter a valid number!!");
    }
    else{
        prevguess.push(guess)
        if(numguess>10){
            displayguess(guess)
            displaymessage(`game over. random number was ${random}`)
            endgame();
        }
        else{
            displayguess(guess)

            checkguess(guess)
        }
        
    }
}
function checkguess(guess){
    if(guess === random){
        displaymessage(`you guess it right`)
        endgame()
    }
    else if(guess < random){
        displaymessage(`your num is lower then random no.`)
    }
    else if(guess > random){
        displaymessage(`you is greater then random no.`)
    }

}


function displayguess(guess){
    usernum.value='';
    prev.innerHTML+=`${guess} `
    numguess++
    remaining.innerHTML=`${11-numguess}`


}
function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){

    usernum.innerHTML=""
    usernum.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h3 class="newgame">start a new game</h3>`
    resultparas.appendChild(p)
    playgame=false;
    newgame()
}
function newgame(){
    const newgame=document.querySelector('.newgame')
    newgame.addEventListener("click",(e)=>{
        const random=Math.floor(Math.random()*100+1);
        prev.innerHTML=""
        prevguess=[]
        numguess=1
        remaining.innerHTML=`${11-numguess}`
        usernum.removeAttribute('disabled')
        resultparas.removeChild(p)
        playgame=true;
    })
}

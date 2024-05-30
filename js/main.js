let randomNumber1 = document.querySelector('.randomNumber1')
let randomNumber2 = document.querySelector('.randomNumber2')
let randomNumber3 = document.querySelector('.randomNumber3')
let randomNumber4 = document.querySelector('.randomNumber4')
let randomNumber5 = document.querySelector('.randomNumber5')
let randomNumber6 = document.querySelector('.randomNumber6')
let randomNumber7 = document.querySelector('.randomNumber7')
let randomNumber8 = document.querySelector('.randomNumber8')
let randomNumber9 = document.querySelector('.randomNumber9')
let randomNumber10 = document.querySelector('.randomNumber10')
let geus = 0;
let password = '';
var delayInMilliseconds = 1000;
const btn = document.querySelector('.button');
btn.addEventListener('click', myFunction);
let tryouts = 0
function myFunction() {
    randomNumber1.textContent = Math.floor(Math.random() * 9999) + 1 
    randomNumber2.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber3.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber4.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber5.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber6.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber7.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber8.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber9.textContent = Math.floor(Math.random() * 9999) + 1;
    randomNumber10.textContent = Math.floor(Math.random() * 9999) + 1;
    console.log(randomNumber1)
    console.log(randomNumber2)
    console.log(randomNumber3)
    console.log(randomNumber4)
    console.log(randomNumber5)
    console.log(randomNumber6)
    console.log(randomNumber7)
    console.log(randomNumber8)
    console.log(randomNumber9)
    console.log(randomNumber10)
    geus = Math.floor(Math.random() * 10) + 1;


    setTimeout(function() {
        myfunction1()
      }, delayInMilliseconds);
    
}

function myfunction1() {
    if (geus = 1) {
        while (password !== randomNumber1) {
            password = prompt('gokjuist1')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 2) {
        while (password !== randomNumber2) {
            password = prompt('gokjuist2')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++

        }
    }
    else if (geus = 3) {
        while (password !== randomNumber3) {
            password = prompt('gokjuist3')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 4) {
        while (password !== randomNumber4) {
            password = prompt('gokjuist4')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 5) {
        while (password !== randomNumber5) {
            password = prompt('gokjuist5')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 6) {
        while (password !== randomNumber6) {
            password = prompt('gokjuist6')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 7) {
        while (password !== randomNumber7) {
            password = prompt('gokjuist7')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 8) {
        while (password !== randomNumber8) {
            password = prompt('gokjuist8')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 9) {
        while (password !== randomNumber9) {
            password = prompt('gokjuist9')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
    else if (geus = 10) {
        while (password !== randomNumber10) {
            password = prompt('gokjuist10')
            if(tryouts = 3){
                password == randomNumber1
            }
            tryouts++
        }
    }
}












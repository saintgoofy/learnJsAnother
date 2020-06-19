'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function bot (){
        let random = Math.floor(Math.random() * 100);
        console.log(random);
        return function start(){
            let num = prompt('Введите число от 1 до 100');
            console.log(typeof(num));
            if(num === null){
                return false;
            }else if(!isNumber(num)){
                confirm ('Введи число!');
                start();
            }else if(+num < random){
                alert('Загаданное число больше');
                start();
            }else if(+num > random){
                alert('Загаданное число меньше');
                start();
            }
        }
    }
let result = bot();
result();
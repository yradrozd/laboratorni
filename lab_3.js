//Завдання №1
document.write("Завдання 1", "<br \/>")
for (let i = 1; i <= 20; i++) {
    switch (true) {
      case (i % 3 === 0):
        document.write("Fizz", "<br \/>")
        break;
        case (i % 5 === 0):
        document.write("Buzz", "<br \/>")
        break;
        case (i % 3 === 0 && i % 5 === 0):
        document.write("FizzBuzz", "<br \/>")
        break;
      default:
        document.write(i, "<br \/>")
    }
  }
//Завдання №3
document.write("Завдання 3", "<br \/>")
var goods =["milk", "coffee","bread","cheese","cake","butter"];
var lastItem = goods[goods.length - 1];
document.write("Останній елемент :", lastItem,"<br \/>")
//Завдання №4
document.write("Завдання 4", "<br \/>")
var goods =["milk", "coffee","bread","cheese","cake","butter"];
document.write("Масив :", goods,"<br \/>")
var lastItem = goods.push("computer");
document.write("Оновлений масив :", goods,"<br \/>")
//Завдання №5
document.write("Завдання 5", "<br \/>")
document.write("Результат :", "<br \/>")
let styles = ["Джаз", "Блюз"];
document.write(styles,"<br \/>")
styles.push("Рок-н-ролл");
document.write(styles,"<br \/>")
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
document.write(styles,"<br \/>")
alert( styles.shift() );
document.write(styles,"<br \/>")
styles.unshift("Реп", "Реггі");
document.write(styles,"<br \/>")
//Завдання №6
document.write("Завдання 6", "<br \/>")
var arr = ["Яблуко", "Апельсин", "Груша", "Лимон"];
var random = Math.floor(Math.random() * arr.length);
document.write(arr[random], "<br \/>")
alert( arr[random] );
//Завдання №7
document.write("Завдання 7", "<br \/>")
var arr = [];
var check = true;
var sum = 0;
while(check){
    var number = prompt("Please, enter your number : ", 0);
    if(number === '') {
        check = false;
    } else if(number === null || isNaN(number)){
        check = false;
    } else {
        arr.push(Number(number));
    }
}
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
document.write(sum, "<br \/>")
alert(sum);
//Завдання №8
document.write("Завдання 8", "<br \/>")
function find(arr, value)
{
    for (var i = 0; i < arr.length; i++)
    {
        if ( value === arr[i] ) return i;
    }
    return -1;
}
var arr = ["test", 2, 1.5, false];
document.write("Масив :",arr, "<br \/>")
alert( find(arr, 2) );
document.write(find(arr, 2), "<br \/>")
alert( find(arr, true) );
document.write(find(arr, true), "<br \/>")
alert( find(arr, false) );
document.write(find(arr, false), "<br \/>")

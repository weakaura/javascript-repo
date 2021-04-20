// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

alert("Задание №1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (В консоле, дабы не мешаться алёртами)");

function isNatural(number) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

let currentNumber = 2;

while(currentNumber <= 100) {
    if(isNatural(currentNumber)) {
        console.log(currentNumber);
        currentNumber++;
    } 
    currentNumber++;
}



// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
alert("Задание №3. Корзина. Введите названия продуктов и их цену. Ввод пустой строки прервет цикл. Программа посчитает сумму вашей корзины")
let basket = [];
while(true) {
  	let item = prompt("Название: ");
		let value = +prompt("Цена: ");
  if (item == "" || value == "") {
  	break;
  } else {
		basket.push([item, value]);
  }
}
console.log(basket);
let count = basket.length;
let sum = 0;
function countBasketPrice(count) {
	for (i = 0; i < count; i++) {
			sum = sum + basket[i][1];
	}
return sum;
}
let prices = countBasketPrice(count);
alert("Сумма корзины равна: " + prices);
console.log(prices);


// // 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// // for(…){// здесь пусто}
alert("Задание №4");
for (i = 0; i <= 9; alert(i), i++) {

}
// // 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// // x
// // xx
// // xxx
// // xxxx
// // xxxxx
alert("Пирамидка в консоле");
let str = "";

for (let i = 1; i <= 20; i++) {
	console.log(str = str + "x")
}

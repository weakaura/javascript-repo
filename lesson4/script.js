// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
alert ("Задание №1");

let num = +prompt("Введите число от 0 до 999");
console.log(num);

function toDecay(num) {	

	let hundreds = (num - (num % 100)) / 100;

	let decades = ((num % 100) - ((num % 100) % 10)) / 10;

	let units = ((num % 100) % 10);
	
  if (num > 999) {
  	return console.log("Вы ввели неправильное число")
  } else { 
    return {
  	hundreds: hundreds,
    decades: decades,
    units: units,
    };
  }
}

let decay = toDecay(num);

for (key in decay) {
alert (key + ": " + decay[key])
}

console.log(decay)

// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
alert("Задание №2. Количество продуктов в корзине и её стоимость в консоли")
let apple = 10;
let orange = 25;
let banana = 15;

let basket = {
  amount: 0,
  price: 0,
  goods: [apple, orange, banana],
}

function basketAmount() {
  return basket.amount = basket.goods.length;
}

function basketPrice() {
  for (let i = 0; i < basket.goods.length; i++) {
   basket.price += basket.goods[i];
  }
  return basket.price;
}
console.log(basket);
console.log("Продуктов в корзине: " + basketAmount() + "\nСтоимость корзины: " + basketPrice());




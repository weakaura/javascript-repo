function init() {
    let body = document.getElementById("body")
    let chess = document.getElementById("chess")
    let row = document.createElement("div");
    row.className = "row";
    row.id = "row";
    chess.appendChild(row);
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

    function addRow() {

        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {
                for (let i = 0; i < 8; i++) {
                    if (i % 2 != 0) {
                        let bt = document.createElement("div");
                        row.appendChild(bt);
                        bt.className = "black-tile";
                        bt.innerHTML = letters[i] + numbers[j] + "";
                    } else {
                        let wt = document.createElement("div");
                        row.appendChild(wt);
                        wt.className = "white-tile";
                        wt.innerHTML = letters[i] + numbers[j] + "";
                    }
                }
            } else {
                for (let i = 0; i < 8; i++) {
                    if (i % 2 != 0) {
                        let wt = document.createElement("div");
                        row.appendChild(wt);
                        wt.className = "white-tile";
                        wt.innerHTML = letters[i] + numbers[j] + "";
                    } else {
                        let bt = document.createElement("div");
                        row.appendChild(bt);
                        bt.className = "black-tile";
                        bt.innerHTML = letters[i] + numbers[j] + "";
                    }
                }
            }
        }

    }

    addRow();

    // 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
    // Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
    // Пустая корзина должна выводить строку «Корзина пуста»;
    // Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

    let div1 = document.getElementById("basket");
    div1.innerHTML = "Корзина";

    let appleButton = document.getElementById("button1");
    appleButton.onclick = addApple;
    let orangeButton = document.getElementById("button2");
    orangeButton.onclick = addOrange;
    let bananaButton = document.getElementById("button3");
    bananaButton.onclick = addBanana;
    let basketButton = document.getElementById("button4");
    basketButton.onclick = inBasket;
    let resetButton = document.getElementById("button5");
    resetButton.onclick = resetBasket;

    let basket = {
        price: 0,
        amount: 0,
        goods: {
            apple: {
                cost: 20,
            },
            orange: {
                cost: 15,
            },
            banana: {
                cost: 10,
            }
        }
    }

    function addApple() {
        return basket.price += basket.goods.apple.cost,
            basket.amount = basket.amount + 1;
    }
    function addOrange() {
        return basket.price += basket.goods.orange.cost,
            basket.amount = basket.amount + 1;
    }
    function addBanana() {
        return basket.price += basket.goods.banana.cost,
            basket.amount = basket.amount + 1;
    }

    function inBasket() {
        if (basket.amount == 0) {
            return div1.innerHTML = "Корзина пустая"
        } else {
            return div1.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей.";
        }
    }

    function resetBasket() {
        return basket.amount = 0,
            basket.price = 0,
            div1.innerHTML = "Корзина пустая"
    }

}

window.onload = init;



"use strict"
const queue_1 = require("./Queue");
const Atm = require("./Atm");

function App() {//Менеджер 
    this.AtmArray = [];
}

App.prototype.addAmt = function (AtmExemplar) {
    this.AtmArray.push(AtmExemplar);
}

App.prototype.startProcess = function (n, m) {//Запуск процесса
    createGeneratorQueue(n, m);
    for (let i in this.AtmArray) {
        this.AtmArray[i].on("ChangeState", () => {
            this.AtmArray[i].сhangeState(createInterval);
            queue_1.queueAmount -= 1;//Уменьшаем очередь без учета прироста
        })
    }
    while (true) {
        if (CheckQueueAmount() > 0 || this.SearchNotServed()) {//ЕСли уже работа началась или еще ни кого не обслужили
            this.SearchFreeAtm().emit("ChangeState");//Первый свободный автомат начинате работу(это не работает)
        }
    }
       
    function CheckQueueAmount() {//Прверка длины очереди
        return queue_1.queueAmount;
    }
}

App.prototype.SearchFreeAtm = function () {//Поиск первого свободного
    return this.AtmArray.find(currentAtm => currentAtm.state === true);
}

App.prototype.SearchNotServed = function(){//Проверяем обслужили ли кого то(начался ли процесс)
    return this.AtmArray.every(currentAtm => currentAtm.servedPeople===0);
}

function createInterval(min, max) {//Случайное число на заданном интервале
    let rand = (min + Math.random() * (max + 1 - min));
    rand = Math.floor(rand) * Math.pow(10, 3);
    return rand;
}

function increaseQueue(queue_1, n, m) {//Наращиваем очередь
    setTimeout(() => {
        queue_1.emit("queueChangeAmount");
        increaseQueue(queue_1, n, m);
    },
        createInterval(n, m))
}

function createGeneratorQueue(n, m) {//Генерируем очередь
    queue_1.on("queueChangeAmount", () => { queue_1.changeAmount(); });//Подписка на изменение очереди
    increaseQueue(queue_1, n, m);
}
// createGeneratorQueue(2, 5);
let atm1 = new Atm(5, 10);
let atm2 = new Atm(5, 8);
let app1 = new App();

app1.addAmt(atm1);
app1.addAmt(atm2);


// createGeneratorQueue(5,10);
// while(queue_1.queueAmount>=0){
//         atm1.сhangeState(createInterval);
// }

app1.startProcess(3, 7);
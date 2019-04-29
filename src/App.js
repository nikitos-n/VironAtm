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
    createGeneratorQueue(n,m);
    for (let i in this.AtmArray) {
        this.AtmArray[i].on("ChangeState", () => {
            this.AtmArray[i].сhangeState(queue_1,createInterval,i);
        })
    }
    this.AtmArray[0].emit("ChangeState");
    this.AtmArray[1].emit("ChangeState");
}


function createInterval(min, max) {//Случайное число на заданном интервале
    let rand = (min + Math.random() * (max + 1 - min));
    rand = Math.floor(rand) * Math.pow(10, 3);
    return rand;
}

function increaseQueue(n, m) {//Наращиваем очередь
    setTimeout(() => {
        queue_1.emit("queueChangeAmount");
        increaseQueue(n, m);
    },
        createInterval(n, m))
}

function createGeneratorQueue(n, m) {//Генерируем очередь
    queue_1.on("queueChangeAmount", () => { queue_1.changeAmount(); });//Подписка на изменение очереди
    increaseQueue(n, m);
}
// createGeneratorQueue(2,3);
let atm1=new Atm(4,5);
let atm2=new Atm(5,8);
let app1=new App();
app1.addAmt(atm1);
app1.addAmt(atm2);
app1.startProcess(1, 2);
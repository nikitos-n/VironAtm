"use strict"

import Atm from './Atm';
import Queue from './Queue';
//#region Запускаем банкоматы и очередь
export default class App {
    constructor() {
        this.AtmArray = [];
    }

    addAtm(AtmExemplar) {
        this.AtmArray.push(AtmExemplar);
    }

    startProcess(n, m) {
        let queue_1 = createGeneratorQueue(n, m);
        for (let i in this.AtmArray) {
            this.AtmArray[i].on("changeState", () => { console.log(`${i}-ый банкомат находится в состоянии ${this.AtmArray[i].state}`) })
            this.AtmArray[i].on("changeServedAmount", () => { console.log(`Количество людей, обслуженных ${i}-ым банкоматом ${this.AtmArray[i].servedPeople}`) })
        }
        for (let i in this.AtmArray) {
            realizeAtm(this.AtmArray[i], queue_1, i);
        }
    }
}
// #endregion

// #region handler на изменение состояния очереди
function realizeAtm(AtmExemplar, QueueExemplar, i) {
    setTimeout(() => {
        AtmExemplar.changeState();
        AtmExemplar.changeServedAmount();
        setTimeout(() => {
            if (QueueExemplar.queueAmount > 0) {//Если очередь не закончилась
                AtmExemplar.changeState();//Через секунду к нему подошел следующий из очеререди и он стал занят
                QueueExemplar.DecreaseAmount();
            }
            realizeAtm(AtmExemplar, QueueExemplar, i);
        }, 1000);
    }, createInterval(AtmExemplar.startTime, AtmExemplar.endTime));
};
// #endregion

//#region Случайное число на заданном интервале
function createInterval(min, max) {
    let rand = (min + Math.random() * (max + 1 - min));
    rand = Math.floor(rand) * Math.pow(10, 3);
    return rand;
}
//#endregion

//#region Генерация очереди
function createGeneratorQueue(n, m) {//Генерируем очередь
    let queue_1 = new Queue();
    queue_1.on("ChangeAmount", () => { console.log(`Количество людей в первой очереди очереди ${queue_1.queueAmount}`); });
    function increaseQueue(n, m) {//Наращиваем очередь
        setTimeout(() => {
            queue_1.IncreaseAmount();
            increaseQueue(n, m);
        },
            createInterval(n, m))
    }
    increaseQueue(n, m);

    return queue_1;
}
//#endregion

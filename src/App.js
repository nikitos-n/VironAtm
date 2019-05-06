"use strict"

import Atm from './Atm';
import Queue from './Queue';
import AtmUI from './AtmUI';
import QueueUI from './QueueUI';

//#region Запускаем банкоматы и очередь
export default class App {
    constructor() {
        this.AtmArray = [];
        this.QueueArray = [];
        this.AtmArrayUI = [];
        this.QueueArrayUI = [];
    }

    addAtm(startTime, endTime) {
        let atm_1 = new Atm(startTime, endTime);
        let atmUI_1 = new AtmUI();
        this.AtmArray.push(atm_1);
        this.AtmArrayUI.push(atmUI_1);
    }

    addQueue() {
        let queue_1 = new Queue();
        let queueUI_1 = new QueueUI();
        this.QueueArray.push(queue_1);
        this.QueueArrayUI.push(queueUI_1);
    }

    startProcess(n, m) {

        for (let i in this.QueueArray) {
            this.QueueArray[i] = createGeneratorQueue(this.QueueArray[i], this.QueueArrayUI[i], n, m);
        }

        for (let i in this.AtmArray) {
            this.AtmArray[i].on("changeState", () => {
                this.AtmArrayUI[i].ChildAtmDiv.style.backgroundColor = this.AtmArrayUI[i].ChildAtmDiv.style.backgroundColor == "aquamarine" ? "red" : "aquamarine";
                console.log(`${i}-ый банкомат находится в состоянии ${this.AtmArray[i].state}`)
            })
            this.AtmArray[i].on("changeServedAmount", () => { console.log(`Количество людей, обслуженных ${i}-ым банкоматом ${this.AtmArray[i].servedPeople}`) })
        }
        for (let i in this.AtmArray) {
            realizeAtm(this.AtmArray[i], this.QueueArray, i);
        }
    }
}
// #endregion

// #region handler на изменение состояния очереди
function realizeAtm(AtmExemplar, QueueArray, i) {
    setTimeout(() => {
        AtmExemplar.changeState();
        AtmExemplar.changeServedAmount();
        setTimeout(() => {
            if (QueueArray.some((element) => element.queueAmount > 0)) {//Если очередь не закончилась
                AtmExemplar.changeState();//Через секунду к нему подошел следующий из очеререди и он стал занят
                QueueArray[0].DecreaseAmount();
            }
            realizeAtm(AtmExemplar, QueueArray, i);
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
function createGeneratorQueue(queue_1, queue_1UI, n, m) {//Генерируем очередь
    queue_1.on("ChangeAmount", () => {
        queue_1UI.ChildQueueDiv.innerText = queue_1.queueAmount;
        console.log(`Количество людей в первой очереди очереди ${queue_1.queueAmount}`);
    });
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

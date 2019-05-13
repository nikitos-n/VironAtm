"use strict"

import Atm from './Atm';
import Queue from './Queue';
import AtmUI from './AtmUI';
import QueueUI from './QueueUI';
import Person from './Person';

//#region Запускаем банкоматы и очередь
export default class App {
    constructor() {
        this.AtmArray = [];
        this.QueueArray = [];
        this.AtmArrayUI = [];
        this.QueueArrayUI = [];
        this.AtmReserved = [];
        this.AtmReservedUI = [];
    }

    addAtm(startTime, endTime) {
        let atm_1 = new Atm(startTime, endTime);
        let atmUI_1 = new AtmUI();

        let f1 = atm_1.on("changeState", () => {
            atmUI_1.changeStateUI();
            console.log(`${this.AtmArray.indexOf(atm_1)}-ый банкомат находится в состоянии ${atm_1.state}`)
        })
        atm_1.on('unsubscribeStateAtm', () => f1);

        let f2 = atm_1.on("changeServedAmount", () => {
            atmUI_1.changeServedPeopleUI(atm_1.servedPeople);
            console.log(`Количество людей, обслуженных ${this.AtmArray.indexOf(atm_1)}-ым банкоматом ${atm_1.servedPeople}`)
        });
        atm_1.on("unsubscribeServedAtm", () => f2);

        let closeAtm = atmUI_1.ChildAtmDivClose;
        closeAtm.onclick = () => {
            atm_1.unsubscribeState();
            this.AtmArray.splice(this.AtmArray.indexOf(this.AtmArray), 1);
            this.AtmArrayUI.splice(this.AtmArrayUI.indexOf(this.AtmArrayUI), 1);
            closeAtm.parentNode.remove();
        }
        this.AtmArray.push(atm_1);
        this.AtmArrayUI.push(atmUI_1);
        realizeAtm(this.AtmArray, this.QueueArray, this.AtmArray.indexOf(atm_1));
    }


    addQueue(n, m) {
        let queue_1 = new Queue();
        let queueUI_1 = new QueueUI();
        let f1 = queue_1.on("ChangeAmount", () => {
            queueUI_1.ChildQueueDivContent.innerText = queue_1.PersonAmount.length;
            console.log(`Количество людей в ${this.QueueArray.indexOf(queue_1)}-ой очереди очереди ${queue_1.PersonAmount.length}`);
        });
        queue_1.on("cerateOneMoreAtm", () => {
            this.addAtm(1, 1.5);
        });
        queue_1.on("unsubscribeAmount", () => f1);

        queue_1 = createGeneratorQueue(queue_1, queueUI_1, n, m, this.QueueArray.indexOf(queue_1));
        this.QueueArray.push(queue_1);
        this.QueueArrayUI.push(queueUI_1);
    }

    startProcess(n, m) {
        let i = 0;
        document.getElementsByClassName("queueUIFlexPlus")[0].onclick = () => {
            this.addQueue(n, m);
        }

        //#region Кнопка добавить банкомат
        document.getElementsByClassName("atmUIFlexPlus")[0].onclick = () => {
            this.addAtm(2, 5, i);
        }
    }
}

// #region handler на изменение состояния очереди
function realizeAtm(AtmArray, QueueArray, i) {
    setTimeout(() => {
        if (QueueArray.some((element) => element.PersonAmount.length > 0) && AtmArray[i]) { //Если очередь не закончилась
            debugger;
            AtmArray[i].changeState();
            QueueArray.sort((a, b) => {
                if (a.queueAmount > b.queueAmount) return 1;
                if (a.queueAmount < b.queueAmount) return -1;
            });
            let time = QueueArray[QueueArray.length - 1].DecreaseAmount();
            setTimeout(() => {
                AtmArray[i].changeState();
                AtmArray[i].changeServedAmount();
                realizeAtm(AtmArray, QueueArray, i);
                debugger;
            }, time.time);
        } else {
            realizeAtm(AtmArray, QueueArray, i);
        }
    }, 1000);
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
function createGeneratorQueue(queue_1, queueUI_1, n, m, i) { //Генерируем очередь
    function increaseQueue(n, m) { //Наращиваем очередь
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


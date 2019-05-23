"use strict"

import Atm from './Atm';
import Queue from './Queue';
import AtmUI from './AtmUI';
import QueueUI from './QueueUI';
import createGeneratorQueue from './GeneratorQueue';
import realizeAtm from './realizeAtm';

export default class App {
    constructor() {
        this.AtmArray = [];
        this.QueueArray = [];
        this.AtmArrayUI = [];
        this.QueueArrayUI = [];
    }

    addAtm() {
        let atm_1 = new Atm();//Добавили Банкомат
        let atmUI_1 = new AtmUI();//Добваили div для банкомата 

        let f1 = atm_1.on("changeState", () => {//Пописались на изменения состяния
            atmUI_1.changeStateUI();
            console.log(`${this.AtmArray.indexOf(atm_1)}-ый банкомат находится в состоянии ${atm_1.state}`)
        })
        atm_1.on('unsubscribeStateAtm', () => f1);//Подписались на возмодность отписки от предыдущего события

        let f2 = atm_1.on("changeServedAmount", () => {//Пописались на изменения числа обслуженных лиц
            atmUI_1.changeServedPeopleUI(atm_1.servedPeople);
            console.log(`Количество людей, обслуженных ${this.AtmArray.indexOf(atm_1)}-ым банкоматом ${atm_1.servedPeople}`)
        });
        atm_1.on("unsubscribeServedAtm", () => f2);//Подписались на возмодность отписки от предыдущего события

        let closeAtm = atmUI_1.ChildAtmDivClose;
        closeAtm.onclick = () => {
            atm_1.unsubscribeState();//Внутри делаем emit на отписку
            this.AtmArray.splice(this.AtmArray.indexOf(atm_1), 1);
            this.AtmArrayUI.splice(this.AtmArrayUI.indexOf(atmUI_1), 1);
            closeAtm.parentNode.remove();
        }

        this.AtmArray.push(atm_1);
        this.AtmArrayUI.push(atmUI_1);
        realizeAtm(this.AtmArray, this.QueueArray, this.AtmArray.indexOf(atm_1));
        let i = 0;
        setInterval(() => {
            if (this.AtmArray[this.AtmArray.indexOf(atm_1)]) {
                i = this.AtmArray[this.AtmArray.indexOf(atm_1)].state == true ? i += 1 : 0;
                if (i == 10) {
                    this.AtmArray[this.AtmArray.indexOf(atm_1)].unsubscribeState();//Внутри делаем emit на отписку
                    this.AtmArray.splice(this.AtmArray.indexOf(atm_1), 1);
                    this.AtmArrayUI.splice(this.AtmArrayUI.indexOf(atmUI_1), 1);
                    closeAtm.parentNode.remove();
                }
            }
        }, 1000);
    }


    addQueue(n, m) {//Аналогичный порядок действий для Очереди
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

        let closeQueue = queueUI_1.ChildQueueDivClose;
        closeQueue.onclick = () => {
            queue_1.unsubscribeAmount();//Внутри делаем emit на отписку
            this.QueueArray.splice(this.QueueArray.indexOf(queue_1), 1);
            this.QueueArray.splice(this.QueueArray.indexOf(queueUI_1), 1);
            closeQueue.parentNode.remove();
        }

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
            this.addAtm(i);
        }
    }
}
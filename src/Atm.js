"use strict"

const EventEmmiter = require("./EventEmmiter");

Atm.prototype = EventEmmiter.prototype;

function Atm(startTime, endTime) {
    EventEmmiter.call(this);
    this.startTime = startTime;
    this.endTime = endTime;
    this.state = true;//Изначально он свободен и ни кого не обслужил
    this.servedPeople = 0;
}

// function createInterval(min, max) {//Случайное число на заданном интервале
//     let rand = (min + Math.random() * (max + 1 - min));
//     rand = Math.floor(rand) * Math.pow(10, 3);
//     return rand;
// }

Atm.prototype.сhangeState = function (QueueAmount, createInterval, i) {
    setTimeout(() => {
        this.state = true;
        console.log(`${i}-ый банкомат свободен`);
        console.log(`${i}-ый банкомат обслужил ${this.servedPeople} людей`);
        setTimeout(() => {
            if (QueueAmount>0) {//Если очередь не закончилась
                this.state = false;//Через секунду к нему подошел следующий из очеререди и он стал занят
                console.log(`${i}-ый банкомат занят`);
                this.servedPeople += 1;
                QueueAmount -= 1;
            }
            this.сhangeState(QueueAmount,createInterval, i);
        }, 1000);
    }, createInterval(this.startTime, this.endTime));
}

// let atm = new Atm(0.5, 8);
// atm.сhangeState(5,createInterval, 1);


module.exports = Atm;
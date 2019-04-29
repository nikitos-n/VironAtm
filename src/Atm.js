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

Atm.prototype.сhangeState = function (queue_1, createInterval, i) {
    setTimeout(() => {
        this.state = true;
        console.log(`${i}-ый банкомат свободен`);
        console.log(`${i}-ый банкомат обслужил ${this.servedPeople} людей`);
        setTimeout(() => {
            if (queue_1.queueAmount>0) {//Если очередь не закончилась
                this.state = false;//Через секунду к нему подошел следующий из очеререди и он стал занят
                console.log(`${i}-ый банкомат занят`);
                this.servedPeople += 1;
                queue_1.queueAmount -= 1;
            }
            this.сhangeState(queue_1,createInterval, i);
        }, 1000);
    }, createInterval(this.startTime, this.endTime));
}

module.exports = Atm;
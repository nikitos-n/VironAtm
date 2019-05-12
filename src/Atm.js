"use strict"

import EventEmmiter from './EventEmmiter'

export default class Atm extends EventEmmiter {
    constructor(startTime, endTime) {
        super();
        this.startTime = startTime;
        this.endTime = endTime;
        this.state = true;
        this.servedPeople = 0;
    }

    changeState() {
        this.state=this.state==true?false:true;
        this.emit("changeState");
    }

    changeServedAmount() {
        this.servedPeople += 1;
        this.emit("changeServedAmount");
    }

    unsubscribeState(){
        console.log("Выводим банкомат из работы");
        this.emit("unsubscribeServedAtm");
        this.emit("unsubscribeStateAtm");
    }

}

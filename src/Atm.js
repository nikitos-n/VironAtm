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
        this.emit("changeState");
        if(this.state==true){
            this.state=false;
        }
        else if(this.state==false){
            this.state=true;
        }
    }

    changeServedAmount() {
        this.emit("changeServedAmount");
        this.servedPeople += 1;
    }
}

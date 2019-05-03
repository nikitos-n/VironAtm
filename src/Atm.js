"use strict"

import EventEmmiter from './EventEmmiter'

export default class Atm extends EventEmmiter{
    constructor(startTime, endTime){
        super();
        this.startTime = startTime;
        this.endTime = endTime;
        this.state = true;
        this.servedPeople = 0;
    }

    changeState(){
        this.emit("changeState");
        this.state=this.state?false:true;
    }

    changeServedAmount(){
        this.emit("changeServedAmount");
        this.servedPeople+=1;
    }
}

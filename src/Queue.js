"use strict"

import EventEmmiter from './EventEmmiter'
import Person from './Person'

export default class Queue extends EventEmmiter {
    constructor() {
        super();
        this.PersonAmount = [];//Изначально ни кого в очереди нет
    }

    IncreaseAmount() {
        this.PersonAmount.push(new Person());
        this.emit("ChangeAmount");
        if (this.PersonAmount.length >= 8) {
            this.emit("cerateOneMoreAtm");
        }
    }

    DecreaseAmount() {
        let first = this.PersonAmount.shift();
        this.emit("ChangeAmount");
        return first;
    }
    
    unsubscribeAmount(){
        console.log("Выводим очередь из работы");
        this.emit("unsubscribeAmount");
        this.clearTable();
    }

}

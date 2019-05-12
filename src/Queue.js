"use strict"

import EventEmmiter from './EventEmmiter'

export default class Queue extends EventEmmiter {
    constructor() {
        super();
        this.queueAmount = 0;//Изначально ни кого в очереди нет
    }

    IncreaseAmount() {
        this.queueAmount += 1;
        this.emit("ChangeAmount");
        if (this.queueAmount >= 25) {
            this.emit("cerateOneMoreAtm");
        }
    }

    DecreaseAmount() {
        this.queueAmount -= 1;
        this.emit("ChangeAmount");
    }
}

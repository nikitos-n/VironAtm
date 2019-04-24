"use strict"
const EventEmmiter=require("./EventEmmiter");
Atm.prototype = EventEmmiter.prototype;
function Atm(startTime,endTime){//По умолчанию банкомат свободен и еще ни кого не обслужил
    EventEmmiter.call(this);
    this.state="free";//Состояние
    this.servedAmount=0;//Количество обслуженных человек                    
    this.emit("servedAmountChanged",this.servedAmount);
}
module.exports=Atm;
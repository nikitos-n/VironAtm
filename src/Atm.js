"use strict"

const EventEmmiter=require("./EventEmmiter");


Atm.prototype = EventEmmiter.prototype;

function Atm(startTime,endTime){
    EventEmmiter.call(this);
    this.startTime=startTime;
    this.endTime=endTime;
    this.state=true;//Изначально он свободен и ни кого не обслужил
    this.servedPeople=0;
}

Atm.prototype.сhangeState=function(generateInterval){
        setTimeout(()=>{
            this.state=false;//Через секунду к нему подошел следующий из очеререди и он стал занят
            console.log("банкомат занят");
            setTimeout(()=>{
                this.state=true;//Обслужили текущего
                this.servedPeople+=1;
                console.log("банкомат свободен");
                console.log(`банкомат обслужил ${this.servedPeople} людей`);
            },generateInterval(this.startTime,this.endTime))
        },1000);
}

module.exports=Atm;
"use strict"

const EventEmmiter=require("./EventEmmiter");


Atm.prototype = EventEmmiter.prototype;

function Atm(startTime,endTime){
    EventEmmiter.call(this);
    this.startTime=startTime;
    this.endTime=endTime;
    this.state="true";//Изначально он свободен и ни кого не обслужил
    this.servedPeople=0;
}

Atm.prototype.checkAndChangeState=function(generateInterval,i){
    if(this.state==true){
        setTimeout(()=>{
            this.state=false;//Через секунду к нему подошел следующий из очеререди и он стал занят
            console.log("Банкомат занят");
            setTimeout(()=>{
                this.state=true;//Обслужили текущего
                console.log(`${i}-ый банкомат свободен`);
            },generateInterval(this.startTime,this.endTime))
        },1000);
    }
}

module.exports=Atm;
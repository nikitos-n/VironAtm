"use strict"

const EventEmmiter=require("./EventEmmiter");

Queue.prototype = EventEmmiter.prototype;
function Queue(){
    EventEmmiter.call(this);
    this.queueAmount=0;//Изначально ни кого в очереди нет
}

Queue.prototype.changeAmount=function(){
    this.queueAmount+=1;
    console.log(`Количество людей в очереди ${this.queueAmount}`);
}

module.exports=new Queue();
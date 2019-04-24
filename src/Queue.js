"use strict"
const EventEmmiter=require("./EventEmmiter");
Queue.prototype = EventEmmiter.prototype;
function Queue(){
    EventEmmiter.call(this);
    this.queueAmount=0;//Количество людей в очереди
}
module.exports=new Queue();
"use strict"
const Queue = require("./Queue");
const Atm = require("./Atm");

function App(){
    this.AtmArray=[];
}

App.prototype.addAmt=function(AtmExemplar){
    this.AtmArray.push(AtmExemplar);
}

App.startProcess.prototype=function(n,m){//Запуск процесса
    let queue_1=createGeneratorQueue(n,m);//Создаем очередь
    for(let i in this.AtmArray){
        this.AtmArray[i].on("CheckAndChangeState",()=>{
                this.AtmArray[i].checkAndChangeState(createInterval,i);
                queue_1.queueAmount-=1;//Уменьшаем очередь без учета прироста
        })
    }
}

App.SearchFreeAtm.prototype=function(){
    
}

function createInterval(min,max){//Случайное число на заданном интервале
    let rand = (min + Math.random() * (max + 1 - min));
    rand = Math.floor(rand)*Math.pow(10,3);
    return rand;
}

function increaseQueue(queue_1,n,m){//Наращиваем очередь
    setTimeout(()=>{
        queue_1.emit("queueChangeAmount");
        increaseQueue(queue_1,n,m);
    },
    createInterval(n,m))
}

function createGeneratorQueue(n,m){//Генерируем очередь
    let queue_1=new Queue(n,m);
    queue_1.on("queueChangeAmount",()=>{queue_1.changeAmount();});//Подписка на изменение очереди
    increaseQueue(queue_1,n,m);
    return queue_1;
}

let f=createGeneratorQueue(10,0.05);

exports.createGeneratorQueue=createInterval;
module.exports=createGeneratorQueue;
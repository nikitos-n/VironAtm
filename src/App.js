"use strict"
const Queue = require("./Queue");
const Atm = require("./Atm");

function App(){
    this.AtmArray=[];
}

App.prototype.addAmt=function(AtmExemplar){
    this.AtmArray.push(AtmExemplar);
}

App.prototype.startProcess=function(n,m){//Запуск процесса
    let queue_1=createGeneratorQueue(n,m);//Создаем очередь
    for(let i in this.AtmArray){
        this.AtmArray[i].on("CheckAndChangeState",()=>{
                this.AtmArray[i].checkAndChangeState(createInterval,i);
                queue_1.queueAmount-=1;//Уменьшаем очередь без учета прироста
        })
    }
    while(queue_1.queueAmount>0){
        this.SearchFreeAtm().emit("CheckAndChangeState");//Первый свободный автомат начинате работу
    }
}

App.prototype.SearchFreeAtm=function(){
    this.AtmArray.find(currentAtm=>currentAtm.state===true);
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

let atm1=new Atm(5,10);
let atm2=new Atm(5,8);
let app1=new App();
app1.addAmt(atm1);
app1.addAmt(atm2);
app1.startProcess(3,7);
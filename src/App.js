const queue_1 = require("./Queue");

// function App(QueueAmount, AtmAmount){//Менеджер
    
// }

function queueGenerator(n,m){//Генератор очереди
    
    function createInterval(n,m){//Случайное число от n до m 
        let rand = n + Math.random() * (m - n)+1;
        rand = Math.round(rand);
        return rand;
    }

    function addPerson(){
        queue_1.queueAmount+=1;
        console.log(queue_1.queueAmount);
    }

    function increaseQueue(n,m){
        setTimeout(()=>{//Увеличиваем по таймеру очередь
        addPerson();
        increaseQueue(n,m);
    },createInterval(n*Math.pow(10,3),m*Math.pow(10,3)));
}
    increaseQueue(n,m);
}

queueGenerator(10,0.05);
export default function createGeneratorQueue(queue_1, queueUI_1, n, m, i) { //Генерируем очередь
    function increaseQueue(n, m) { //Наращиваем очередь
        setTimeout(() => {
            if (queue_1) {
                queue_1.IncreaseAmount();
                increaseQueue(n, m);
            }
        },
            createInterval(n, m))
    }
    increaseQueue(n, m);

    return queue_1;
}

function createInterval(min, max) {
    let rand = (min + Math.random() * (max + 1 - min));
    rand = Math.floor(rand) * Math.pow(10, 3);
    return rand;
}
//#endregion
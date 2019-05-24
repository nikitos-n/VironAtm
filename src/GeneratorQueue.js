export function createGeneratorQueue(queue_1, queueUI_1, n, m, i) { //Генерируем очередь
    increaseQueue(queue_1, queueUI_1, n, m, i);
    return queue_1;
}

export function increaseQueue(queue_1, queueUI_1, n, m, i) { //Наращиваем очередь
    setTimeout(() => {
        if (queue_1) {
            queue_1.IncreaseAmount();
            increaseQueue(queue_1, queueUI_1, n, m, i);
        }
    },
        createInterval(n, m))
}

export function createInterval(min, max) {
    let rand = (min + Math.random() * (max + 1 - min));
    rand = Math.floor(rand) * Math.pow(10, 3);
    return rand;
}
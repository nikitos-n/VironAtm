export default function realizeAtm(AtmArray, QueueArray, i, j = 0) {
    setTimeout(() => {
        if (AtmArray[i]) {
            j = AtmArray[i].state === true ? j + 1 : 0;
        }
    }, 1000);
    setTimeout(() => {
        if (AtmArray[i]) {
            if (QueueArray.some((element) => element.PersonAmount.length > 0)) { //Если очередь не закончилась
                AtmArray[i].changeState();
                QueueArray.sort((a, b) => {
                    if (a.queueAmount > b.queueAmount) return 1;
                    if (a.queueAmount < b.queueAmount) return -1;
                });
                let time = QueueArray[QueueArray.length - 1].DecreaseAmount();
                setTimeout(() => {
                    if (AtmArray[i]) {
                        AtmArray[i].changeState();
                        AtmArray[i].changeServedAmount();
                        realizeAtm(AtmArray, QueueArray, i, j);
                    }
                }, time.time);
            }
            else {
                console.log(j);
                realizeAtm(AtmArray, QueueArray, i, j);
            }

        }
    }, 1000);
};
import App from './App';
import Queue from './Queue';
import QueueUI from './QueueUI';
document.body.innerHTML = `<div id="forUIQueue" class="queueUIFlex-container">`
document.body.onclick = `<div class="queueUIFlexPlus" data-title="Добавить очередь"><`
jest.useFakeTimers();

let App1 = new App();

test('Testing .createInterval in App', () => {
    let time = App1.createInterval(1, 2);
    expect(time).toBeGreaterThanOrEqual(1000);
    expect(time).toBeLessThanOrEqual(2000);
});

test('Testing .addQueue in App', () => {
    expect(App1.QueueArray.length).toBe(0);
    expect(App1.QueueArrayUI.length).toBe(0);
    App1.addQueue(1, 5);
    expect(App1.QueueArray[App1.QueueArray.length - 1].eventTable.hasOwnProperty('ChangeAmount')).toBeTruthy();
    expect(App1.QueueArray[App1.QueueArray.length - 1].eventTable.hasOwnProperty('cerateOneMoreAtm')).toBeTruthy();
    expect(App1.QueueArray[App1.QueueArray.length - 1].eventTable.hasOwnProperty('unsubscribeAmount')).toBeTruthy();
    expect(App1.QueueArrayUI.length).toBe(1);
    expect(App1.QueueArray.length).toBe(1);
});

test('Testing .createGeneratorQueue in App', () => {
    App1.QueueArrayUI[App1.QueueArrayUI.length - 1] = App1.createGeneratorQueue(App1.QueueArray[App1.QueueArray.length - 1], App1.QueueArrayUI[App1.QueueArrayUI.length - 1], 1, 2, 1);
})

test('Testing .increaseQueue in App', () => {
    let queue1 = new Queue();
    let queue1UI = new QueueUI();
    App1.QueueArray.push(queue1);
    App1.QueueArrayUI.push(queue1UI);
    expect(App1.QueueArray[App1.QueueArray.length - 1].hasOwnProperty('PersonAmount')).toBeTruthy();
    expect(App1.QueueArray[App1.QueueArray.length - 1].PersonAmount.length).toBe(0);

    jest.advanceTimersByTime(2000);
    App1.increaseQueue = jest.fn();
    App1.increaseQueue(App1.QueueArray[App1.QueueArray.length - 1], App1.QueueArrayUI[App1.QueueArrayUI.length - 1], 1, 2, 1);
    expect(App1.increaseQueue).toHaveBeenCalledTimes(1);
});
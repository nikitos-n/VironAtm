import App from './App';
import Queue from './Queue';
import QueueUI from './QueueUI';
document.body.innerHTML = `<div id="forUIQueue" class="queueUIFlex-container">`
document.body.onclick = `<div class="queueUIFlexPlus" data-title="Добавить очередь"><`
jest.useFakeTimers();

let app1 = new App();

test('Testing .createInterval in App', () => {
    let time = app1.createInterval(1, 2);
    expect(time).toBeGreaterThanOrEqual(1000);
    expect(time).toBeLessThanOrEqual(2000);
});

test('Testing .addQueue in App', () => {
    expect(app1.QueueArray.length).toBe(0);
    expect(app1.QueueArrayUI.length).toBe(0);
    app1.addQueue(1, 5);
    expect(app1.QueueArray[app1.QueueArray.length - 1].eventTable.hasOwnProperty('ChangeAmount')).toBeTruthy();
    expect(app1.QueueArray[app1.QueueArray.length - 1].eventTable.hasOwnProperty('cerateOneMoreAtm')).toBeTruthy();
    expect(app1.QueueArray[app1.QueueArray.length - 1].eventTable.hasOwnProperty('unsubscribeAmount')).toBeTruthy();
    expect(app1.QueueArrayUI.length).toBe(1);
    expect(app1.QueueArray.length).toBe(1);
});

test('Testing .createGeneratorQueue in App', () => {
    let queue_1 = app1.createGeneratorQueue(app1.QueueArray[app1.QueueArray.length - 1], app1.QueueArrayUI[app1.QueueArrayUI.length - 1], 1, 2, 1);
})

test('Testing .increaseQueue in App', () => {
    let queue1 = new Queue();
    let queue1UI = new QueueUI();
    app1.QueueArray.push(queue1);
    app1.QueueArrayUI.push(queue1UI);
    expect(app1.QueueArray[app1.QueueArray.length - 1].hasOwnProperty('PersonAmount')).toBeTruthy();
    expect(app1.QueueArray[app1.QueueArray.length - 1].PersonAmount.length).toBe(0);

    jest.advanceTimersByTime(2000);
    app1.increaseQueue = jest.fn();
    app1.increaseQueue(app1.QueueArray[app1.QueueArray.length - 1], app1.QueueArrayUI[app1.QueueArrayUI.length - 1], 1, 2, 1);
    expect(app1.increaseQueue).toHaveBeenCalledTimes(1);
});
import Atm from './Atm';
import Queue from './Queue';
import AtmUI from './AtmUI';
import App from './App';
import Person from './Person'
jest.useFakeTimers();

document.body.innerHTML = `<div id="forUIAtm" class="atmUIFlex-container">`

let App1 = new App();

test('Testing constructor of App', () => {
    expect(typeof App1).toBe('object');
    expect(App1.hasOwnProperty('AtmArray')).toBeTruthy();
    expect(App1.hasOwnProperty('QueueArray')).toBeTruthy();
    expect(App1.hasOwnProperty('AtmArrayUI')).toBeTruthy();
    expect(App1.hasOwnProperty('QueueArrayUI')).toBeTruthy();
    expect(typeof App1.AtmArray).toBe('object');
    expect(typeof App1.QueueArray).toBe('object');
    expect(typeof App1.AtmArrayUI).toBe('object');
    expect(typeof App1.QueueArrayUI).toBe('object');
});

test('Testing .addAtm of App', () => {
    expect(App1.AtmArray.length).toBe(0);
    expect(App1.AtmArrayUI.length).toBe(0);
    App1.addAtm();
    //Проверяем подписку
    expect(App1.AtmArray[App1.AtmArray.length - 1].eventTable.hasOwnProperty('changeState')).toBeTruthy();
    expect(App1.AtmArray[App1.AtmArray.length - 1].eventTable.hasOwnProperty('changeServedAmount')).toBeTruthy();
    expect(App1.AtmArray[App1.AtmArray.length - 1].eventTable.hasOwnProperty('unsubscribeStateAtm')).toBeTruthy();
    expect(App1.AtmArray[App1.AtmArray.length - 1].eventTable.hasOwnProperty('unsubscribeServedAtm')).toBeTruthy();

    expect(App1.AtmArray.length).toBe(1);
    expect(App1.AtmArrayUI.length).toBe(1);


    // App1.AtmArray[App1.AtmArray.length - 1].unsubscribeState();
});

test('Testing .realizeAtm in App', () => {
    let atm1 = new Atm();
    let atm1UI = new AtmUI();
    App1.AtmArray.push(atm1);
    App1.AtmArrayUI.push(atm1UI);
    jest.advanceTimersByTime(2000);
    let queue1 = new Queue();
    let person1 = new Person();

    queue1.PersonAmount.push(person1);
    App1.QueueArray.push(queue1);
    App1.renderProcess(App1.AtmArray, App1.QueueArray, 0);

    App1.renderProcess = jest.fn();
    App1.renderProcess(App1.AtmArray, App1.QueueArray, 0);
    expect(App1.renderProcess).toHaveBeenCalledTimes(1);

    App1.startProcess = jest.fn();
    App1.startProcess(App1.AtmArray, App1.QueueArray, 0);
    expect(App1.startProcess).toHaveBeenCalledTimes(1);

});

test('Testing .startprocess in App', () => {
    let atm1 = new Atm();
    atm1.state = TreeWalker;
    let atm1UI = new AtmUI();
    App1.AtmArray.push(atm1);
    App1.AtmArrayUI.push(atm1UI);
    let queue1 = new Queue();
    let person1 = new Person();

    queue1.PersonAmount.push(person1);
    App1.QueueArray.push(queue1);

    App1.increaseQueue(App1.QueueArray[App1.QueueArray.length - 1], App1.QueueArrayUI[App1.QueueArrayUI.length - 1], 1, 2, 0);
    App1.realizeAtm(App1.AtmArray, App1.QueueArray, 0);

});
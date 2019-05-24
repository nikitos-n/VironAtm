import App from './App';
import Atm from './Atm';
import AtmUI from './AtmUI';
import Queue from './Queue';
import QueueUI from './QueueUI';
import Person from './Person'
document.body.innerHTML = `<div id="forUIAtm" class="atmUIFlex-container">`
jest.useFakeTimers();

let app1 = new App();

test('Testing .addAtm in App', () => {
    expect(app1.AtmArray.length).toBe(0);
    expect(app1.AtmArrayUI.length).toBe(0);
    app1.addAtm();
    expect(app1.AtmArray[app1.AtmArray.length - 1].eventTable.hasOwnProperty('changeState')).toBeTruthy();
    expect(app1.AtmArray[app1.AtmArray.length - 1].eventTable.hasOwnProperty('changeServedAmount')).toBeTruthy();
    expect(app1.AtmArray[app1.AtmArray.length - 1].eventTable.hasOwnProperty('unsubscribeStateAtm')).toBeTruthy();
    expect(app1.AtmArray[app1.AtmArray.length - 1].eventTable.hasOwnProperty('unsubscribeServedAtm')).toBeTruthy();
    expect(app1.AtmArray.length).toBe(1);
    expect(app1.AtmArrayUI.length).toBe(1);
    app1.AtmArray[app1.AtmArray.length - 1].unsubscribeState();
});

test('Testing .realizeAtm in App', () => {
    let atm1 = new Atm();
    let atm1UI = new AtmUI();
    app1.AtmArray.push(atm1);
    app1.AtmArrayUI.push(atm1UI);
    jest.advanceTimersByTime(2000);
    let queue1 = new Queue();
    let person1 = new Person();
    queue1.PersonAmount.push(person1);
    app1.QueueArray.push(queue1);
    app1.renderProcess(app1.AtmArray, app1.QueueArray, 1);

    app1.renderProcess = jest.fn();
    app1.renderProcess(app1.AtmArray, app1.QueueArray, 1);
    expect(app1.renderProcess).toHaveBeenCalledTimes(1);

    app1.startProcess = jest.fn();
    app1.startProcess(app1.AtmArray, app1.QueueArray, 1);
    expect(app1.startProcess).toHaveBeenCalledTimes(1);
});

test('Testing .closeAtm in App', () => {
    let atm1 = new Atm();
    let atm1UI = new AtmUI();
    app1.AtmArray.push(atm1);
    app1.AtmArrayUI.push(atm1UI);
    let closeAtm = atm1UI.ChildAtmDivClose;
    app1.startProcess(2, 3);
    app1.addAtm = jest.fn();
    app1.addAtm();
    expect(app1.addAtm).toHaveBeenCalledTimes(1);
});
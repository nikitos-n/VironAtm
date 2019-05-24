import App from './App';
import Atm from './Atm';
import AtmUI from './AtmUI';
import Queue from './Queue';
import QueueUI from './QueueUI';
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
});

test('Testing .realizeAtm in App', () => {
    let atm1 = new Atm();
    let atm1UI = new AtmUI();
    app1.AtmArray.push(atm1);
    app1.AtmArrayUI.push(atm1UI);
    jest.advanceTimersByTime(2000);
    // expect(app1.realizeAtm).toHaveBeenCalledTimes(1);

    let queue1 = new Queue();
    queue1.PersonAmount.length = 2;
    app1.QueueArray.push(queue1);
    // app1.renderProcess = jest.fn();
    app1.renderProcess(app1.AtmArray, app1.QueueArray, 1);
    // expect(app1.renderProcess).toHaveBeenCalledTimes(1);
});
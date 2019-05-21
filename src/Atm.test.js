import Atm from './Atm';
let FirstAtm = new Atm();

test('Testing constructor of Atm', () => {
    expect(typeof FirstAtm).toBe('object');
    expect(FirstAtm.hasOwnProperty('eventTable')).toBeTruthy();
    expect(FirstAtm.state).toBeTruthy();
    expect(FirstAtm.servedPeople).toBe(0);
});

test('Testing .changeState of Atm', () => {
    FirstAtm.on('changeState', () => {console.log('Subscribing on changeState just to check it`s emitting next')});
    expect(FirstAtm.eventTable['changeState'].length).toBe(1);
    FirstAtm.changeState();
    expect(FirstAtm.state).toBeFalsy();
    FirstAtm.changeState();
    expect(FirstAtm.state).toBeTruthy();
});

test('Testing .changeServedAmount of Atm', () => {
    FirstAtm.on('changeServedAmount', () => {console.log('Subscribing on changeServedAmount just to check it`s emitting next')});
    expect(FirstAtm.eventTable['changeServedAmount'].length).toBe(1);
    FirstAtm.changeServedAmount();
    expect(FirstAtm.servedPeople).toBe(1);
});

test('Testing .unsubscribeState of Atm', () => {
    FirstAtm.on('unsubscribeServedAtm', () => {console.log('Subscribing on unsubscribeServedAtm just to check it`s emitting next')});
    FirstAtm.on('unsubscribeStateAtm', () => {console.log('Subscribing on unsubscribeStateAtm just to check it`s emitting next')});
    FirstAtm.unsubscribeState();
});
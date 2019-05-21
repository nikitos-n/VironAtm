import EventEmmiter from './EventEmmiter'

let EvEm = new EventEmmiter();

test('Testing constructor of EventEmmiter', () => {
    expect(typeof EvEm).toBe("object");
    expect(typeof EvEm.eventTable).toBe('object');
    expect(Object.keys(EvEm.eventTable).length).toBe(0);
});

test('Testing .on of EventEmmiter', () => {
    expect(EvEm.eventTable.hasOwnProperty('testing')).toBeFalsy();
    let firstUnsubscribeFromTesting = EvEm.on('testing', () => { console.log('The first testing .on in EvEm') });
    expect(EvEm.eventTable.hasOwnProperty('testing')).toBeTruthy();
    expect(EvEm.eventTable['testing'].length).toBe(1);
    let SecondunsubscribeFromTesting = EvEm.on('testing', () => { console.log('The second testing .on in EvEm') });
    expect(EvEm.eventTable['testing'].length).toBe(2);
    firstUnsubscribeFromTesting();
    expect(EvEm.eventTable['testing'].length).toBe(1);
    SecondunsubscribeFromTesting();
    expect(EvEm.eventTable['testing'].length).toBe(0);
    EvEm.on('testing', (obj) => { console.log(`The third testing .on in ${obj}`) });
    expect(EvEm.eventTable['testing'].length).toBe(1);
});

test('Testing .emit of EventEmmiter', () => {
    expect(EvEm.eventTable.hasOwnProperty('testing')).toBeTruthy();
    EvEm.emit('testing', EvEm);
    expect(EvEm.eventTable.hasOwnProperty('Secondtesting')).toBeFalsy();
    EvEm.emit('Secondtesting');
    expect(EvEm.eventTable.hasOwnProperty('Secondtesting')).toBeFalsy();
});

test('Testing .clearTable of EventEmmiter', () => {
    expect(EvEm.hasOwnProperty('eventTable')).toBeTruthy();
    EvEm.clearTable();
    expect(EvEm.hasOwnProperty('eventTable')).toBeFalsy();
});
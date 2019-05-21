import Queue from './Queue';

let FirstQueue = new Queue();

test('Testing constructor of Queue', () => {
    expect(typeof FirstQueue).toBe('object');
    expect(FirstQueue.hasOwnProperty('eventTable')).toBeTruthy();
    expect(FirstQueue.PersonAmount.length).toBe(0);
});

test('Testing .ChangeAmount of Queue', () => {
    FirstQueue.on('ChangeAmount', () => { console.log('Subscribing on ChangeAmount just to check it`s emitting next') });
    FirstQueue.on('cerateOneMoreAtm', () => { console.log('Subscribing on cerateOneMoreAtm just to check it`s emitting next') });
    FirstQueue.IncreaseAmount();
    expect(FirstQueue.PersonAmount.length).toBe(1);
    FirstQueue.PersonAmount.length = 7;
    FirstQueue.IncreaseAmount();
    expect(FirstQueue.PersonAmount.length).toBe(8);
});

test('Testing .DecreaseAmount of Queue', () => {
    let fristPersonInQueue = FirstQueue.PersonAmount[0];
    let fristPerson = FirstQueue.DecreaseAmount();
    expect(fristPersonInQueue === fristPerson).toBeTruthy();
    expect(FirstQueue.PersonAmount.length).toBe(7);
});

test('Testing .unsubscribeAmount of Queue', () => {
    FirstQueue.on('unsubscribeAmount', () => { console.log('Subscribing on unsubscribeAmount just to check it`s emitting next') });
    FirstQueue.unsubscribeAmount();
});
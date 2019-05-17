import Queue from './Queue';

test('Testing Queue', () => {
    let queue1 = new Queue();
    queue1.IncreaseAmount();
    queue1.DecreaseAmount();
    queue1.unsubscribeAmount();
    queue1.PersonAmount = new Array(8);
    queue1.IncreaseAmount();
})
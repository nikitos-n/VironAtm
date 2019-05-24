import { createGeneratorQueue, increaseQueue, createInterval } from './GeneratorQueue';
import Queue from './Queue';
import QueueUI from './QueueUI';
jest.useFakeTimers();
document.body.innerHTML = `<div id="forUIQueue" class="queueUIFlex-container">`

let queue1 = new Queue();
let queuUI1 = new QueueUI();

test('Testing createInterval', () => {
    let time = createInterval(1, 2);
    expect(time).toBeLessThanOrEqual(2000);
    expect(time).toBeGreaterThanOrEqual(1000);
});

test('Testing increaseQueue', () => {
    expect(queue1).toBeTruthy();
    expect(queue1.PersonAmount.lenght).toBe(0);
    increaseQueue(queue1, queuUI1, 1, 2, 1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(queue1).toBeTruthy();
    console.log(queue1.PersonAmount.length);
    // expect(queue1.PersonAmount.lenght).toBe(1);
})
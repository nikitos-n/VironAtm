import QueueUI from './QueueUI';

document.body.innerHTML = `<div id="forUIQueue" class="queueUIFlex-container">`

test('Testing QueueUI', () => {
    let queue1 = new QueueUI();
    // console.log(queue1.ChildQueueDivContent.textContent);
    expect(queue1.ChildQueueDivContent.textContent).toBe('0');
    queue1.showLenght('2');
})
import QueueUI from './QueueUI';

document.body.innerHTML = `<div id="forUIQueue" class="queueUIFlex-container">`

let FirstQueueUI = new QueueUI();
test('Testing constructor of AtmUI', () => {
    expect(typeof FirstQueueUI).toBe('object');
    expect(FirstQueueUI.hasOwnProperty('ChildQueueDiv')).toBeTruthy();
    expect(FirstQueueUI.hasOwnProperty('ChildQueueDivContent')).toBeTruthy();
    expect(FirstQueueUI.hasOwnProperty('ChildQueueDivClose')).toBeTruthy();
    expect(FirstQueueUI.ChildQueueDivClose.className).toBe('close2');
    expect(FirstQueueUI.ChildQueueDivContent.parentNode).toBe(FirstQueueUI.ChildQueueDiv);
    expect(FirstQueueUI.ChildQueueDivClose.parentNode).toBe(FirstQueueUI.ChildQueueDiv);
    expect(FirstQueueUI.ChildQueueDivContent.textContent).toBe('0');
});

test('Testing .showLenght of QueueUI', () => {
    FirstQueueUI.showLenght('12');
    expect(FirstQueueUI.ChildQueueDivContent.innerText).toBe('12');
});
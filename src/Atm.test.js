import Atm from './Atm';
test('Testing Atm', () => {
    let atm1 = new Atm();
    atm1.changeState();
    atm1.changeServedAmount();
    atm1.unsubscribeState();
    atm1.changeState();
})
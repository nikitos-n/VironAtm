import AtmUI from './AtmUI';

document.body.innerHTML = `<div id="forUIAtm" class="atmUIFlex-container">`

test('Testing ATMUI', () => {
    let atmUI1 = new AtmUI();
    atmUI1.changeStateUI();
    atmUI1.changeServedPeopleUI("12");
    atmUI1.changeStateUI();
})
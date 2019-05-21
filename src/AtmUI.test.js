import AtmUI from './AtmUI';

document.body.innerHTML = `<div id="forUIAtm" class="atmUIFlex-container">`

let FirstAtmUI = new AtmUI();
test('Testing constructor of AtmUI', () => {
    expect(typeof FirstAtmUI).toBe('object');
    expect(FirstAtmUI.hasOwnProperty('ChildAtmDiv')).toBeTruthy();
    expect(FirstAtmUI.hasOwnProperty('ChildAtmDivContent')).toBeTruthy();
    expect(FirstAtmUI.hasOwnProperty('ChildAtmDivClose')).toBeTruthy();
    expect(FirstAtmUI.ChildAtmDivClose.className).toBe('close1');
    expect(FirstAtmUI.ChildAtmDivContent.parentNode).toBe(FirstAtmUI.ChildAtmDiv);
    expect(FirstAtmUI.ChildAtmDivClose.parentNode).toBe(FirstAtmUI.ChildAtmDiv);
    expect(FirstAtmUI.ChildAtmDivContent.textContent).toBe('0');
});

test('Testing .changeStateUI of AtmUI', () => {
    FirstAtmUI.changeStateUI();
    expect(FirstAtmUI.ChildAtmDiv.style.backgroundColor).toBe('red');
    FirstAtmUI.changeStateUI();
    expect(FirstAtmUI.ChildAtmDiv.style.backgroundColor).toBe('aquamarine');
});


test('Testing .changeServedPeopleUI of AtmUI', () => { 
    FirstAtmUI.changeServedPeopleUI('12');
    expect(FirstAtmUI.ChildAtmDivContent.innerText).toBe('12');
});
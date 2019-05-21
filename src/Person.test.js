import Person from './Person';
let FirstPerson = new Person();

test('Testing constructor of Person', () => {
    expect(typeof FirstPerson).toBe('object');
    expect(FirstPerson.time).toBeLessThanOrEqual(5000);
    expect(FirstPerson.time).toBeGreaterThanOrEqual(2000);
});
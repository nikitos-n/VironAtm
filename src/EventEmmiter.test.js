import EventEmmiter from './EventEmmiter';

test('Testing .on in EventEmmiter', () => {
    let EvEm = new EventEmmiter();
    EvEm.on('start');
})
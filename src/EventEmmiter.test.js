import EventEmmiter from './EventEmmiter'

test('Testing .on in EventEmmiter', () => {
    let EvEm = new EventEmmiter();
    expect(typeof EvEm).toBe('object');
    expect(typeof EvEm.eventTable).toBe('object');
    let f = EvEm.on("test", () => console.log("Hello world!"));
    // EvEm.emit("test");
    // EvEm.on("test", (a) => console.log(a));
    // EvEm.emit("test");
    // EvEm.emit("test", 2);
    // f();
    // EvEm.emit("test");
    // EvEm.clearTable();
})
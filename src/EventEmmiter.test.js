import EventEmmiter from './EventEmmiter'

test('Testing .on in EventEmmiter', () => {
    let EvEm = new EventEmmiter();
    EvEm.emit("test");
    let f=EvEm.on("test",()=>console.log("Hello world!"));
    EvEm.on("test",(a)=>console.log(a));
    EvEm.emit("test");
    EvEm.emit("test",2);
    f();
    EvEm.emit("test");
    EvEm.clearTable();
})
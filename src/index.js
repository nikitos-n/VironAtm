"use strict"

import Atm from './Atm';
import App from './App';

let atm1 = new Atm(4, 5);
let atm2 = new Atm(5, 8);
let app1 = new App();
app1.addAtm(atm1);
app1.addAtm(atm2);
app1.startProcess(1, 3);
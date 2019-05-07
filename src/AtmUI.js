"use strict";   

export default class AtmUI{
    constructor() {
        this.ChildAtmDiv = document.createElement('div');
        this.ChildAtmDiv.className = "atmUIFlex-elements";
        document.getElementById("forUIAtm").appendChild(this.ChildAtmDiv);
        this.ChildAtmDiv.innerText=0;
    }

    changeStateUI(){
        if(this.ChildAtmDiv.style.backgroundColor=="aquamarine"){
            this.ChildAtmDiv.style.backgroundColor="red";
        }
        else if(this.ChildAtmDiv.style.backgroundColor=="red"){
            this.ChildAtmDiv.style.backgroundColor="aquamarine";
        }
    }

    changeServedPeopleUI(servedpeople){
        this.ChildAtmDiv.innerText=servedpeople;
    }
}
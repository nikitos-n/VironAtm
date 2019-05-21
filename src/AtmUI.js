"use strict";

export default class AtmUI {
    constructor() {
        this.ChildAtmDiv = document.createElement('div');
        this.ChildAtmDivContent = document.createElement('div');
        this.ChildAtmDivClose = document.createElement('div');
        this.ChildAtmDiv.className = "atmUIFlex-elements";
        this.ChildAtmDivClose.className = "close1";
        this.ChildAtmDivClose.setAttribute("data-title", "Удалить банкомат");
        this.ChildAtmDiv.appendChild(this.ChildAtmDivContent);
        this.ChildAtmDiv.appendChild(this.ChildAtmDivClose);
        document.getElementById("forUIAtm").appendChild(this.ChildAtmDiv);
        document.getElementById("forUIAtm").insertBefore(this.ChildAtmDiv, document.getElementById("insert1"));
        this.ChildAtmDivContent.textContent = 0;
    }

    changeStateUI() {
        this.ChildAtmDiv.style.backgroundColor = this.ChildAtmDiv.style.backgroundColor == "red" ? "aquamarine" : "red";
    }

    changeServedPeopleUI(servedpeople) {
        this.ChildAtmDivContent.innerText = servedpeople;
    }
}
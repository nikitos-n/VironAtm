export default class QueueUI{
    constructor() {
        this.ChildQueueDiv = document.createElement('div');
        this.ChildQueueDiv.className = "queueUIFlex-elements";
        document.getElementById("forUIQueue").appendChild(this.ChildQueueDiv);
    }
    
    showLenght(QueueLength){
        this.ChildQueueDiv.innerText=QueueLength;
    }
}
export default class QueueUI{
    constructor() {
        this.ChildQueueDiv = document.createElement('div');
        this.ChildQueueDivContent = document.createElement('div');
        this.ChildQueueDivClose = document.createElement('div');
        this.ChildQueueDiv.className = "queueUIFlex-elements";
        this.ChildQueueDivClose.className = "close2";
        this.ChildQueueDivClose.setAttribute("data-title","Убрать очередь");
        this.ChildQueueDiv.appendChild(this.ChildQueueDivContent);
        this.ChildQueueDiv.appendChild(this.ChildQueueDivClose);
        document.getElementById("forUIQueue").insertBefore(this.ChildQueueDiv,document.getElementById("insert2"));
        this.ChildQueueDivContent.textContent = 0;
    }
    
    showLenght(QueueLength){
        this.ChildQueueDivContent.innerText=QueueLength;
    }
}
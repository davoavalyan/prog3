// var clickCount = 0;
// function clickHandler(evt){
//    clickCount++;
//    console.log(evt);
//    var str = "Thanks for clicking " + clickCount;
//    this.innerText = str;
// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);

// function bodyClick(evt){
//     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
//  }
//  window.onclick = bodyClick;
//  function bodyClick(evt) {
//     console.log(evt.pageX, evt.pageY);
//  }
//  window.onclick = bodyClick;
//  function mouseClicked() {
//     console.log(mouseX, mouseY);
//  }
//   function windowLoad() {
//      console.log("Window is loaded");
//  }
//   window.onload = windowLoad;
//  function preload() {
//     console.log("Window is loaded");
//  }
//  function setup()
//  {
//      console.log(12);
//  }
//  function keydown(evt) {
//     console.log("You printed " + evt.key);
//  }
//  window.onkeydown = keydown;
//  function keyPressed() {
//     console.log(key);
//  }
 
io.on('connection', function (socket) {
    for(var i in messages) {
      io.sockets.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
 });
 
 function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   

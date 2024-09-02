var btn = document.getElementById("btn");
var win = window.open("about:blank", "_blank", "width=30,height=3,top=0,left=0");

var timer;

function stepDown(){
    timer = setInterval(function down() {
        win.moveBy(10, 10);
        win.focus();
        if(win.screenTop >= 550){
            clearInterval(timer)
            stepUp();
        }
    },100);    
}

function stepUp(){
    timer = setInterval(function up() {
        win.moveBy(-10, -10);
        win.focus();
        if(win.screenTop == 0){
            clearInterval(timer)
            stepDown();
        }
    },100);    
}
   


if(win.screenTop == 0){
    stepDown();
}



btn.addEventListener("click", function() {
    clearInterval(timer);
    win.focus(); 
})



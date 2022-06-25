canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var last_position_of_x,last_position_of_y;


color = "black"; 
width_of_line=1;
var width = screen.width;
new_width = width-70;
var height = screen.height;
new_height = height-300;

if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}



canvas.addEventListener("touchstart",myTouchStart);
function myTouchStart(e){
    color = document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",myTouchMove);
function myTouchMove(e){
   current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
   current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
   
   
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width_of_line;

       ctx.moveTo(last_position_of_x,last_position_of_y);
       ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
       ctx.stroke();

   

   last_position_of_x=current_position_of_touch_x;
   last_position_of_y=current_position_of_touch_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);


}

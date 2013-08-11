var ctx="";
var ctx2="";
var back = new Image();
back.src = 'images/back.jpg';
var diver = new Image();
diver.src = 'images/diver.png';

var dwidth = 66, 
        dheight = 63, 
        dframes = 2, 
          
        dcurrentFrame = 0;

var diverX = 20;
var diverY = 400;

function draw(){
  var canvas = document.getElementById('tutorial');
  ctx="";
  var canvas2 = document.getElementById('back');
  ctx2=canvas2.getContext('2d');
  ctx2.drawImage(back,0,0);
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
  }
  setInterval(render,1000/60);
}


var tick=0;
function render(){
	
	ctx.clearRect(diverX, diverY, dwidth, dheight); 
	diverX++;
	if (diverX>675) diverX = 20;
    ctx.drawImage(diver, 0, dheight * dcurrentFrame, dwidth, dheight, diverX, diverY, dwidth, dheight); 
        if (dcurrentFrame === dframes) { 
          dcurrentFrame = 0; 
        } else { 
          dcurrentFrame++; 
        } 
	
}
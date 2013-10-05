function Diver(){
  if (!(this instanceof Diver)) {
    return new Diver();
  }  
  this.width = 66;
  this.height = 63;
  this.frames = 2;
  this.currentFrame = 0;
  this.x = 20;
  this.y = 400;
  this.last_x = 20;
  this.last_y = 400;
  this.sprite = new Image();
  this.sprite.src = 'images/diver.png';
}

Diver.prototype.render = function(ctx){
    ctx.drawImage(this.sprite, 0, this.height * this.currentFrame, 
      this.width, this.height, this.x, this.y, 
      this.width, this.height); 
    if (this.currentFrame === this.frames) { 
      this.currentFrame = 0; 
    } else { 
      this.currentFrame++; 
    }
};

Diver.prototype.clear = function(ctx){
    ctx.clearRect(this.last_x, this.last_y, this.width, this.height);
    this.last_x = this.x;
    this.last_y = this.y;    
};

Diver.prototype.calculate = function(){    
    this.move();   
};

Diver.prototype.move = function(){
    this.x++;
    this.x++;
    this.x++;
    if (this.x>675) this.x = 20;
};


function Star(x, y, point){
  if (!(this instanceof Star)) {
    return new Star(x, y, point);
  }  
  this.width = 46;
  this.height = 43;
  this.x = x - this.width/2-7;
  this.y = y - this.height/2-7;
  this.last_x = this.x;
  this.last_y = this.y;
  this.point = point;
  this.sprite = new Image();
  var src = 'images/tf-star'+point+'.png';
  this.sprite.src = src;
}

Star.prototype.render = function(ctx){
    ctx.drawImage(this.sprite, 0, 0, 
      this.width, this.height, this.x, this.y, 
      this.width, this.height);    
};

Star.prototype.clear = function(ctx){
    ctx.clearRect(this.last_x, this.last_y, this.width, this.height);
    this.last_x = this.x;
    this.last_y = this.y;    
};

Star.prototype.calculate = function(){    
    this.move();   
};

Star.prototype.move = function(){    
};

var diverGame = {
  ctx: {},
  ctxStar: {},
  diver_array: [],
  star_array: [],

  func_init: function(){
    var canvas = document.getElementById('back');
    var ctx =canvas.getContext('2d');
    var back = new Image();
    back.src = 'images/back.jpg';    
    back.onload = function(){
      ctx.drawImage(back,0,0);
    }

    canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      this.ctx = canvas.getContext('2d');
    }
	
	canvas = document.getElementById('ui');
    if (canvas.getContext) {
      this.ctxStar = canvas.getContext('2d');
    }		
	var self = this;
	canvas.addEventListener("mousedown", function(event){self.func_add_star(event);}, false);
	
  },

  func_draw: function(){
    this.func_init();    
    var self = this;
    setInterval(function(){self.func_render();},1000/60);
  },

  func_render: function(){
    if(this.diver_array.length > 0){
      for(var i in this.diver_array){
        this.diver_array[i].calculate();        
      }	  
      for(var i in this.diver_array){
        this.diver_array[i].clear(this.ctx);        
      }	  
      for(var i in this.diver_array){
        this.diver_array[i].render(this.ctx);        
      }	  
    }
	if(this.star_array.length > 0){
      for(var i in this.star_array){
        this.star_array[i].calculate();        
      }	  
      for(var i in this.star_array){
        this.star_array[i].clear(this.ctxStar);        
      }	  
      for(var i in this.star_array){
        this.star_array[i].render(this.ctxStar);        
      }	  
    }
  },

  func_add_diver: function(){
    this.diver_array.push(new Diver());
  },

  func_remove_diver: function(){
    var diver = this.diver_array.pop();
	diver.clear(this.ctx);
  },
  
  func_add_star: function(event){
	var x = event.x;
	var y = event.y;

	var canvas = document.getElementById('ui');
	var point = Math.round(Math.random() * (10 - 1) + 1);

	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;

	console.log('point:'+point+' x:' + x + ' y:' + y);
	
	this.star_array.push(new Star(x,y,point));
  }
}

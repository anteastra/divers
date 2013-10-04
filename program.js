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

var diverGame = {
  ctx: "",
  diver_array: [],

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
  },

  func_add_diver: function(){
    this.diver_array.push(new Diver());
  },

  func_remove_diver: function(){
    this.diver_array.pop();
  }
}




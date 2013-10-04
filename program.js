﻿function Diver(){
  if (!(this instanceof Diver)) {
    return new Diver();
  }  
  this.width = 66;
  this.height = 63;
  this.frames = 2;
  this.currentFrame = 0;
  this.x = 20;
  this.y = 400;
  this.sprite = new Image();
  this.sprite.src = 'images/diver.png';
}

Diver.prototype.render = function(ctx){
    ctx.clearRect(this.x, this.y, this.width, this.height); 
    this.move();
    if (this.x>675) this.x = 20;
    ctx.drawImage(this.sprite, 0, this.height * this.currentFrame, 
      this.width, this.height, this.x, this.y, 
      this.width, this.height); 
    if (this.currentFrame === this.frames) { 
      this.currentFrame = 0; 
    } else { 
      this.currentFrame++; 
    }
};

Diver.prototype.move = function(){
    this.x++;
    this.x++;
    this.x++;
};

var diverGame = {
  ctx: "",
  ctx2: "",
  back: new Image(),
  diver: new Image(),
  diver_array: [],

  func_init: function(){
    this.back.src = 'images/back.jpg';
    this.diver.src = 'images/diver.png';
  },

  func_draw: function(){
    this.func_init();
    var canvas = document.getElementById('tutorial');
    this.ctx="";
    var canvas2 = document.getElementById('back');
    this.ctx2=canvas2.getContext('2d');
    this.ctx2.drawImage(this.back,0,0);
    if (canvas.getContext) {
      this.ctx = canvas.getContext('2d');
    }
    var self = this;
    setInterval(function(){self.func_render();},1000/60);
  },

  func_render: function(){
    if(this.diver_array.length > 0){
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




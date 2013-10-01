function Diver(){
  var that = {};
  that.width = 66;
  that.height = 63;
  that.frames = 2;
  that.currentFrame = 0;
  that.x = 20;
  that.y = 400;
  that.sprite = new Image();
  that.sprite.src = 'images/diver.png';

  that.render = function(ctx){
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

  that.move = function(){
    this.x++;
    this.x++;
    this.x++;
  }

  return that;
}

var diver = new Diver();

var diverGame = {
  ctx: "",
  ctx2: "",
  back: new Image(),
  diver: new Image(),
  loc_diver: diver,

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
    this.loc_diver.render(this.ctx);    
  }
}




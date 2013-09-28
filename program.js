var diver = {
  width: 66,
  height: 63,
  frames: 2, 
  currentFrame: 0,
  x: 20,
  y: 400
};

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
    this.ctx.clearRect(this.loc_diver.x, this.loc_diver.y, this.loc_diver.width, this.loc_diver.height); 
    this.loc_diver.x++;
    this.loc_diver.x++;
    this.loc_diver.x++;
    if (this.loc_diver.x>675) this.loc_diver.x = 20;
    this.ctx.drawImage(this.diver, 0, this.loc_diver.height * this.loc_diver.currentFrame, 
      this.loc_diver.width, this.loc_diver.height, this.loc_diver.x, this.loc_diver.y, 
      this.loc_diver.width, this.loc_diver.height); 
    if (this.loc_diver.currentFrame === this.loc_diver.frames) { 
      this.loc_diver.currentFrame = 0; 
    } else { 
      this.loc_diver.currentFrame++; 
    }
  }
}




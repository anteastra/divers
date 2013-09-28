var diverGame = {
  ctx: "",
  ctx2: "",
  back: new Image(),
  diver: new Image(),
  dwidth: 66,
  dheight: 63,
  dframes: 2, 
  dcurrentFrame: 0,
  diverX: 20,
  diverY: 400,

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
    this.ctx.clearRect(this.diverX, this.diverY, this.dwidth, this.dheight); 
    this.diverX++;
    this.diverX++;
    this.diverX++;
    if (this.diverX>675) this.diverX = 20;
    this.ctx.drawImage(this.diver, 0, this.dheight * this.dcurrentFrame, this.dwidth, this.dheight, this.diverX, this.diverY, this.dwidth, this.dheight); 
        if (this.dcurrentFrame === this.dframes) { 
          this.dcurrentFrame = 0; 
        } else { 
          this.dcurrentFrame++; 
        }
  }
}


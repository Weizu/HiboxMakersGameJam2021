export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
  
    // load images
    this.load.image('mountain', 'assets/mountain.png');
    this.load.image('character', 'assets/charfaceidle.png');

    
    this.load.image('wolf', 'assets/wolf.png');
    this.load.image('dog', 'assets/dog.png');


  }
 
  create () {

    this.add.image(1000, 200, 'mountain');
    //this.cameras.main.centerOn(100, 100);

    this.player = this.add.sprite(450, 450, 'character');

    this.cameras.main.setZoom(1);

    this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

      if(this.cameras.main.zoom >= 0.1) {
        this.cameras.main.zoom += deltaY * 0.1;
      }
      else {
        this.cameras.main.zoom = 0.1;
      }


      if(this.cameras.main.zoom <= 1.5) {
        this.cameras.main.zoom += deltaX * 0.1;
      }
      else {
        this.cameras.main.zoom = 1.5;
      }
      
    });
    
    this.levels = {
      'level1':{
        'path':[0, 0, 100, 100]
      },
      'level2':{
        'path':[100, 100, 200, 200]
      },
      'level3':{
        'path':[200, 200, 300, 300]
      },
    }

  }

  update () {
        
    /*if(this.cameras.main.zoom >= 0.5) {
    }
    if(this.cameras.main.zoom < 0.5) {
      this.player.x +=5;
      
    }
    console.log(this.cameras.main.zoom);*/

  }


};
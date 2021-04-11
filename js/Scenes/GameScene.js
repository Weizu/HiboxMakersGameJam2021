export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  levels = {
    level1() {
        

      if(this.cameras.main.zoom >= 1.5) {
        this.player.x +=5;
      }
      /*if(this.cameras.main.zoom < 1.5) {
        
      }*/

    },
    level2() {
      
    },
    level3() {
      
    }
  }

  preload () {
  
    // load images
    this.load.image('mountain', 'assets/mountain.png');
    this.load.image('character', 'assets/character.png');

    
    this.load.image('wolf', 'assets/wolf.png');
    this.load.image('dog', 'assets/dog.png');
  }
 
  create () {

    this.add.image(1000, 200, 'mountain');
    //this.cameras.main.centerOn(100, 100);

    this.player = this.add.sprite(450, 450, 'character');

    this.cameras.main.setZoom(1);

    this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

      if(this.cameras.main.zoom >= 0.01) {
        this.cameras.main.zoom += deltaY * 0.01;
      }
      else {
        this.cameras.main.zoom = 0.01;
      }
      
    });
  }

  update () {
    
    level1();

  }


};
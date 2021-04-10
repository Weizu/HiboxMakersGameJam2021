export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
  
    // load images
    this.load.image('mountain', 'assets/mountain.png');
    this.load.image('character', 'assets/character.png');
  }
 
  create () {

    this.add.image(1000, 200, 'mountain');
    //this.cameras.main.centerOn(100, 100);

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

  }
};
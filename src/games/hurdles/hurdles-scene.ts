import Phaser from 'phaser'
import { SCENE_KEYS } from '../../constants/scene-keys'
import { VIEWPORT } from '../../constants/viewport';
import { HurdlesPlayer } from './hurdles-player';
import { CharacterID } from '../../constants/characters';
import { HurdlesComputerPlayer } from './hurdle-computer-player';
import { Background } from '../../components/background';
import { Timer } from '../../components/timer';

const numHurdles = 10;
const hurdleSpacing = 250;
const worldWidth = (numHurdles + 1) * hurdleSpacing;
const groundY = VIEWPORT.HEIGHT - 96;

export class HurdlesScene extends Phaser.Scene {
  player!: HurdlesPlayer;
  computerPlayers!: HurdlesComputerPlayer[];
  ground!: Phaser.GameObjects.TileSprite;
  hurdles!: Phaser.Physics.Arcade.Sprite[];

  constructor() {
    super({ key: SCENE_KEYS.games.HURDLES });
  }

  create() {
    this.createTrack();
    this.addPlayers();
    this.addPhysics();
    this.addWinCondition();

    const timer = new Timer(this, VIEWPORT.CENTER_WIDTH, 100)
    timer.text.setScrollFactor(0);
    timer.start();

    this.cameras.main.setBounds(0, 0, worldWidth, VIEWPORT.HEIGHT);
    this.cameras.main.startFollow(this.player.sprite);

    this.sound.play('music/race', { loop: true });
  }

  update() {
    this.player.update();
    this.computerPlayers.forEach(c => c.update());
  }

  private createTrack() {
     (new Background(this)).tileSprite.setScrollFactor(0);

    this.ground = this.add.tileSprite(0, groundY, worldWidth, 96, 'hurdles-ground')
      .setOrigin(0);

    this.hurdles = Array.from({ length: numHurdles }, (v, i) => {
      return this.physics.add.sprite((i + 1) * hurdleSpacing, groundY - 8, 'hurdles-hurdle')
    });
  }

  private addPlayers() {
    this.player = new HurdlesPlayer(this, CharacterID.VIRTUAL_GUY);
    this.computerPlayers = [
      new HurdlesComputerPlayer(this, CharacterID.MASK_DUDE),
      new HurdlesComputerPlayer(this, CharacterID.NINJA_FROG),
      new HurdlesComputerPlayer(this, CharacterID.PINK_MAN),
    ];
  }

  private addPhysics() {
    this.physics.world.setBounds(0, 0, worldWidth, VIEWPORT.HEIGHT);
    this.physics.world.setBoundsCollision(false, true, false, false);

    this.physics.add.existing(this.ground);
    (this.ground.body as Phaser.Physics.Arcade.Body).immovable = true;
    (this.ground.body as Phaser.Physics.Arcade.Body).allowGravity = false;

    this.hurdles.forEach(hurdle => {
      (hurdle.body as Phaser.Physics.Arcade.Body)
        .setGravityY(400)
        .setCollideWorldBounds(true)
        .setDragX(200);

      this.physics.add.collider(hurdle, this.ground);
      this.physics.add.collider(hurdle, this.player.sprite, () => {
        hurdle.setVelocityX(Phaser.Math.RND.between(100, 200));
        if (!hurdle.body.touching.up) {
          hurdle.setVelocityY(Phaser.Math.RND.between(-150, -250));
        }
      });

      this.computerPlayers.forEach(computer => {
        this.physics.add.collider(hurdle, computer.sprite, () => {
          hurdle.setVelocityX(Phaser.Math.RND.between(100, 200));
          if (!hurdle.body.touching.up) {
            hurdle.setVelocityY(Phaser.Math.RND.between(-150, -250));
          }
        });
      })
    });
  }

  addWinCondition() {
    this.physics.world.on(Phaser.Physics.Arcade.Events.WORLD_BOUNDS, () => {
      const positions = [
        {
          characterID: this.player.character.id,
          x: this.player.sprite.x
        },
        ...this.computerPlayers.map(c => {
          return {
            characterID: c.character.id,
            x: c.sprite.x
          }
        })
      ].sort((a, b) => b.x - a.x);

      this.sound.stopByKey('music/race');
      this.scene.start(SCENE_KEYS.GAME_RESULTS, {
        name: 'HURDLES',
        first: positions[0].characterID,
        second: positions[1].characterID,
        third: positions[2].characterID,
      });
    });
  }
}

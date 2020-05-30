import Phaser from 'phaser';

import { SCENE_KEYS } from '../constants/scene-keys';
import { VIEWPORT } from '../constants/viewport';
import { Background } from '../components/background';

export class TitleScene extends Phaser.Scene {
  background!: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: SCENE_KEYS.TITLE });
  }

  create() {
    new Background(this);

    this.add.bitmapText(VIEWPORT.WIDTH / 2, 100, 'matchup-64-glow', 'One Button Olympics!')
      .setOrigin(0.5)

    this.add.bitmapText(VIEWPORT.WIDTH / 2, VIEWPORT.HEIGHT / 2, 'matchup-36-white', 'Hurdles')
      .setOrigin(0.5)
      .setInteractive()
      .once(Phaser.Input.Events.POINTER_DOWN, () => this.startEvent(SCENE_KEYS.games.HURDLES));

    this.sound.play('music/title', { loop: true });
  }

  startEvent(sceneKey: string) {
    this.sound.stopByKey('music/title');
    this.scene.start(sceneKey);
  }
}

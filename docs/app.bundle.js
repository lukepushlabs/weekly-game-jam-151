!function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(h&&h(e);l.length;)l.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={0:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var h=c;a.push([1462,1]),i()}({1462:function(t,e,i){"use strict";i.r(e);var s=i(35),n=i.n(s),a=i(15),r=i.n(a),o=i(18),c=i.n(o),u=i(48),h=i.n(u),d=i(49),l=i.n(d),p=i(33),f=i.n(p),m={WIDTH:640,HEIGHT:400,CENTER_WIDTH:320,CENTER_HEIGHT:200},g="preload",y="title",v={HURDLES:"hurdles",BALANCE_BEAM:"balance-beam"},b="game-results";function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=f()(t);if(e){var n=f()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return l()(this,i)}}var w=function(t){h()(i,t);var e=k(i);function i(){return r()(this,i),e.call(this,{key:g})}return c()(i,[{key:"preload",value:function(){this.cameras.main.setBackgroundColor(4007227),this.setUpProgressBar(),this.load.audio("music/event-results",["assets/music/event-results.mp3","assets/music/event-results.ogg"]),this.load.audio("music/final-results",["assets/music/final-results.mp3","assets/music/final-results.ogg"]),this.load.audio("music/other-event",["assets/music/other-event.mp3","assets/music/other-event.ogg"]),this.load.audio("music/race",["assets/music/race.mp3","assets/music/race.ogg"]),this.load.audio("music/title",["assets/music/title.mp3","assets/music/title.ogg"]),this.load.bitmapFont("matchup-64-glow","assets/fonts/matchup-64-glow.png","assets/fonts/matchup-64-glow.xml"),this.load.bitmapFont("matchup-48","assets/fonts/matchup-48.png","assets/fonts/matchup-48.xml"),this.load.bitmapFont("matchup-24-white","assets/fonts/matchup-24-white.png","assets/fonts/matchup-24-white.xml"),this.load.bitmapFont("matchup-36-white","assets/fonts/matchup-36-white.png","assets/fonts/matchup-36-white.xml"),this.load.image("background-blue","assets/pack/Background/Blue.png"),this.load.image("background-brown","assets/pack/Background/Brown.png"),this.load.image("background-gray","assets/pack/Background/Gray.png"),this.load.image("background-green","assets/pack/Background/Green.png"),this.load.image("background-pink","assets/pack/Background/Pink.png"),this.load.image("background-purple","assets/pack/Background/Purple.png"),this.load.image("background-yellow","assets/pack/Background/Yellow.png"),this.load.image("podium-first","assets/podiums/first.png"),this.load.image("podium-second","assets/podiums/second.png"),this.load.image("podium-third","assets/podiums/third.png"),this.load.animation("virtual-guy-animations","assets/characters/virtual-guy.animations.json"),this.load.spritesheet("virtual-guy","assets/characters/virtual-guy.png",{frameWidth:32,frameHeight:32}),this.load.animation("mask-dude-animations","assets/characters/mask-dude.animations.json"),this.load.spritesheet("mask-dude","assets/characters/mask-dude.png",{frameWidth:32,frameHeight:32}),this.load.animation("ninja-frog-animations","assets/characters/ninja-frog.animations.json"),this.load.spritesheet("ninja-frog","assets/characters/ninja-frog.png",{frameWidth:32,frameHeight:32}),this.load.animation("pink-man-animations","assets/characters/pink-man.animations.json"),this.load.spritesheet("pink-man","assets/characters/pink-man.png",{frameWidth:32,frameHeight:32}),this.load.image("timing-bar","assets/timing-bar.png"),this.load.spritesheet("flag","assets/components/flag.png",{frameWidth:64,frameHeight:64}),this.load.animation("flag-animations","assets/components/flag.animations.json"),this.load.image("hurdles-ground","assets/games/hurdles/ground.png"),this.load.spritesheet("hurdles-hurdle","assets/games/hurdles/hurdle.spritesheet.png",{frameWidth:26,frameHeight:20}),this.load.image("beam","assets/games/balance-beam/beam.png"),this.load.image("beam-edge","assets/games/balance-beam/beam-edge.png"),this.load.image("beam-legs","assets/games/balance-beam/beam-legs.png")}},{key:"create",value:function(){this.scene.start(y)}},{key:"setUpProgressBar",value:function(){var t=m.WIDTH/2,e=m.HEIGHT/2,i=(this.add.rectangle(t-75,e,150,40,14306872).setOrigin(0,.5),this.add.rectangle(t-75+3,e,0,34,15633710).setOrigin(0,.5));this.load.on(Phaser.Loader.Events.PROGRESS,(function(t){var e=144*t;i.width=e}))}}]),i}(Phaser.Scene),x=function(){function t(e){var i=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m.WIDTH,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:m.HEIGHT;r()(this,t),this.tileSprite=void 0,this.dx=void 0,this.dy=void 0;var c=Phaser.Math.RND.pick(["background-blue","background-brown","background-gray","background-green","background-pink","background-purple","background-yellow"]);this.tileSprite=e.add.tileSprite(s,n,a,o,c).setOrigin(0),this.dx=1*Phaser.Math.RND.sign(),this.dy=1*Phaser.Math.RND.sign(),e.events.on(Phaser.Scenes.Events.POST_UPDATE,this.update,this),e.events.once(Phaser.Scenes.Events.SHUTDOWN,(function(){e.events.off(Phaser.Scenes.Events.POST_UPDATE,i.update,i)}))}return c()(t,[{key:"update",value:function(){this.tileSprite.tilePositionX+=this.dx,this.tileSprite.tilePositionY+=this.dy}}]),t}();function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=f()(t);if(e){var n=f()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return l()(this,i)}}var E,D,I=function(t){h()(i,t);var e=T(i);function i(){var t;return r()(this,i),(t=e.call(this,{key:y})).background=void 0,t}return c()(i,[{key:"create",value:function(){var t=this;new x(this),this.add.bitmapText(m.WIDTH/2,100,"matchup-64-glow","One Button Olympics!").setOrigin(.5),this.add.bitmapText(m.WIDTH/2,m.HEIGHT/2,"matchup-36-white","Hurdles").setOrigin(.5).setInteractive().once(n.a.Input.Events.POINTER_DOWN,(function(){return t.startEvent(v.HURDLES)})),this.add.bitmapText(m.WIDTH/2,m.HEIGHT/2+50,"matchup-36-white","Balance Beam").setOrigin(.5).setInteractive().once(n.a.Input.Events.POINTER_DOWN,(function(){return t.startEvent(v.BALANCE_BEAM)})),this.sound.play("music/title",{loop:!0})}},{key:"startEvent",value:function(t){this.sound.stopByKey("music/title"),this.scene.start(t)}}]),i}(n.a.Scene),H=i(553),P=i.n(H),S=i(125),R=i.n(S);!function(t){t.VIRTUAL_GUY="VIRTUAL_GUY",t.MASK_DUDE="MASK_DUDE",t.NINJA_FROG="NINJA_FROG",t.PINK_MAN="PINK_MAN"}(D||(D={}));var N=(E={},R()(E,D.VIRTUAL_GUY,{id:D.VIRTUAL_GUY,name:"Virtual Guy",texture:"virtual-guy"}),R()(E,D.MASK_DUDE,{id:D.MASK_DUDE,name:"Mask Dude",texture:"mask-dude"}),R()(E,D.NINJA_FROG,{id:D.NINJA_FROG,name:"Ninja Frog",texture:"ninja-frog"}),R()(E,D.PINK_MAN,{id:D.PINK_MAN,name:"Pink Man",texture:"pink-man"}),E),O=function(){function t(e,i){var s=this;r()(this,t),this.character=void 0,this.sprite=void 0,this.hasJumped=void 0,this.character=N[i],this.hasJumped=!1,this.sprite=e.physics.add.sprite(20,m.HEIGHT-96-16,this.character.texture),this.sprite.anims.play("".concat(this.character.texture,"-run")),e.physics.add.collider(this.sprite,e.ground),this.sprite.body.setGravity(0,400).setAccelerationX(100).setMaxSpeed(600).setBounce(.2,.2).setCollideWorldBounds(!0),this.sprite.body.onWorldBounds=!0;var n=function(){s.hasJumped||(s.hasJumped=!0,s.sprite.setVelocityY(-150),s.sprite.anims.play("".concat(s.character.texture,"-jump")))};e.input.on("pointerdown",n),e.input.keyboard.on("keydown-SPACE",n),e.events.on(Phaser.Scenes.Events.SHUTDOWN,(function(){e.input.off("pointerdown",n),e.input.keyboard.off("keydown-SPACE",n),s.sprite.destroy()}))}return c()(t,[{key:"update",value:function(){this.sprite.body.velocity.y>0&&this.sprite.anims.play("".concat(this.character.texture,"-fall"),!0),this.sprite.body.touching.down&&(this.sprite.anims.play("".concat(this.character.texture,"-run"),!0),this.hasJumped=!1)}}]),t}(),A=function(){function t(e,i){var s=this;r()(this,t),this.character=void 0,this.sprite=void 0,this.hasJumped=void 0,this.character=N[i],this.hasJumped=!1,this.sprite=e.physics.add.sprite(20,m.HEIGHT-96-16,this.character.texture),this.sprite.anims.play("".concat(this.character.texture,"-run")),e.physics.add.collider(this.sprite,e.ground),this.sprite.body.setGravity(0,400).setAccelerationX(100).setMaxSpeed(600).setBounce(.2,.2).setCollideWorldBounds(!0),this.sprite.body.onWorldBounds=!0,e.events.on(Phaser.Scenes.Events.SHUTDOWN,(function(){s.sprite.destroy()}))}return c()(t,[{key:"update",value:function(){(this.sprite.body.velocity.y>0&&this.sprite.anims.play("".concat(this.character.texture,"-fall"),!0),this.sprite.body.touching.down)?(this.sprite.anims.play("".concat(this.character.texture,"-run"),!0),this.hasJumped=!1):Phaser.Math.RND.pick([!0,!1,!1])&&!this.hasJumped&&(this.hasJumped=!0,this.sprite.anims.play("".concat(this.character.texture,"-jump")),this.sprite.setVelocityY(-150))}}]),t}();function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=f()(t);if(e){var n=f()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return l()(this,i)}}var B=m.HEIGHT-96,W=function(t){h()(i,t);var e=_(i);function i(){var t;return r()(this,i),(t=e.call(this,{key:v.HURDLES})).player=void 0,t.computerPlayers=void 0,t.ground=void 0,t.hurdles=void 0,t}return c()(i,[{key:"create",value:function(){this.createTrack(),this.addPlayers(),this.addPhysics(),this.addWinCondition(),this.cameras.main.setBounds(0,0,2750,m.HEIGHT),this.cameras.main.startFollow(this.player.sprite),this.sound.play("music/race",{loop:!0})}},{key:"update",value:function(){this.player.update(),this.computerPlayers.forEach((function(t){return t.update()}))}},{key:"createTrack",value:function(){var t=this;new x(this).tileSprite.setScrollFactor(0),this.ground=this.add.tileSprite(0,B,2750,96,"hurdles-ground").setOrigin(0),this.hurdles=Array.from({length:10},(function(e,i){return t.physics.add.sprite(250*(i+1),B-8,"hurdles-hurdle")}))}},{key:"addPlayers",value:function(){this.player=new O(this,D.VIRTUAL_GUY),this.computerPlayers=[new A(this,D.MASK_DUDE),new A(this,D.NINJA_FROG),new A(this,D.PINK_MAN)]}},{key:"addPhysics",value:function(){var t=this;this.physics.world.setBounds(0,0,2750,m.HEIGHT),this.physics.world.setBoundsCollision(!1,!0,!1,!1),this.physics.add.existing(this.ground),this.ground.body.immovable=!0,this.ground.body.allowGravity=!1,this.hurdles.forEach((function(e){e.body.setGravityY(400).setCollideWorldBounds(!0).setDragX(200),t.physics.add.collider(e,t.ground),t.physics.add.collider(e,t.player.sprite,(function(){e.setVelocityX(n.a.Math.RND.between(100,200)),e.body.touching.up||e.setVelocityY(n.a.Math.RND.between(-150,-250))})),t.computerPlayers.forEach((function(i){t.physics.add.collider(e,i.sprite,(function(){e.setVelocityX(n.a.Math.RND.between(100,200)),e.body.touching.up||e.setVelocityY(n.a.Math.RND.between(-150,-250))}))}))}))}},{key:"addWinCondition",value:function(){var t=this;this.physics.world.on(n.a.Physics.Arcade.Events.WORLD_BOUNDS,(function(){var e=[{characterID:t.player.character.id,x:t.player.sprite.x}].concat(P()(t.computerPlayers.map((function(t){return{characterID:t.character.id,x:t.sprite.x}})))).sort((function(t,e){return e.x-t.x}));t.sound.stopByKey("music/race"),t.scene.start(b,{name:"HURDLES",first:e[0].characterID,second:e[1].characterID,third:e[2].characterID})}))}}]),i}(n.a.Scene);function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=f()(t);if(e){var n=f()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return l()(this,i)}}var M=function(t){h()(i,t);var e=G(i);function i(){var t;return r()(this,i),(t=e.call(this,{key:b})).background=void 0,t}return c()(i,[{key:"create",value:function(t){var e=this;this.sound.play("music/event-results",{loop:!0}),new x(this),this.add.bitmapText(m.WIDTH/2,120,"matchup-48",t.name).setOrigin(.5).setLetterSpacing(2),this.add.bitmapText(m.WIDTH/2,m.HEIGHT-40,"matchup-36-white","Back to Event List").setOrigin(.5).setInteractive().once(Phaser.Input.Events.POINTER_DOWN,(function(){e.sound.stopByKey("music/event-results"),e.scene.start(y)}));var i={first:{x:m.WIDTH/2,y:m.HEIGHT/2+60,height:60},second:{x:m.WIDTH/2-60,y:m.HEIGHT/2+60,height:40},third:{x:m.WIDTH/2+60,y:m.HEIGHT/2+60,height:20}};this.add.image(i.second.x,i.second.y,"podium-second").setOrigin(.5,1),this.add.image(i.first.x,i.first.y,"podium-first").setOrigin(.5,1),this.add.image(i.third.x,i.third.y,"podium-third").setOrigin(.5,1);var s=N[t.first];this.add.sprite(i.first.x,i.first.y-i.first.height,s.texture,0).setOrigin(.5,1);var n=N[t.second];this.add.sprite(i.second.x,i.second.y-i.second.height,n.texture,0).setOrigin(.5,1);var a=N[t.third];this.add.sprite(i.third.x,i.third.y-i.third.height,a.texture,0).setOrigin(.5,1),this.add.bitmapText(i.first.x,i.first.y,"matchup-24-white","1st").setOrigin(.5,0),this.add.bitmapText(i.second.x,i.second.y,"matchup-24-white","2nd").setOrigin(.5,0),this.add.bitmapText(i.third.x,i.third.y,"matchup-24-white","3rd").setOrigin(.5,0)}}]),i}(Phaser.Scene),U=function(){function t(e,i,s){r()(this,t),this.scene=void 0,this.selectorTween=void 0,this.container=void 0,this.bar=void 0,this.greenZone=void 0,this.selector=void 0,this.scene=e,this.container=e.add.container(i,s,[this.bar=e.add.sprite(0,0,"timing-bar"),this.greenZone=e.add.rectangle(0,0,100,this.bar.height-14,7512349),this.selector=e.add.rectangle(-this.bar.width/2+7,0,5,this.bar.height-14,14807956)]),this.selectorTween=this.scene.tweens.add({targets:this.selector,props:{x:this.bar.width/2-7},yoyo:!0,loop:-1,duration:1e3,paused:!0})}return c()(t,[{key:"select",value:function(){var t=this.greenZone.x-this.greenZone.width/2,e=this.greenZone.x+this.greenZone.width/2;return t<=this.selector.x&&this.selector.x<=e}},{key:"animateSelector",value:function(){this.selectorTween.play()}}]),t}(),j=function t(e,i,s,n){r()(this,t),this.sprite=void 0;var a=N[n].texture;this.sprite=e.add.sprite(i,s,a)},C=function(){function t(e,i,s){r()(this,t),this.sprite=void 0,this.sprite=e.add.sprite(i,s,"flag")}return c()(t,[{key:"playWave",value:function(){this.sprite.anims.play("flag-wave")}}]),t}(),L=function(){function t(e,i,s){var n=this;r()(this,t),this.scene=void 0,this.timer=void 0,this.seconds=void 0,this.text=void 0,this.scene=e,this.text=e.add.bitmapText(i,s,"matchup-36-white","00:00").setOrigin(.5),this.seconds=0,this.timer=e.time.addEvent({loop:!0,delay:1e3,paused:!0,callback:function(){return n.tick()}})}return c()(t,[{key:"start",value:function(){this.timer.paused=!1}},{key:"tick",value:function(){this.seconds+=1;var t=Math.round(this.seconds/60),e=this.seconds%60;this.text.setText("".concat(String(t).padStart(2,"0"),":").concat(String(e).padStart(2,"0")))}},{key:"getSeconds",value:function(){}}]),t}();function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=f()(t);if(e){var n=f()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return l()(this,i)}}var K=[w,I,M,W,function(t){h()(i,t);var e=J(i);function i(){var t;return r()(this,i),(t=e.call(this,{key:v.BALANCE_BEAM})).timingBar=void 0,t.player=void 0,t.flag=void 0,t}return c()(i,[{key:"create",value:function(){this.sound.play("music/race",{loop:!0}),new x(this),this.flag=new C(this,575,263),this.flag.sprite.setScale(2),this.flag.playWave(),new L(this,m.CENTER_WIDTH,100).start(),this.timingBar=new U(this,m.CENTER_WIDTH,150);var t=m.WIDTH-64;this.add.container(m.CENTER_WIDTH,m.HEIGHT-64,[this.add.image(0,53,"beam-legs"),this.add.image(-1*t/2-1,0,"beam-edge"),this.add.tileSprite(0,0,t,19,"beam"),this.add.image(t/2+1,0,"beam-edge")]),this.player=new j(this,100,295,D.VIRTUAL_GUY),this.player.sprite.scale=2,this.start()}},{key:"start",value:function(){var t=this,e=function(){t.timingBar.select()?t.tweens.add({targets:t.player.sprite,props:{x:"+=".concat(Phaser.Math.RND.between(75,150))},duration:400,onComplete:function(){t.player.sprite.x+t.player.sprite.width>t.flag.sprite.x&&(t.tweens.killAll(),t.sound.stopByKey("music/race"),t.scene.start(b,{name:"BALANCE BEAM",first:D.VIRTUAL_GUY,second:D.NINJA_FROG,third:D.PINK_MAN}))}}):t.cameras.main.shake(100,.01)};this.input.on("pointerdown",e),this.input.keyboard.on("keydown-SPACE",e),this.events.on(Phaser.Scenes.Events.SHUTDOWN,(function(){t.input.off("pointerdown",e),t.input.keyboard.off("keydown-SPACE",e)})),this.timingBar.animateSelector()}}]),i}(Phaser.Scene)];new n.a.Game({width:m.WIDTH,height:m.HEIGHT,scene:K,render:{pixelArt:!0},physics:{default:"arcade",arcade:{}}})}});
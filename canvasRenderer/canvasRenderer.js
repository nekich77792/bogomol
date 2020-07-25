import {drawAxes, drawSqrt} from './../graph'
import forestboy from './../ForestBoy.png'
import enemySheet from './../enemies.png'
import lavaSheet from './../assets/lavaman.png'
import cacoSheet from './../assets/cacodaemon-combined.png'
import mechSheet from './../assets/mech.png'
import {HERO, ENEMY1, JUMP, GO,IDLE, DEATH, LAVAMAN, CACO, MECH} from './../classes'
import {Sprite, Anim} from './sprite'
import {} from './../levelEditor'


// 22:36 воры уехали...

const sprites = new Map()
const cam = {x:250,y:0}

let ctx;

export function initRender(){

	const canvas = document.getElementById('tututu');
	ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
}


export function loadAssets(state){

	// HERO
	const heroSprite = createHeroSprite();
	sprites.set(state.hero, heroSprite);

	// ENEMY1
	//const enemy = createEnemy1Sprite();

	for(let i = 0;i < state.enemies.length; i++){
		let enemy = state.enemies[i]
		switch (enemy.type) {
			case ENEMY1: sprites.set (enemy ,createEnemy1Sprite(enemy) )
				break;
			case LAVAMAN: sprites.set (enemy ,createLavamanSprite(enemy) )
				break;
			case CACO: sprites.set (enemy ,createCacoSprite(enemy) )
				break;
			case MECH: sprites.set (enemy ,createMechSprite(enemy) )
				break;	
		}
		

	}
	//sprites.set(ENEMY1, enemy);



}

function createHeroSprite (){
	const anims  = new Map()
	//n, x0, y0, w, h,spriteTime , shift
	anims.set(GO,       new Anim(6, 11, 43, 16, 17, 5))
	anims.set(IDLE,     new Anim(3, 11, 12, 16, 18, 14))
	anims.set(JUMP,     new Anim(3, 59, 44, 16, 18, 10))
	anims.set("attack", new Anim(4, 8, 122, 26, 18, 5, 6))

	const heroImage = new Image();
	heroImage.src = forestboy;
	//console.log (forestboy);
	return new Sprite(heroImage, anims);
}

function createEnemy1Sprite (enemy){
	const anims  = new Map()
	//n, x0, y0, w, h,spriteTime 
	anims.set(GO, new Anim(4, 0, 0, 30, 15, 8))
	anims.set(DEATH, new Anim(4, 0, 0, 30, 15, 8))
//	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
//	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

	const enemyImage = new Image();
	enemyImage.src = enemySheet;
	return new Sprite(enemyImage, anims);
	
}

function createLavamanSprite (enemy){
	const anims  = new Map()
	//n, x0, y0, w, h,spriteTime 
	anims.set(GO, new Anim(50, 0, 0, 64, 64, 1))
	anims.set(DEATH, new Anim(50, 0, 0, 64, 64, 1))
//	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
//	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

const lavaImage = new Image();
	lavaImage.src = lavaSheet;
	return new Sprite(lavaImage, anims);

}

function createCacoSprite (enemy){
	const anims  = new Map()
	//n, x0, y0, w, h,spriteTime 
	anims.set(GO, new Anim(90, 0, 0, 64, 64, 1))
	anims.set(DEATH, new Anim(90, 0, 0, 64, 64, 1))
//	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
//	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

	const cacoImage = new Image();
	cacoImage.src = cacoSheet;
	return new Sprite(cacoImage, anims);

}

function createMechSprite (enemy){
	const anims  = new Map()
	//n, x0, y0, w, h,spriteTime 
	anims.set(GO, new Anim(54, 0, 0, 64, 64, 1))
	anims.set(DEATH, new Anim(54, 0, 0, 64, 64, 1))
//	anims.set(IDLE, new Anim(3, 11, 12, 16, 18, 14))
//	anims.set(JUMP, new Anim(3, 59, 44, 16, 18, 10))

	const mechImage = new Image();
	mechImage.src = mechSheet;
	return new Sprite(mechImage, anims);

}

export function coords (ctx, hero){

	ctx.font = '15px arial'
	ctx.fillText(Math.round(hero.pos.x)+':'+Math.round(hero.pos.y), 350 ,470 );
	ctx.fillText(Math.round(hero.vel.x)+':'+Math.round(hero.vel.y), 350 ,485 );


}




export function render(state) {
//console.log(state.hero.x;
//----- camera ---
	if (state.hero.pos.x > cam.x){
		cam.x = state.hero.pos.x 
		
	}

	if (state.hero.pos.x < cam.x - 240){
		cam.x = state.hero.pos.x + 240
		
	}


	
	cam.y = state.hero.pos.y - 250

	
	

	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);


	ctx.save();
	ctx.translate(-(cam.x - 250), -cam.y)

	coords(ctx, state.hero);

  	drawAxes(ctx);
	drawSqrt(ctx);

	for (let i = 0; i < state.lvl.length; i++) {

		let p = state.lvl[i]
		//ctx.fillStyle = 'rgb(200, 150, 150)'
		ctx.fillStyle = 'lwn'
		ctx.fillRect(p.pos.x, p.pos.y, p.w, 50);

		 
	}

	//-- hero -------------
	const {dir, pos, state: st, attack} = state.hero 
	sprites.get(state.hero).draw(ctx, st, pos, dir, attack);
	//-- enemy ------------

	for (let liveObject of state.enemies){
		//console.log(liveObject)
		let sprite = sprites.get(liveObject)
		sprite.draw(ctx, liveObject.state, liveObject.pos, liveObject.dir);
	}
	//shadowPlarform();

	ctx.restore();

	
} 


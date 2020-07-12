class GameObj{

	constructor(x,y){
		this.pos = {x,y}
	}


};

export class Platform extends GameObj{
	constructor(x,y,w){

		super(x,y);
		this.w = w;
	}
}
// --- consts ----
export const R = 1
export const L = -1

//-- states -----
export const IDLE = 0;
export const GO = 1;
export const JUMP = 2;
export const DEATH = 3;


//--- types ----
export const HERO = 0;
export const ENEMY1 = 1;


export class LiveObj extends GameObj{

	constructor(type,x,y, state = IDLE){
		super(x,y)
		this.vel = {x:0,y:0}
		this.state = state;
		this.type = type;
		this.dir = R 
		this.attack = -1
	}

}




export class State{
	constructor(lvl){
		this.hero = new LiveObj(HERO, 10, 10, IDLE);
		//this.enemy = new LiveObj(ENEMY1, 490, 20, GO);
		this.enemies = [new LiveObj(ENEMY1, 490, 20, GO),
						new LiveObj(ENEMY1, 300, 100, GO),]
		this.lvl = lvl;
		//this.cam = {x:0,y:0}

	}

	updateState({steering, mouse, mouseChanged}){
	 	if (mouseChanged){
			this.hero.attack = 0
		}
		else if (this.hero.attack >= 20){
			this.hero.attack = -1
		}
		else if (this.hero.attack >= 0){
			this.hero.attack++
		}
		

		let st = this.hero.state
		switch (st){
			case IDLE:
				if (steering.x != 0) {
					st = GO
				}else if(steering.y == 1){
					st=JUMP
					this.hero.vel.y = -8
				}else {st=IDLE}		
				break;

			case GO :
				if (steering.x == 0) {
					st = IDLE
				}else if (steering.y == 1){
					st = JUMP
					this.hero.vel.y = -8
				}else {st=GO}
				break;
		}

		if (steering.x > 0){
			this.hero.dir = R
		}else if (steering.x < 0){
			this.hero.dir = L
		}
		

		this.hero.state = st

	}

};

export class Input{
	constructor(){
		this.steering = {x:0,y:0}
		this.mouse = false
		this.mouseChanged = false

	}


}
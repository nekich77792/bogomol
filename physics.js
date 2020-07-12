import {IDLE, GO, JUMP, L, R, DEATH} from './classes'



//blabla

function applyEnemyPhysics ({vel, pos, state, dir} ) {
	
	if (state == GO) {
		vel.x = -0.65
		vel.y += 0.25
		pos.x += vel.x
		pos.y += vel.y

		if (pos.y > 250){
			pos.y = 250;
			vel.y = 0
		}
	}
	else if (state == DEATH){
		vel.x = -0.65
		vel.y += 0.25
		pos.x += vel.x
		pos.y += vel.y
	}	

}
export function applyPhysics(s,input){
	
	for (const enemy of s.enemies){
		if (enemy.state == DEATH) continue;
		if (Math.abs(enemy.pos.x - s.hero.pos.x) < 10 && 
			Math.abs(enemy.pos.y - s.hero.pos.y) < 10 ){
				enemy.state = DEATH
				enemy.vel.y = -3
			}

	}

	// enemies physics
	s.enemies.forEach(applyEnemyPhysics);

	// hero physics
	const {vel, pos, state, dir} = s.hero


	switch (state) {
		case IDLE:
			vel.x = 0
			break;
		case GO:
			vel.x = input.steering.x 
			break;
		case JUMP:			
			vel.x = input.steering.x 

		default:
			break;
	}

	vel.y += 0.25
	pos.x += vel.x * 2
	pos.y += vel.y

	// collistion with gnd
	if (pos.y > 250){

		s.hero.state = input.steering.x == 0 ? IDLE : GO
		pos.y = 250;
		vel.y = 0
	}
  

   for (var i = 0; i < s.lvl.length; i++) {
   		let p = s.lvl[i]
   		if (pos.y > p.pos.y && 
   			pos.x + 5 > p.pos.x && 
   			pos.x - 5 < p.pos.x + p.w &&
   			pos.y < p.pos.y + 10){
				if (vel.y > 0 ){
					s.hero.state = input.steering.x == 0 ? IDLE : GO
					pos.y = p.pos.y;
					vel.y = 0	
				}
				
   			

   		}
   	
   }



}
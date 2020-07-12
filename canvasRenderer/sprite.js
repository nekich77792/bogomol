import {L} from './../classes'
export class Sprite {
	constructor(img, anims){
		this.img = img
		this.anims = anims
		this.currentFrame = 0
		this.currentState
		//this.w = 16
		//this.h = 24
	}

	draw(ctx, state, pos, dir, attack){

		if(this.currentState != state){
			this.currentState = state
			this.currentFrame = 0

		}
		//console.log(attack)
		let animKey = attack >= 0 ? "attack" : state
		if (attack == 0) this.currentFrame = 0;
		const {n, x0, y0, w, h, spriteTime, shift} = this.anims.get(animKey)	
		//console.log(shift)

		
		const allFrames = n * spriteTime

		let currN = Math.floor(this.currentFrame/spriteTime)
		
		const srcX = x0 + currN*w

		//console.log(vel)
		
		if (dir == L){ 

			ctx.save();
			ctx.strokeStyle = 'red'
			ctx.translate(pos.x, 0)
			ctx.scale(-1, 1);
			let xx = w - shift, yy = pos.y - h, ww = -w, hh = h


			ctx.drawImage(this.img, srcX, y0, w, h, 
			 	xx, 
				yy , ww, hh);
			ctx.strokeRect(xx, yy , ww, hh);
			drawOrigin(ctx, 0, pos.y)
			ctx.restore();
		} else {
			ctx.save()
			ctx.translate(pos.x, 0)
			let xx = -shift, yy = pos.y - h, ww = w, hh = h
			ctx.drawImage(this.img, srcX, y0, w, h, 
			 	xx, //-shift,//pos.x - shift, 
				 yy , ww, hh);

			ctx.strokeRect(xx, yy , ww, hh);
			drawOrigin(ctx, 0, pos.y)
			ctx.restore()
		}


		this.currentFrame++;
		this.currentFrame %= allFrames
	}
}

function drawOrigin(ctx, x, y){
	let d = 20
	ctx.save()
		ctx.strokeStyle = 'green'
		ctx.lineWidth = 1;
		ctx.beginPath()	
		ctx.moveTo(x, y - d);
		ctx.lineTo(x, y + d);
		ctx.moveTo(x - d, y);
		ctx.lineTo(x + d, y);
		ctx.closePath()
		ctx.stroke();
	ctx.restore()
}

export class Anim {
	constructor(n, x0, y0, w, h,spriteTime, shift ){
		this.n = n
		this.x0 = x0
		this.y0 = y0
		this.w = w
		this.shift = shift || w/2
		this.h = h
		this.spriteTime = spriteTime
	}
}
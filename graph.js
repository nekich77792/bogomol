
const shift = 250;
const step = 10;

export function drawAxes(ctx) {

	ctx.beginPath();
	ctx.moveTo(0, shift);
	ctx.lineTo(500, shift);
	ctx.moveTo(shift, 0);
	ctx.lineTo(shift, 500);

	ctx.font = '9px arial'
	for (let x = 0; x <= 25; x++) {

		let y = 260;
		//ctx.moveTo(x*step + shift, y);
		ctx.fillText(x, x*step + shift, y);

		
	}
	ctx.strokeStyle = 'rgb(0, 0, 0)';

	ctx.closePath();
	ctx.stroke();

}




export function drawSqrt(ctx) {

	
	

	ctx.beginPath();
	ctx.moveTo(shift, shift);

	for (let x = 0; x <= 25; x++) {
		
		let y = Math.sqrt(x);
		ctx.lineTo(x*step + shift, -y*step + shift)



	}
 	ctx.strokeStyle = 'rgb(255, 0, 0)';
	//ctx.closePath();
	ctx.stroke();

}
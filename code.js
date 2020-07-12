import {init as initInput, readInput} from './inputs'
import {applyPhysics} from './physics'
import {createLvl} from './platforms'
import {Platform, LiveObj, State} from './classes'
import  time from './time'
import {initRender, render, loadAssets} from './canvasRenderer/canvasRenderer'

let state;


// --- init -----------------
function init(){

	initRender();
	initInput(window);
	initState();
	loadAssets(state);

}

function initState(){	 
	state = new State(createLvl());
};


 
// ---  update ----

function pxToKm (y){
	return y*((198/108) * Math.pow(10, -5))
}

function garbageCollector(){
	if (time.n % 10 != 0) return;// hразряжаем

	for (let i = 0; i < state.enemies.length; i++){
		const {x,y} = state.enemies[i].pos;
		if (y > 300 || x < -10){
			//delete state.enemies[i];
			state.enemies.splice(i, 1);
	
		}
	}
}



function loop(){

	window.requestAnimationFrame(loop);
	const input = readInput(state, input);
	state.updateState(input);
	applyPhysics(state, input);
	    
	//console.log(state.enemies[0].pos.y);
	// zzxsz
	
	garbageCollector();
	render(state);
	let xm = 50
	if (state.hero.vel.y == -5){
		//new Platform(Math.random()*500,Math.random()*500,xm)
	}
	
	// update time
	time.n++
	
}



//--- start -----------
init();

loop();
/*
var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.detune.value = 0; // value in cents
 oscillator.start(0);

setInterval(()=>{
	oscillator.detune.value = 1200; // value in cents
	// oscillator.start(0);
	
	setInterval(()=>{
		oscillator.detune.value = 700; // value in cents
		
			setInterval(()=>{
			oscillator.detune.value = 00; // value in cents
				oscillator.stop(3);
			
		
		}, 1000)
	}, 1000)
}, 1000)

*/


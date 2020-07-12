import {HERO, ENEMY1, JUMP, GO,IDLE,Input} from './classes'
var keyboard = {"w":false,
				"s":false,
				"a":false,
				"d":false,
				"space":false};

var mouse = false
var mouseChanged = false


export function init(w){

	w.addEventListener('keydown', onKeyPress);

	w.addEventListener('keyup', onKeyUp);

	w.addEventListener('mousedown', onMouseDown);

	w.addEventListener('mouseup', onMouseUp);


}

function onMouseUp(e){
	mouse = false
}


function onMouseDown(e){
	mouse = true
	mouseChanged = true
}

function onKeyPress(e){

	switch(e.key)

	{
		case(" "):
			keyboard.space = true;
			break;

		case("w"):
			keyboard.w = true;
			break;

		case("s"):
			keyboard.s = true;
			break;

		case("a"):
			keyboard.a = true;
			break;

		case("d"):
			keyboard.d = true;
			break;

	}

	
}

function onKeyUp(e){

	switch(e.key)

	{
		case(" "):
			keyboard.space = false;
			break;

		case("w"):
			keyboard.w = false;
			break;

		case("s"):
			keyboard.s = false;
			break;

		case("a"):
			keyboard.a = false;
			break;

		case("d"):
			keyboard.d = false;
			break;

	}

	
}


export function readInput(state){

	let input = new Input()

	input.act = keyboard.space

	input.steering.y = Number(keyboard.w) - Number(keyboard.s)
	input.steering.x = Number(keyboard.d) - Number(keyboard.a)

	input.mouse = mouse
	input.mouseChanged = mouseChanged
	mouseChanged = false // ЗЛО!


	return input

}
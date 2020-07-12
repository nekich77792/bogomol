import {Platform} from './classes'



export function createLvl(){

	let w = 50

	return [
		new Platform(200,200,w),
		new Platform(250,150,w),
		new Platform(300,100,w),
		new Platform(350,50,w),
		new Platform(400,0,w)
	]
	
}




export const changeDir=(direction)=>({
	type:"CHANGE_DIR",
	direction
})

export const toggleMove=()=>({
	type:"TOGGLE_MOVE"
})

export const changeSpeed=(speed)=>({
	type:"CHANGE_SPEED",
	speed
})

export const moveForward=()=>({
	type:"MOVE_FORWARD"
})

export const changeFood=()=>({
	type:"CHANGE_FOOD"
})

export const reStart=()=>({
	type:"RESTART"
})

export const becomeGameover=()=>({
	type:"BECOME_GAMEOVER"
})
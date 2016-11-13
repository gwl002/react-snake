let initialState={
	snakeArr:[{x:1,y:1},{x:1,y:2},{x:1,y:3}],
	foodArr:[{x:5,y:6}],
	direction:"RIGHT",
	moving:false,
	speed:200,
	score:0,
	gameover:false
}

const move=({snakeArr,direction,foodArr,score})=>{
	let len=snakeArr.length;
	let last=snakeArr[len-1];
	let arr=snakeArr.slice(1,len);
	let food=foodArr[0];
	let next;
	switch(direction){
		case "RIGHT":
			next={x:last.x+1,y:last.y}
			break;
		case "LEFT":
			next={x:last.x-1,y:last.y}
			break;
		case "UP":
			next={x:last.x,y:last.y-1}
			break;
		case "DOWN":
			next={x:last.x,y:last.y+1}
			break;
		default:
			break;
	}
	if(food.x==next.x&&food.y==next.y){
		return {snakeArr:[...snakeArr,next],foodArr:foodRnd(snakeArr),score:score+1}
	}else{
		return {snakeArr:[...arr,next],foodArr:foodArr}
	}

}

//判断坐标是否重合
const inArr=(arr,x,y)=>(
	 arr.filter(item=>{return item.x===x&&item.y===y}).length>0?true:false
)

//随机食物位置
const foodRnd=(snakeArr)=>{
	let x=Math.floor(Math.random()*20);
	let y=Math.floor(Math.random()*20);
	while(inArr(snakeArr,x,y)){
		x=Math.floor(Math.random()*20);
		y=Math.floor(Math.random()*20);
	}
	return [{x,y}]
}

const game=(state=initialState,action)=>{
	switch(action.type){
		case "TOGGLE_MOVE":
			return Object.assign({},state,{moving:!state.moving})
		case "CHANGE_SPEED":
			return Object.assign({},state,{speed:action.speed})
		case "CHANGE_DIR":
			return Object.assign({},state,{direction:action.direction})
		case "MOVE_FORWARD":
			return Object.assign({},state,move(state))
		case "RESTART":
			return Object.assign({},initialState)
		case "BECOME_GAMEOVER":
			return Object.assign({},state,{gameover:true})
		default:
			return state
	}
}

export default game
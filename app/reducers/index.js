import {Map,List,fromJS,is} from "immutable"

let initialState=fromJS({
	snakeArr:[{x:1,y:1},{x:1,y:2},{x:1,y:3}],
	foodArr:{x:5,y:6},
	direction:"RIGHT",
	moving:false,
	speed:200,
	score:0,
	gameover:false
})

const move=(state)=>{
	let food=state.get("foodArr");
	let snakeArr=state.get("snakeArr");
	let last=snakeArr.last();
	let score=state.get("score");
	let next;
	switch(state.get("direction")){
		case "RIGHT":
			next=Map({x:last.get("x")+1,y:last.get("y")})
			break;
		case "LEFT":
			next=Map({x:last.get("x")-1,y:last.get("y")})
			break;
		case "UP":
			next=Map({x:last.get("x"),y:last.get("y")-1})
			break;
		case "DOWN":
			next=Map({x:last.get("x"),y:last.get("y")+1})
			break;
		default:
			break;
	}
	if(is(next,food)){
		// let obj={snakeArr:snakeArr.push(next),score:score+1,foodArr:foodRnd(snakeArr)}
		return state.withMutations(state=>{
			state.update("score",score=>score+1)
				 .update("snakeArr",list=>list.push(next))
				 .set("foodArr",Map(foodRnd(snakeArr)))
		});
	}else{
		return state.update("snakeArr",list=>list.skip(1).push(next))
	}
}

//判断坐标是否重合
const inArr=(arr,x,y)=>(
	 arr.filter(item=>{return item.x===x&&item.y===y}).length>0?true:false
)

const foodRnd=(snakeArr)=>{
	let x=Math.floor(Math.random()*20);
	let y=Math.floor(Math.random()*20);
	while(inArr(snakeArr,x,y)){
		x=Math.floor(Math.random()*20);
		y=Math.floor(Math.random()*20);
	}
	return {x,y}
}


const game=(state=initialState,action)=>{
	switch(action.type){
		case "TOGGLE_MOVE":
			return state.update("moving",m=>!m);
		case "CHANGE_SPEED":
			return state.set("speed",action.speed);
		case "CHANGE_DIR":
			return state.set("direction",action.direction);
		case "MOVE_FORWARD":
			return move(state);
		case "RESTART":
			return state.merge(initialState);
		case "BECOME_GAMEOVER":
			return state.set("gameover",true);
		default:
			return state
	}
}

export default game
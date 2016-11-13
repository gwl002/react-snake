import Snake from "../components/Snake"
import {connect} from "react-redux"
import {moveForward,changeDir,toggleMove,reStart,becomeGameover} from "../actions/index.js"


const mapStateToProps=(state)=>{
	return {
		snakeArr:state.snakeArr,
		foodArr:state.foodArr,
		speed:state.speed,
		moving:state.moving,
		direction:state.direction,
		gameover:state.gameover
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		move:()=>{dispatch(moveForward())},
		changeDir:(direction)=>{dispatch(changeDir(direction))},
		toggleMove:()=>{dispatch(toggleMove())},
		reStart:()=>{dispatch(reStart())},
		becomeGameover:()=>{dispatch(becomeGameover())}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Snake)
import DashBoard from "../components/DashBoard"
import {connect} from "react-redux"
import {changeSpeed} from "../actions/index"

const mapStateToProps=(state)=>{
	return {
		speed:state.speed,
		score:state.score,
		gameover:state.gameover,
		moving:state.moving
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		changeSpeed:(speed)=>{dispatch(changeSpeed(speed))}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)
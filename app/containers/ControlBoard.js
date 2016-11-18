import DashBoard from "../components/DashBoard"
import {connect} from "react-redux"
import {changeSpeed} from "../actions/index"

const mapStateToProps=(state)=>{
	return {
		speed:state.get("speed"),
		score:state.get("score"),
		gameover:state.get("gameover"),
		moving:state.get("moving")
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		changeSpeed:(speed)=>{dispatch(changeSpeed(speed))}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)
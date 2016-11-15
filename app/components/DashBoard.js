import React,{PropTypes} from "react"
import "./DashBoard.css"

const DashBoard=React.createClass({
	handleChange:function(e){
		e.target.blur();//使select失去焦点，否则会跟随按键改变select值
		this.props.changeSpeed(parseInt(e.target.value));
	},

	render:function(){
		let gameState;
		if(this.props.gameover){
			gameState="游戏结束"
		}else{
			if(this.props.moving){
				gameState="游戏中..."
			}else{
				gameState="暂停中..."
			}
		}
		return(
			<div className="dashboard">
				<h3>React贪吃蛇(by gwl002)</h3>
				<div>
					<span>得分:{this.props.score}</span>
					<span>速度:{this.props.speed}</span>
					<select value={this.props.speed} onChange={this.handleChange}>
						<option value="100">快</option>
						<option value="200">中</option>
						<option value="300">慢</option>
					</select>
					<span>{gameState}</span>
				</div>
			</div>
		)
	}
})

DashBoard.propTypes={
	score:PropTypes.number.isRequired,
	speed:PropTypes.number.isRequired,
	gameover:PropTypes.bool.isRequired,
	moving:PropTypes.bool.isRequired,
	changeSpeed:PropTypes.func.isRequired
}

export default DashBoard
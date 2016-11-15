import React,{PropTypes,Components} from "react"
import Grid from "./Grid"
import "./snake.css"

const Snake=React.createClass({
	handleKeyDown:function(e){
		switch(e.keyCode){
			case 37:
				if(this.props.direction!="RIGHT"&&this.props.moving){
					this.props.changeDir("LEFT")
				}
				break;
			case 38:
				if(this.props.direction!="DOWN"&&this.props.moving){
					this.props.changeDir("UP")
				}
				break;
			case 39:
				if(this.props.direction!="LEFT"&&this.props.moving){
					this.props.changeDir("RIGHT")
				}
				break;
			case 40:
				if(this.props.direction!="UP"&&this.props.moving){
						this.props.changeDir("DOWN")
				}
				break;
			case 80:
				if(!this.props.gameover){
					if(this.props.moving){
						this.props.toggleMove();
						clearInterval(this.timer);
					}else{
						this.props.toggleMove();
						this.timer=setInterval(this.props.move,this.props.speed);
					}
				}
				break;
			case 82: 
				if(this.timer!==undefined){
					clearInterval(this.timer);
				}
				this.props.reStart();
				break;
			default:
				break;
		}
	},

	componentDidMount:function(){
		window.addEventListener("keydown",this.handleKeyDown);
	},

	componentDidUpdate:function(){
		console.log("snake UPDATE!")
	},
	
	shouldComponentUpdate:function(nextProps,nextState){
		let snakeArr=nextProps.snakeArr;
		let snakeBody=snakeArr.slice(0,snakeArr.length-1);
		let head=snakeArr[snakeArr.length-1];
		let eatSelf=snakeBody.filter((item)=>{return item.x==head.x&&item.y==head.y}).length>0?true:false
		// if(nextProps.gameover){
		// 	return false;
		// }
		if(head.x>19||head.x<0||head.y>19||head.y<0||eatSelf){
			clearInterval(this.timer);
			this.props.becomeGameover();
			return false;
		}else{
			return true;
		}
	},

	componentWillUnmount:function(){
		window.removeEventListener("keydown",this.handleKeyDown);
		if(this.timer!==undefined){
			clearInterval(this.timer);
		}
		
	},

	render:function(){
		return  (
			<div className="snake" >
				<Grid cols={20} rows={20} />
				<div>
				{this.props.snakeArr.map((pos,index)=>(
					<span className="snake-body" key={pos.x+"-"+pos.y} style={{left:pos.x*20,top:pos.y*20}}></span>
					))}
				</div>
				{this.props.foodArr.map((pos,index)=>(
					<span className="snake-food" key={index} style={{left:pos.x*20,top:pos.y*20}}></span>
					))}
			</div>
		)
	}
})


Snake.propTypes={
	direction:PropTypes.string.isRequired,
	snakeArr:PropTypes.array.isRequired,
	foodArr:PropTypes.array.isRequired,
	speed:PropTypes.number.isRequired,
	gameover:PropTypes.bool.isRequired,
	move:PropTypes.func.isRequired,
	changeDir:PropTypes.func.isRequired,
	toggleMove:PropTypes.func.isRequired,
	reStart:PropTypes.func.isRequired,
	becomeGameover:PropTypes.func.isRequired
}

export default Snake
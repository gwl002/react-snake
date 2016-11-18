import React,{PropTypes} from "react"
import Grid from "./Grid"
import "./snake.css"

class Snake extends React.PureComponent{
	constructor(props){
		super(props);
		this.handleKeyDown=this.handleKeyDown.bind(this);
	}

	handleKeyDown(e){
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
						clearInterval(this.timer)
					}else{
						this.props.toggleMove();
						this.timer=setInterval(this.props.move,this.props.speed)
					}
				}
				break;
			case 82: 
				if(this.timer ){
					clearInterval(this.timer);
				}
				this.props.reStart();
				break;
			default:
				break;
		}
	}

	componentDidMount(){
		window.addEventListener("keydown",this.handleKeyDown);
	}

	shouldComponentUpdate(nextProps,nextState){
		let snakeArr=nextProps.snakeArr;
		let snakeBody=snakeArr.slice(0,-1);
		let head=snakeArr.last();
		let eatSelf=snakeBody.filter((item)=>{return item.equals(head)}).size>0?true:false
		if(nextProps.gameover){
			return false;
		}
		if(head.get("x")>19||head.get("x")<0||head.get("y")>19||head.get("y")<0||eatSelf){
			clearInterval(this.timer);
			this.props.becomeGameover();
			return false;
		}else{
			return true;
		}
	}

	componentWillUnmount(){
		window.removeEventListener("keydown",this.handleKeyDown);
		if(this.timer!==undefined){
			clearInterval(this.timer);
		}
		
	}

	render(){
		let foodArr=this.props.foodArr;
		let foodStyle={left:foodArr.get("x")*20,top:foodArr.get("y")*20}
		return  (
			<div className="snake" >
				<Grid cols={20} rows={20} />
				<div>
					{this.props.snakeArr.map((pos,index)=>(
						<span className="snake-body" key={pos.get("x")+"-"+pos.get("y")} style={{left:pos.get("x")*20,top:pos.get("y")*20}}></span>
						))}
				</div>
				<span className="snake-food"  style={foodStyle}></span>
			</div>
		)
	}
}

// Snake.propTypes={
// 	direction:PropTypes.string.isRequired,
// 	snakeArr:PropTypes.array.isRequired,
// 	foodArr:PropTypes.array.isRequired,
// 	speed:PropTypes.number.isRequired,
// 	gameover:PropTypes.bool.isRequired,
// 	move:PropTypes.func.isRequired,
// 	changeDir:PropTypes.func.isRequired,
// 	toggleMove:PropTypes.func.isRequired,
// 	reStart:PropTypes.func.isRequired,
// 	becomeGameover:PropTypes.func.isRequired
// }

export default Snake
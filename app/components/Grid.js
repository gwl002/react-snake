import React,{PropTypes} from "react"
import "./Grid.css"

class Grid extends React.Component{
	constructor(props){
		super(props);
	}

	shouldComponentUpdate(){
		return false;
	}

	render(){
		let gridArr=[];
		let cols=this.props.cols;
		let rows=this.props.rows;
		for(let i=0;i<cols*rows;i++){
			gridArr.push(<span className="cell" key={i} ></span>)
		}
		return (
			<div className="grid">
				{gridArr}
			</div>
		)
	}
}

Grid.propTypes={
	cols:PropTypes.number.isRequired,
	rows:PropTypes.number.isRequired,
}

export default Grid
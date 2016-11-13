import React,{PropTypes} from "react"
import "./Grid.css"

const Grid=({cols,rows})=>{
	let gridArr=[];
	for(let i=0;i<cols*rows;i++){
		gridArr.push(<span className="cell" key={i} ></span>)
	}
	return (
		<div className="grid">
			{gridArr}
		</div>
	)
}
Grid.propTypes={
	cols:PropTypes.number.isRequired,
	rows:PropTypes.number.isRequired,
}

export default Grid
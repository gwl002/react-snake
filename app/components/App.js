import React from "react"
import Info from "./Info"
import ControlBoard from "../containers/ControlBoard"
import LiveSnake from "../containers/LiveSnake"


const App=()=>{
	return (
		<div className="app">
			<LiveSnake />
			<Info />
			<ControlBoard />
		</div>
	)
	
}

export default App
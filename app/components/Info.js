import React from "react"
import "./Info.css"

const Info=()=>{
	return (
		<div className="info">
			<p>按上下左右方向键控制蛇的方向</p>
			<p>按r重新初始化游戏</p>
			<p>按p开始或者暂停游戏</p>
			<p>由react,redux开发</p>
			<p>ctrl+h隐藏右侧开发工具</p>
			<p><a href="https://github.com/gwl002/reactSnake.git" target="_blank">github地址</a></p>
		</div>
	)
}

export default Info
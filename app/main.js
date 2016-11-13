import React from "react"
import {render} from "react-dom"
import App from "./components/App"
import "./index.css"
import {createStore,compose} from "redux"
import reducer from "./reducers/index.js"
import {Provider} from "react-redux"
import DevTools from "./containers/DevTools"

const enhancer=compose(
	DevTools.instrument()
)
let store=createStore(reducer,enhancer)



render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById("root"))
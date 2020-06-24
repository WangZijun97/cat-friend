import React from 'react'

export class ControlPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputblank: "How are you feeling?"
		}
		
		this.actiongenerator = this.actiongenerator.bind(this)
		this.processfeelings = this.processfeelings.bind(this)
		this.handleInputClick = this.handleInputClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	actiongenerator(action) {
		return () => this.props.button(action)
	}
	
	processfeelings(feeling) {
		return () => this.props.feelings(feeling)
	}
	
	handleInputClick() {
		if (this.state.inputblank === "How are you feeling?") {
			this.setState({inputblank: ""})
		}
	}
	
	handleChange(e) {
		this.setState({inputblank: e.target.value})
	}
	
	render() {
		return (
			<div>
				<div>
					<button onClick = {this.actiongenerator("pat")}>Pat</button>
					<button onClick = {this.actiongenerator("feed")}>Feed</button>
					<button onClick = {this.actiongenerator("play")}>Play!</button>
					<button onClick = {this.actiongenerator("sleep")}>Back to Sleep</button>
				</div>
				<div>
					<input type="text" value = {this.state.inputblank} onClick = {this.handleInputClick} onChange = {this.handleChange} />
					<button onClick = {this.processfeelings(this.state.inputblank)}>Send Feelings</button>
				</div>
				
			</div>
		)
	}
}

export default ControlPanel
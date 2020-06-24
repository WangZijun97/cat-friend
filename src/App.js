import React from 'react';
import Cat from './Cat.js'
import ControlPanel from './ControlPanel.js'
import Speech from './Speech.js'
import * as art from './art.js'
import './App.css';

export class App extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			cat: art.defaultcat,
			queued: false
		}
		this.cataction = this.cataction.bind(this)
		this.processfeelings = this.processfeelings.bind(this)
	}
	
	cataction(action) {
		
		const d = {
			"awake": ["rawr", art.catface],
			"pat": [["Meow!", art.catface2], 1000],
			"feed": [["Mmm yums", art.catface2], 1500],
			"play": [["Lazeeeeee", art.catface3], 2500],
			"sleep": [art.defaultcat, 999],
			"reassure": [["It's ok meow, you are still awesome :D", art.catface4], 5000],
			"notyourfault": [["You aren't, you are awesome pls", art.catface4], 5000],
			"lonely": [["go find friends la", art.catface3], 3000],
			"sleepy": [["THEN??? Go sleep la", art.catface8], 4000],
			"ok": [["That's great!", art.catface6], 2500],
			"power": [["Power to you~~~ Go get them!", art.catface7], 5000],
			"encourage": [["jy, you can do it!", art.catface7], 5000],
			"confused": [["Me too - you can figure this out!", art.catface5], 5000],
			"chill": [["They aren't worth your energy, hmph!", art.catface8], 5000],
			"xx": [["gross go find sean", art.catface9], 5000],
			"huh?": [["I don't understand UwU", art.catface5], 3000]
		}
		
		this.setState({cat: d[action][0]})
		if (action === "sleep") {
			this.setState({queued: false})
		}
		
		else if (!this.state.queued){
			this.setState({queued: true})
			setTimeout(() => this.setState({cat: d["awake"], queued: false}), d[action][1])
		}
	}
	
	processfeelings(feeling) {
		
		const d = {
			"reassure": ["guilt", "shame", "depress", "miserable", "sad", "apathetic", "embarass", "reject", "selfish", "hurt"],
			"notyourfault": ["stupid", "inadequate", "inferior", "fool", "insignificant"],
			"lonely": ["lonely", "bored"],
			"sleepy": ["sleep"],
			"ok": ["content",  "pensive", "relaxed", "thoughtful", "responsive", "serene", "sentimental", "trusting", "thankful", "nurturing", "faithful", "peaceful", "hope", "appreciat", "satisf", "fascinat"],
			"power": ["confident", "intelligent", "importan", "power", "worthwhile", "valu", "respect", "proud", "daring"],
			"pat": ["cheer", "delight", "joy", "creat", "aware", "extravagant", "amuse", "excite"],
			"play": ["playful", "energ"],
			"encourage": ["anxious", "scare", "insecure", "weak", "helpless", "discourage", "bashful", "shy"],
			"confused": ["confuse", "bewilder"],
			"chill": ["skeptic", "crit", "irritate", "hate", "mad", "rage", "angry", "furious", "irate", "hostile", "jealous"],
			"xx": ["intimate", "lov", "stim", "sex", "submissive"]
		}
		
		
		let i, reaction
		let feel = false
		for (reaction in d) {
			for (i = 0; i < d[reaction].length; i++) {
				if (feeling.includes(d[reaction][i])) {
					feel = true
					this.cataction(reaction)
					break
				}
			}
		}
		
		if (!feel) {
			this.cataction("huh?")
		}
		
	}
	
	
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Speech text={this.state.cat[0]} />
					<Cat catface = {this.state.cat[1]} />
					<ControlPanel button = {this.cataction} feelings = {this.processfeelings}/>
				</header>
			</div>
		)
	}
}

export default App;

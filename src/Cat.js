import React from 'react'
import * as art from './art.js'
import PixelArt from './pixelart.js'

export class Cat extends React.Component {
	
	render() {
		
		let merged = art.cattransform(art.catpx, this.props.catface)
		
		return (<PixelArt pixels = {merged} />)
	}
	
}

export default Cat
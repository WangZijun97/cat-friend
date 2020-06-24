import React from 'react'
import './App.css'


//must feed *pixels*, an rxc grid of colors
export class PixelArt extends React.Component {
	
	draw(grid) {
		return (
			<div className = "pixelart">
				{grid.map(row => {return (
					<div className = "row">
						{row.map(px => {return (
							<div
								className = "px"
								style = {{"background-color": px}}
							>
							</div>
						)})}
					</div>
				)})}
			</div>
		)
	}
	
	render() {
		return this.draw(this.props.pixels)
	}
	
}

export default PixelArt
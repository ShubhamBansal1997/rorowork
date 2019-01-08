import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Module from './Module';


class GraphSvg extends Component {
	render() {
		let { colorDark, color, modules, name, type  } = this.props;
		return (
			<svg width={modules.length*100} height="200">
				<g id="my-group">
					{modules.map((value, index) => (
						<Module
							colorDark={colorDark}
							type={type}
							color={color}
							name={value.name}
							index={index}
							total={modules.length-1}
							key={index}
						/>
					))}
					<foreignObject x="0" y="0" width={modules.length*100} height="200">
				      <p xmlns="http://www.w3.org/1999/xhtml" style={{ fontFamily: "Helvetica", fontSize: "1.1em",textAlign: "center", color: colorDark}}>{name}</p>
				    </foreignObject>
			  	</g>
			 </svg>
		)
	}

}

GraphSvg.defaultProps = {
  color: '#baf5ff',
  name: 'TSS witeboard selling Methodology',
  colorDark: '#003d6b',
  type: 'open',
  image: 'right'
}

GraphSvg.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  colorDark: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
}

export default GraphSvg;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Adjust from './assets/adjust.svg';
import Check from './assets/check.svg';
import Exclaimation from './assets/exclaimation.svg';


class Module extends Component {
	render() {
		let { colorDark, color, name, type, index, total, tagId, mandatory } = this.props;
		let type1 = ((type==='open'&&index===0)?type:((type==='close'&&index===total)?type:"normal"));
		return (
			<React.Fragment key={index}>
				<defs>
		      		<path id="MyPath" d="M 20 40 Q 260 240 400 500" />
		    	</defs>
			    <rect x={`${0+(100*index)}`} y="0" width="100" height="200" fill={color} />
			    <circle cx={`${50+(100*index)}`} cy="155" r="20" fill={colorDark} />
			    <circle cx={`${50+(100*index)}`} cy="155" r="14" fill="#ffffff" />
			   
			    {type1==='open'?null:<line x1={`${0+(100*index)}`} y1="155" x2={`${30+(100*index)}`} y2="155" stroke={colorDark} strokeWidth="2" />}
				{type1==='close'?null:<line x1={`${70+(100*index)}`} y1="155" x2={`${100+(100*index)}`} y2="155" stroke={colorDark} strokeWidth="2" />}
				{tagId!==null?(mandatory===true?<image xlinkHref={Exclaimation} x={`${40+(100*index)}`} y="145" height="20px" width="20px"/>:<image xlinkHref={Adjust} x={`${40+(100*index)}`} y="145" height="20px" width="20px"/>):null}
		    	<foreignObject x={`${10+(100*index)}`} y="50" width="90" height="200">
					<p xmlns="http://www.w3.org/1999/xhtml" style={{ fontFamily: "Helvetica", fontSize: "0.85em",textAlign: "center", color: colorDark}}>{name}</p>
				</foreignObject>
			</React.Fragment>
		)
	}

}

Module.defaultProps = {
  color: '#baf5ff',
  name: 'TSS witeboard selling Methodology',
  colorDark: '#003d6b',
  type: 'open',
  index: 0,
  total: 0
}

Module.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  colorDark: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.number,
  total: PropTypes.number
}

export default Module;
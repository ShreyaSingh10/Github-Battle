var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props){
	var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
		//console.log(this);
	return(
		<ul className='languages'>
			{languages.map( (lang, index) => {
				return(
					<li
					style={lang === props.selectedLanguage ? { color: '#d0021b'}: null}
					onClick={props.onSelect.bind(null, lang) } 
					key={index}>
						{lang}
					</li>
				)
			})}
		</ul>
	)
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
	constructor (props){
		super(props);
		this.state ={
			selectedLanguage: 'All'
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang){
		this.setState(function () {
			return	{
				selectedLanguage: lang
			}
		});
	}
	render() {
		
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		)
	}
}

module.exports = Popular;

//This keyword inside arrow funxtion is same as the one
//outside arrow function

var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
function Nav () {
	return (
		<ul className ='nav'>
			<li>
				<NavLink exact activeClassName ='active' to='/'>
					Love
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName ='active' to='/battle'>
					Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName ='active' to='/popular'>
					Popular
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav; 

//Link - is used to render an anchor tag
//NavLink -composes in of some links and adds some extra properties 
//Navlink helps in changing the style of the active route

//'/' represents Home
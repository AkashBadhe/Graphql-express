import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import Navigation from './container/Navigation';

export class App extends Component {
	render() {
		return (
			<div className="container">
				<Navigation />
			</div>
		);
	}
}

ReacDOM.render(<App />, document.getElementById('root'));

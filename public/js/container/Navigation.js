import React, { Component } from 'react';
import API from '../api';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
	return { links: LinkStore.getAll() };
};
export class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = _getAppState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		API.getLinks();
		LinkStore.on('change', this.onChange);
	}
	componentWillUnmount() {
		LinkStore.removeListener('change', this.onChange);
	}
	onChange() {
		console.log('onChange fired.');
		this.setState(_getAppState());
	}
	render() {
		return (
			<div>
				<h3>Links</h3>
				<ul>
					{this.state.links &&
						this.state.links.map(link => (
							<li>
								<a href={link.url}>{link.title}</a>
							</li>
						))}
					<div>{JSON.stringify(this.state.links)}</div>
				</ul>
			</div>
		);
	}
}

export default Navigation;

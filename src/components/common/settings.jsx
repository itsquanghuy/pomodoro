import React, { Component } from 'react';

class Settings extends Component {
	renderSettingLabel(id, name) {
		return <h1 id={id}>{name}</h1>;
	}

	renderTimeLength(id, value) {
		return <p id={id}>{value / 60}</p>;
	}

	renderIncrementButton(id) {
		return (
			<button id={id} onClick={() => this.props.onIncrement(id)}>
				+
			</button>
		);
	}

	renderDecrementButton(id) {
		return (
			<button id={id} onClick={() => this.props.onDecrement(id)}>
				-
			</button>
		);
	}
}

export default Settings;

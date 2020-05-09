import React from 'react';
import Settings from './common/settings';

class Session extends Settings {
	render() {
		return (
			<div>
				{this.renderSettingLabel('session-label', 'Session Length')}
				{this.renderTimeLength('session-length', this.props.sessionLength)}
				{this.renderIncrementButton('session-increment')}
				{this.renderDecrementButton('session-decrement')}
			</div>
		);
	}
}

export default Session;

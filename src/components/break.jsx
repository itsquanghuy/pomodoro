import React from 'react';
import Settings from './common/settings';

class Break extends Settings {
	render() {
		return (
			<div>
				{this.renderSettingLabel('break-label', 'Break Length')}
				{this.renderTimeLength('break-length', this.props.breakLength)}
				{this.renderIncrementButton('break-increment')}
				{this.renderDecrementButton('break-decrement')}
			</div>
		);
	}
}

export default Break;

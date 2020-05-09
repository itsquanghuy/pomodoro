import React from 'react';
import Time from './common/time';

class Timer extends Time {
	render() {
		const { sessionTimer, breakTimer, onToggle, onReset } = this.props;
		return (
			<div>
				<h1 id='timer-label'>{sessionTimer !== 0 ? 'Session' : 'Break'}</h1>
				<p id='time-left'>
					{sessionTimer !== 0
						? this.timeLeft(sessionTimer)
						: this.timeLeft(breakTimer)}
				</p>
				<button id='start_stop' onClick={onToggle}>
					Start/Pause
				</button>
				<button id='reset' onClick={onReset}>
					Reset
				</button>
				<audio id='beep'></audio>
			</div>
		);
	}
}

export default Timer;

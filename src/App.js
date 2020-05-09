import React, { Component } from 'react';
import Break from './components/break';
import Session from './components/session';
import Timer from './components/timer';
import {
	defaultState,
	maxTime,
	minTime,
} from './components/common/timeContraints';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = defaultState;
		this.clockInterval = null;
	}

	handleIncrement = (id) => {
		const timeIncrement = (value) => (value / 60 + 1) * 60;

		const handleBreakIncrement = () => {
			let { breakLength } = this.state;
			if (breakLength === maxTime) return;
			breakLength = timeIncrement(breakLength);
			this.setState({ breakLength, breakTimer: breakLength });
		};

		const handleSessionIncrement = () => {
			let { sessionLength } = this.state;
			if (sessionLength === maxTime) return;
			sessionLength = timeIncrement(sessionLength);
			this.setState({ sessionLength, sessionTimer: sessionLength });
		};

		if (id === 'break-increment') handleBreakIncrement();
		else handleSessionIncrement();
	};

	handleDecrement = (id) => {
		const timeDecrement = (value) => (value / 60 - 1) * 60;

		const handleBreakDecrement = () => {
			let { breakLength } = this.state;
			if (breakLength === minTime) return;
			breakLength = timeDecrement(breakLength);
			this.setState({ breakLength, breakTimer: breakLength });
		};

		const handleSessionDecrement = () => {
			let { sessionLength } = this.state;
			if (sessionLength === minTime) return;
			sessionLength = timeDecrement(sessionLength);
			this.setState({ sessionLength, sessionTimer: sessionLength });
		};

		if (id === 'break-decrement') handleBreakDecrement();
		else handleSessionDecrement();
	};

	handleToggle = () => {
		let {
			isRunning,
			sessionTimer,
			breakTimer,
			sessionLength,
			breakLength,
		} = this.state;
		isRunning = !isRunning;

		const handleStart = () => {
			this.clockInterval = setInterval(() => {
				if (sessionTimer === 0 && breakTimer === 0) {
					console.log();
					sessionTimer = sessionLength;
					breakTimer = breakLength;

					this.setState({ sessionTimer, breakTimer });
				}

				if (sessionTimer > 0) {
					sessionTimer--;
					this.setState({ sessionTimer, isRunning });
				} else if (breakTimer > 0) {
					breakTimer--;
					this.setState({ breakTimer, isRunning });
				}
			}, 1000);
		};

		const handlePause = () => {
			this.setState({ isRunning });
			clearInterval(this.clockInterval);
		};

		if (isRunning) handleStart();
		else handlePause();
	};

	handleReset = () => {
		clearInterval(this.clockInterval);
		this.setState({ ...defaultState });
	};

	render() {
		const settingsOperation = {
			onIncrement: this.handleIncrement,
			onDecrement: this.handleDecrement,
		};

		const playingOperation = {
			onToggle: this.handleToggle,
			onReset: this.handleReset,
		};

		const { breakLength, sessionLength, sessionTimer, breakTimer } = this.state;

		return (
			<div>
				<div>
					<Break {...settingsOperation} breakLength={breakLength} />
					<Session {...settingsOperation} sessionLength={sessionLength} />
				</div>
				<div>
					<Timer
						{...playingOperation}
						sessionTimer={sessionTimer}
						breakTimer={breakTimer}
					/>
				</div>
			</div>
		);
	}
}

export default App;

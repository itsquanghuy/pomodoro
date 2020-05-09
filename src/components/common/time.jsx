import { Component } from 'react';

class Time extends Component {
	timeLeft = (length) => {
		if (length === 60 * 60) return `${length / 60}:00`;

		const seconds = length % 60;
		const minutes = parseInt(length / 60) % 60;
		let hours = parseInt(length / 3600);

		function addLeadingZeroes(time) {
			return time < 10 ? `0${time}` : time;
		}

		if (hours > 0) return `${hours}:`;
		return `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
	};
}

export default Time;

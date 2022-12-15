const clock = document.querySelector('.time')
const localization = document.querySelector('.localization')
const message = document.querySelector('.weather-message')
const timezone = document.querySelector('.abbreviation')
const getTime = () => {
	const URL = 'http://worldtimeapi.org/api/ip'

	fetch(URL)
		.then(response => response.json())
		.then(data => {
			const currentTime = data.datetime
			const abbreviation = data.abbreviation
			const yourLoc = data.timezone
			clock.textContent = currentTime.substr(11, 5)
			localization.textContent = `IN ${yourLoc}`
			timezone.textContent = abbreviation
		})
}
getTime()
setInterval(getTime, 10000)

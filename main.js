const clock = document.querySelector('.time')
const localization = document.querySelector('.localization')
const message = document.querySelector('.weather-message')
const timezone = document.querySelector('.abbreviation')
const getTime = () => {
	const URL = 'http://worldtimeapi.org/api/ip'

	fetch(URL)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			console.log(data.unixtime)
			const time = data.unixtime
			const date = new Date(time * 1000)
			const hours = date.getHours()
			const minutes = `${date.getMinutes()}`
			const abbreviation = data.abbreviation
			setInterval(() => {
				clock.textContent = `${hours}:${minutes}`
				timezone.textContent = abbreviation
			}, 1000)
		})
}

getTime()

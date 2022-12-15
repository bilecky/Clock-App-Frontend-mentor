const clock = document.querySelector('.time')
const localization = document.querySelector('.localization')
const message = document.querySelector('.weather-message')
const timezone = document.querySelector('.abbreviation')
const quote = document.querySelector('.quote')
const btn = document.querySelector('.button')
const author = document.querySelector('.author')

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

const getQuote = () => {
	const URL = 'https://type.fit/api/quotes'

	fetch(URL)
		.then(response => response.json())
		.then(data => {
			const random = Math.floor(Math.random() * data.length)
			quote.textContent = data[random].text
			author.textContent = data[random].author
			console.log(data[random])
		})
}

getQuote()
getTime()
setInterval(getTime, 10000)

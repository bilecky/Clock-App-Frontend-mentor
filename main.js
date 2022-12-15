const clock = document.querySelector('.time')
const localization = document.querySelector('.localization')
const timezone = document.querySelector('.abbreviation')
const quote = document.querySelector('.quote')
const btn = document.querySelector('.button')
const author = document.querySelector('.author')
const bgc = document.querySelector('.background-img')
const message = document.querySelector('.message')
const weatherIcon = document.querySelector('.weather-icon')

const getTime = () => {
	const URL = 'https://worldtimeapi.org/api/ip'

	fetch(URL)
		.then(response => response.json())
		.then(data => {
			const currentTime = data.datetime
			const abbreviation = data.abbreviation
			const yourLoc = data.timezone
			clock.textContent = currentTime.substr(11, 5)
			localization.textContent = `IN ${yourLoc}`
			timezone.textContent = abbreviation
			const hrs = currentTime.substr(11, 2)
			console.log(hrs)
			if (hrs > 6 && hrs < 22) {
				bgc.src = './assets/desktop/bg-image-daytime.jpg'
				message.textContent = 'Good morning, its currently'
			} else {
				bgc.src = './assets/desktop/bg-image-nighttime.jpg'
				message.textContent = 'Good night, its currently'
				weatherIcon.src = './assets/desktop/icon-moon.svg'
			}
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

btn.addEventListener('click', () => {
	getQuote()
})

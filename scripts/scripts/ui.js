import { showPodcaster } from "./api.js"

const podcasterContainer = document.querySelector('#podcaster-container')
const messageContainer = document.querySelector('#message-container')
const showPodcastContainer = document.querySelector('#show-podcast-container')

export const onIndexPodcasterSuccess = (podcaster) => {
	podcaster.forEach((podcaster) => {
		const div = document.createElement('div')
		div.innerHTML = `
            <h3>Podcaster: ${podcaster.name}</h3>
            <p>Funny Level: ${podcaster.funnyLevel}</p>
        `
		podcasterContainer.appendChild(div)
	})
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h3>You've encountered an error. Try again later</h3>
    <p>${error}</p>
    `
}

export const onCreatePodcasterSuccess = () => {
    messageContainer.innerText = `You've added a new podcaster`
}

podcasterContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if(!id) return

    showPodcaster(id)
        .then((res) => res.json())
        .then(console.log)
        .catch(console.error)
})

export const onShowPodcastSuccess = (podcaster) => {
	const div = document.createElement('div')
	div.innerHTML = `
        <h3>${podcaster.name}</h3>
        <p>${podcaster.funnyLevel}</p>
    `
	showPodcastContainer.appendChild(div)
}


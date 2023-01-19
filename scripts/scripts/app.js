import { indexPodcasters, createPodcaster, showPodcaster } from './api.js'
import { onCreatePodcasterSuccess, onIndexPodcasterSuccess, onFailure, onCreatePodcasterSuccess, onShowPodcastSuccess } from './ui.js'
const createPodcasterForm = document.querySelector('#create-podcaster-form')

indexPodcasters()
	.then((res) => res.json())
	.then((res) => onIndexPodcasterSuccess(res.podcaster))
	.catch(onFailure)


createPodcasterForm.addEventListener('submit', (event) => {
    const podcasterData = {
        podcaster: {
            name: event.target['podcaster-name'].value,
            funnyLevel: event.target['funny-level'].value
        },
    }
    createPodcaster(podcasterData)
        .then(console.log)
        .catch(console.log)
})

createPodcaster(characterData)
    .then(onCreatePodcasterSuccess)
    .catch(console.error)

createPodcaster(characterData)
    .then(onCreatePodcasterSuccess)
    .catch(onFailure)


    showPodcaster(id)
        .then((res) => res.json())
        .then(res => {
            onShowPodcastSuccess(res.podcaster)
        })
        .catch(console.error)

    showPodcaster(id)
        .then((res) => res.json())
        .then(res => {
            onShowPodcastSuccess(res.podcaster)
        })
        .catch(onFailure)
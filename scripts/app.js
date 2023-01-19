import { indexPodcasters, createPodcaster, showPodcaster, updatePodcaster, deletePodcaster } from './api.js'
import { onIndexPodcasterSuccess, onFailure, onCreatePodcasterSuccess, onShowPodcastSuccess, onUpdatePodcasterSuccess, onDeletePodcasterSuccess } from './ui.js'
const createPodcasterForm = document.querySelector('#create-podcaster-form')
const showCharacterContainer = document.querySelector('#show-character-container')

indexPodcasters()
	.then((res) => res.json())
	.then((res) => onIndexPodcasterSuccess(res.podcaster))
	.catch(onFailure)


createPodcasterForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const podcasterData = {
        podcaster: {
            name: event.target['podcaster-name'].value,
            funnyLevel: event.target['funny-level'].value
        },
    }
    createPodcaster(podcasterData)
        .then(onCreatePodcasterSuccess)
        .catch(onFailure)
})

createPodcaster(podcasterData)
    .then(onCreatePodcasterSuccess)
    .catch(console.error)

createPodcaster(podcasterData)
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

showCharacterContainer.addEventListener('submit', event => {
    event.preventDefault()

    const id = event.target.getAttribute('data-id')
    const podcasterData = {
        podcaster: {
            name: event.target['podcaster-name'].value,
            funnyLevel: event.target['funny-level'].value
        },
    }
    updatePodcaster(podcasterData, id)
        .then(onUpdatePodcasterSuccess)
        .catch(onFailure)
})

showCharacterContainer.addEventListener('click', event => {
    const id = event.target.getAttribute('data-id')

    deletePodcaster(id)
        .then(onDeletePodcasterSuccess)
        .catch(onFailure)
})
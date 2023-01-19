export const indexPodcasters = () => {
    return fetch(`http://localhost:8000/podcaster`)
}

export const createPodcaster = (data) => {
    return fetch(`http://localhost:8000/podcaster`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showPodcaster = (id) => {
    return fetch(`http://localhost:8000/podcaster/${id}`)
}

export const updatePodcaster = (data, id) => {
    return fetch(`http://localhost:8000/podcaster/${id}`, {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
}

export const deletePodcaster = (id) => {
    return fetch(`http://localhost:8000/podcaster/${id}`, {
        method: 'DELETE',
    })
    
}
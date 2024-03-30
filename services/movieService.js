import request from './request'

export async function getMovies(page = 1, limit = 10, axios = request) {
    let res = await axios.get('/api/movie', {
        params: {
            page,
            limit
        }
    })

    return res.data
}

export async function getMovie(id, axios = request) {
    let res = await axios.get(`/api/movie/${id}`)
    return res.data
}
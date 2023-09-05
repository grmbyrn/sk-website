export const load = async(eventLoad) => {
    const getPosts = async() => {
        const {fetch} = eventLoad
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        const filteredData = data.slice(0, 3)
        return filteredData
    }

    return {
        posts: getPosts()
    }
}
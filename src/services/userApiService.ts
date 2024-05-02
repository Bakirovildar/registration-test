const RANDOM_USER_API = {
    async register(): Promise<Array<ApiUser>> {
        return fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => data.results)
    }
}

interface ApiUser {
    name: {
        first: string
        last: string
    }
}

export {
    RANDOM_USER_API, ApiUser
}
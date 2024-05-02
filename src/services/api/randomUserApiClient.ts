const RandomUserApiClient = {
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
        patronymic: string
    }
}

export {
    RandomUserApiClient, ApiUser
}
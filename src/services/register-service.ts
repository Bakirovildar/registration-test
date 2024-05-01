interface UserApiService {
    register: () => string
}

const registerUser = (fullName: string, apiService: UserApiService) => {
    const apifullName = apiService.register()
    if (fullName === apifullName) {
        return false
    }
    return true
}

export {
    UserApiService, registerUser
}
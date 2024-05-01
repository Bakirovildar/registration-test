const registerUser = (fullName: string, apiFullName: string) => {
    if (fullName === apiFullName) {
        return false
    }
    return true
}

export {
    registerUser
}
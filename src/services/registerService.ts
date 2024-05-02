import {RANDOM_USER_API} from "./userApiService";

const saveUser = async (user: User) => {
    if (!user.fullName || !user.gender || !user.birthDate) {
        throw new UserInputValidationError("invalid request")
    }

    const apiUsers = await RANDOM_USER_API.register()
    const foundUser = apiUsers.find(apiUser => user.fullName === `${apiUser.name.last} ${apiUser.name.first}`);

    return foundUser === undefined
}

interface User {
    fullName: string,
    gender: string,
    birthDate: string,
    university: string,
    yearEnding: string,
    workName: string,
    duties: string
}

class UserInputValidationError extends Error {
    name = 'UserInputValidationError'
}

export { saveUser, User, UserInputValidationError}
import { Nullable } from "primereact/ts-helpers";
import { RandomUserApiClient } from "./api/randomUserApiClient";

const UserService = {
    async saveUser(user: User): Promise<Boolean> {
        if (!user.fullName || !user.gender || !user.birthDate) {
            throw new UserValidationError("invalid request")
        }

        const apiUsers = await RandomUserApiClient.register()
        const foundUser = apiUsers.find(u => user.fullName === `${u.name.last} ${u.name.first} ${u.name.patronymic}`);

        return foundUser === undefined
    }
}

interface User {
    fullName: string,
    gender: string,
    birthDate: Nullable<Date>,
    university: string,
    yearEnding: Nullable<Date>,
    workName: string,
    duties: string
}

class UserValidationError extends Error { }

export { User, UserService, UserValidationError };

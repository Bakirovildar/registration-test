import {ApiUser, RandomUserApiClient} from "./api/randomUserApiClient";
import {UserService, User, UserValidationError} from "./userService";

test('saveUser success test', async () => {
    const user = {fullName: 'Сидоров Антон Викторович', gender: 'Мужской', birthDate: new Date(1981, 1, 1)} as User;
    const apiUser = {name: {last: 'Иванов', first: 'Максим', patronymic: 'Федорович'}} as ApiUser;
    mockApiCall([apiUser])

    const isRegistered = await UserService.saveUser(user);

    expect(isRegistered).toBeTruthy()
})

test('saveUser already registered test', async () => {
    const user = {fullName: 'Иванов Максим Федорович', gender: 'Мужской', birthDate: new Date(1981, 1, 1)} as User;
    const apiUser = {name: {last: 'Иванов', first: 'Максим', patronymic: 'Федорович'}} as ApiUser;
    mockApiCall([apiUser])

    const isRegistered = await UserService.saveUser(user);

    expect(isRegistered).toBeFalsy()
})

test('saveUser validation failed test', async () => {
    mockApiCall([{name: {last: 'Иванов', first: 'Максим', patronymic: 'Федорович'}} as ApiUser])

    await expectValidationError({} as User);
    await expectValidationError({fullName: 'Иванов Максим Федорович'} as User);
    await expectValidationError({fullName: 'Иванов Максим Федорович', birthDate: new Date(1981, 1, 1) } as User);
    await expectValidationError({fullName: 'Иванов Максим Федорович', gender: 'Мужской'} as User);
    await expectValidationError({gender: 'Мужской', birthDate: new Date(1981, 1, 1)} as User);

    async function expectValidationError(user: User) {
        try {
            await UserService.saveUser(user);
        } catch (e) {
            expect(e).toBeInstanceOf(UserValidationError)
        }
    }
})

function mockApiCall(apiUsers: Array<ApiUser>) {
    return jest.spyOn(RandomUserApiClient, 'register').mockImplementationOnce(() => {
        return Promise.resolve(apiUsers)
    });
}
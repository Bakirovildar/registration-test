export const register = async () => {
    const apiFullName = await fetch('https://randomuser.me/api').then(res => res.json()).then(data => data.results[0])
    return apiFullName
}
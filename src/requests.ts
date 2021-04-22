export type User = {
    email: string;
}

export type UserList = Array<User & {
    password: string;
}>

export async function login(email: string, password: string) {
    try {
        const request = await fetch('/users.json')
        const usersJson: UserList = await request.json()
        return usersJson
            .find(s => s.password === password &&
                s.email === email)
    } catch (e) {
        console.log(e)
    }
}

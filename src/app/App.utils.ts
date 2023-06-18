export function getUserFromLocalStorage() {
    const user = localStorage.getItem('user')
    return JSON.parse(user!)
}

export function setUserInLocalStorage(id: string, name: string, token: string) {
    localStorage.setItem(
        'user',
        JSON.stringify({
            id,
            name,
            token,
        })
    )
}

export function clearLocalStorage() {
    localStorage.clear()
}

export function generateOTP() {
    return Math.floor(Math.random() * 9000 + 1000)
}

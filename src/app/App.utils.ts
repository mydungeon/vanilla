export function getUserFromLocalStorage() {
    const user = localStorage.getItem('user')
    return user
}

export function setUserInLocalStorage(name: string, token: string) {
    localStorage.setItem(
        'user',
        JSON.stringify({
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

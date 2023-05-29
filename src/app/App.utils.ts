export function getUserFromLocalStorage() {
    const user = localStorage.getItem('user')
    return user
}

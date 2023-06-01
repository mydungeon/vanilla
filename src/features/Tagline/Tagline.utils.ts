export function getRandomTagline(taglines: string[]) {
    return taglines[Math.floor(Math.random() * taglines.length)]
}

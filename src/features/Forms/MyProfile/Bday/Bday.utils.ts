export function formatMonthOrDay(monthOrDay: string) {
    console.log('test', typeof monthOrDay)
    const formatted = parseInt(monthOrDay).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    })
    console.log('formatted', formatted)
    return formatted
}

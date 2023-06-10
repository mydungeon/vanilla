export function formatMonthOrDay(monthOrDay: string) {
    const formatted = parseInt(monthOrDay).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    })
    return formatted
}

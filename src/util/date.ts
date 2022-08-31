export const date = (time: any) => {
    const dateTime = new Date(time)
    return `${dateTime.getFullYear()} - ${dateTime.getMonth() + 1} - ${dateTime.getDate()}`
}
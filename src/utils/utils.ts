export function getNumberOfDays(start: string, end: string): number {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
}

export function randomColor(colorsArr: string[]) {
    return colorsArr[Math.floor(Math.random() * (colorsArr.length - 1))];
}

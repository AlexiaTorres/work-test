export default class Time {
    constructor(date) {
        this.date = date;
    }

    diffInSeconds(anotherDate) {
        const dif = this.date.getTime() - anotherDate.getTime();

        return Math.floor(Math.abs(dif / 1000));
    }
}
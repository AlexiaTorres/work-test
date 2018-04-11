export default class Event{
    constructor(type, msg, second) {
        this.type = type;
        this.msg = msg;
        this.second = second;
        this.processed = false;
    }

    toString() {
        return `{type: "${this.type}", message: "${this.msg}"}`
    }

    process() {
        console.log(`At second: ${this.second}: ${this}`);
        this.processed = true;
    }

};
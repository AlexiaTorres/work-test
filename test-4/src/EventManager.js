import Time from './Time';
import Event from './Event';

export default class EventManager {
    constructor(events, types) {
        this.types = types;

        this.events = this.filterValid(events).map(
            event => new Event(event.type, event.message, event.second)
    );
    }

    run() {
        this.startTime = new Time(new Date());
        this.timer = setInterval(() => this.tick(this), 500);
    }

    tick() {
        if (this.isFinished()) {
            clearInterval(this.timer);
            console.log('FINISHED');
            return;
        }

        const seconds = this.startTime.diffInSeconds(new Date());

        const events = this.findEvents(seconds);

        events.forEach(event => {
            this.process(event, seconds);
    });
    }

    filterValid(events) {
        return events.filter(event => this.types.includes(event.type));
    }

    findEvents(second) {
        return this.events.filter(
            event => !event.processed && event.second === second
    );
    }

    process(event) {
        event.process();
    }

    isFinished() {
        return this.events.every(event => event.processed);
    }
}

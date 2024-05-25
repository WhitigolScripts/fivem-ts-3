/**
 * Event handler class
 */
export class EventHandler {
    /**
     *
     * @param eventName The name of the event
     */
    constructor(public eventName: string) {
        this.eventName = eventName;
    }

    /**
     *
     * @param callback The callback function
     */
    public on(callback: (...args: any[]) => void) {
        on(this.eventName, callback);
    }

    /**
     *
     * @param args The arguments to send
     */
    public send(...args: any[]) {
        emit(this.eventName, ...args);
    }
}

/**
 * Net event handler class
 */
export class NetEventHandler {
    /**
     *
     * @param eventName The name of the event
     * @param target The target to send the event to. Default is -1 (all players)
     */
    constructor(public eventName: string, public target?: number) {
        this.eventName = eventName;
        this.target = target || -1;
    }

    /**
     *
     * @param callback The callback function
     */
    public on(callback: (...args: any[]) => void) {
        onNet(this.eventName, callback);
    }

    /**
     *
     * @param args The arguments to send
     */
    public send(...args: any[]) {
        emitNet(this.eventName, this.target, ...args);
    }
}

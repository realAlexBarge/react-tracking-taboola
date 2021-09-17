export declare function getTracker(): any;
export declare function trackPageview(): void;
export interface IContent {
    [key: string]: string;
}
export declare function trackEvent(eventAction?: string, content?: IContent): void;
export declare function initialize(newTrackerId: string): void;
declare const _default: {
    initialize: typeof initialize;
    getTracker: typeof getTracker;
    trackPageview: typeof trackPageview;
    trackEvent: typeof trackEvent;
};
export default _default;

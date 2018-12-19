const log = require('winston').loggers.get('envvar');

export default class Other {
    public static thing = (thing: string): void => {
        log.debug(`got thing == ${thing}`);
    };

};

function checkIfExists(key: string, prop?: string) {
    if (!prop || prop.indexOf('PLACEHOLDER')) {
        /* eslint-disable-next-line no-console */
        console.error(
            `Check your .env file, the property: "${key}" is missing!`
        );
    }

    return prop;
}

export const config = {
    FOREX_API_HOSTNAME: process.env.FOREX_API_HOSTNAME,
    FOREX_API_KEY: checkIfExists('FOREX_API_KEY', process.env.FOREX_API_KEY),
};

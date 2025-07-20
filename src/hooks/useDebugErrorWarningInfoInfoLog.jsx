import { useEffect } from 'react';

/**
 * Custom React hook to log debug, error, warning, and info messages.
 * Useful for debugging purposes during development.
 *
 * @param {Object} logs - Object containing log messages.
 * @param {string} [logs.debug] - Debug message to log.
 * @param {string} [logs.error] - Error message to log.
 * @param {string} [logs.warning] - Warning message to log.
 * @param {string} [logs.info] - Info message to log.
 */
function useDebugErrorWarningInfoLog({ debug, error, warning, info }) {
    useEffect(() => {
        if (debug) {
            // eslint-disable-next-line no-console
            console.debug('[DEBUG]:', debug);
        }
        if (error) {
            // eslint-disable-next-line no-console
            console.error('[ERROR]:', error);
        }
        if (warning) {
            // eslint-disable-next-line no-console
            console.warn('[WARNING]:', warning);
        }
        if (info) {
            // eslint-disable-next-line no-console
            console.info('[INFO]:', info);
        }
    }, [debug, error, warning, info]);
}

export default useDebugErrorWarningInfoLog;
import * as React from 'react';
import memoize from 'fast-memoize';

type Factory = (...args: Array<any>) => (...args: Array<any>) => any;

export const useCallbackFactory = <T extends Factory>(callback: T, deps: React.DependencyList): T =>
    React.useMemo<T>(() => memoize(callback), deps);
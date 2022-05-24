import * as React from 'react';
import micromemoize from 'micro-memoize';

export const useCallbackFactory = <T extends (...args: Array<any>) => any>(callback: T, deps: React.DependencyList | undefined): T => React.useMemo(() => micromemoize(callback), deps)
import * as React from 'react';
import micromemoize from 'micro-memoize';

export const useCallbackFactory = (callback: () => any, deps: React.DependencyList | undefined) => React.useMemo(() => micromemoize(callback), deps)
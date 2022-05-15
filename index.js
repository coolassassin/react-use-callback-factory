import {useMemo} from 'react';
import micromemoize from 'micro-memoize';

export const useCallbackFactory = (callback, deps) => useMemo(() => micromemoize(callback), deps)
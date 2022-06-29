import typescript from "rollup-plugin-typescript2";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import hashbang from 'rollup-plugin-hashbang';
import commonjs from '@rollup/plugin-commonjs';
import external from "rollup-plugin-peer-deps-external";

export default {
    input: 'index.ts',
    output: [
        {
            file: 'dist/cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/es.js',
            format: 'es'
        }
    ],
    plugins: [
        external(),
        resolve({ browser: true }),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        commonjs({
            include: /node_modules/,
        }),
        babel({ extensions: ['.ts', '.js'], exclude: './node_modules/**' }),
        hashbang()
    ],
    external: ['react', 'fast-memoize']
};

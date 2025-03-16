import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';
import { execSync } from 'child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString();
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        // Ensure that any globals defined here have their values converted
        // with `JSON.stringify` to avoid getting the following kinds of
        // errors:
        //
        //     [vite] Internal server error: Failed to parse source for import
        //     analysis because the content contains invalid JS syntax. If you
        //     are using JSX, make sure to name the file with the .jsx or .tsx
        //     extension.
        //
        // Look for other env variables in ./env.ts
        VITE_APP_SHA: JSON.stringify(commitHash),
        VITE_APP_VERSION: JSON.stringify(process.env.npm_package_version)
    },
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgrPlugin(),
        istanbul({
            include: 'src/*',
            exclude: ['node_modules'],
            extension: ['.ts', '.tsx'],
            requireEnv: false,
            forceBuildInstrument: true
        })
    ],
    resolve: {
        alias: {
            buffer: 'buffer' // alias for buffer polyfill
        }
    },
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist',
        manifest: true,
        rollupOptions: {}
    }
});

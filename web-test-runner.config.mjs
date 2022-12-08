import { playwrightLauncher } from '@web/test-runner-playwright'

export default {
	rootDir: '.',
	files: 'src/**/*.test.js',
	concurrentBrowsers: 3,
	nodeResolve: true,
	browsers: [
        playwrightLauncher({ product: 'chromium' }),
    ],
}

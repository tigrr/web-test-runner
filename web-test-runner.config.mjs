import { litSsrPlugin } from '@lit-labs/testing/web-test-runner-ssr-plugin.js'

export default {
	rootDir: '.',
	files: 'src/**/*.test.js',
	concurrentBrowsers: 3,
	nodeResolve: true,
	plugins: [litSsrPlugin()],
}

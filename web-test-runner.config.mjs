import { defaultReporter } from '@web/test-runner'

function testReporter() {
	return {
		reportTestFileResults() {
			throw 'Can you see this?'
		},
	}
}

export default {
	rootDir: '.',
	files: 'src/**/*.test.js',
	concurrentBrowsers: 3,
	nodeResolve: true,
	reporters: [defaultReporter(), testReporter()],
}

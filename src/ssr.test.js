import { expect } from '@open-wc/testing'
import { html } from 'lit'
import { ssrFixture } from '@lit-labs/testing/fixtures.js'

const content = html`hello world`

describe('@lit-labs/testing', () => {
    it('should should accept template result as content', async () => {
		const el = await ssrFixture(
			html`<div>${content}</div>`,
			{
				modules: [],
				hydrate: true,
			},
		)

		expect(el.textContent).to.equal('hello world')
    })
})

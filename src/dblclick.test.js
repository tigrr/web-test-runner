import { expect } from '@open-wc/testing'
import sinon from 'sinon'
import { sendMouse } from '@web/test-runner-commands'


describe('sendMouse dblclick simulation', () => {
    it('should emit dblclick event', async () => {
		const handleDblclick = sinon.spy()
		document.addEventListener('dblclick', handleDblclick)

        await sendMouse({
			type: 'move',
			position: [
				100,
				100,
			],
		})
		await sendMouse({ type: 'down' })
		await sendMouse({ type: 'up' })
		await sendMouse({ type: 'down' })
		await sendMouse({ type: 'up' })

		expect(handleDblclick).to.have.been.calledOnce
    })
})

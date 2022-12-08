import { resetMouse } from '@web/test-runner-commands'

describe('resetMouse bug', () => {
    it('triggers context menu', async () => {
        // Do something with the mouse

        // Then reset it
        await resetMouse()
    })
})

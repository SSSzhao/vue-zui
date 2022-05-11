import { render } from '@testing-library/vue'
import { Button } from '..'

describe('z-button', () => {
  test('Button Disabled', () => {
    const { getByText } = render(new Button())

    console.log(getByText)

    // expect(wrapper.classes()).toContain('is-disabled')
  })
})

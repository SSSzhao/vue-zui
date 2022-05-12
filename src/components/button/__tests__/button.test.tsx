import { mount } from '@vue/test-utils'
import { Button } from '..'

describe('z-button', () => {
  test('Button Type', () => {
    const wrapper = mount({
      template: <Button type="primary" />
    })
    expect(wrapper.find('.z-button--primary').classes()).toContain('z-button--primary')
  })
})

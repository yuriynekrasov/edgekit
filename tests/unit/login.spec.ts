import { mount } from '@vue/test-utils'
import Auth from '@/components/Auth.vue'

describe('Auth.vue', () => {
  it('Disabled button if inputs are not required', async() => {
    const msg = 'new message'
    const wrapper = mount(Auth)

    await wrapper.find("[data-email]").setValue("")
    await wrapper.find("[data-password]").setValue("")

    expect(wrapper.find("[data-button]").attributes('disabled'))
  })
})

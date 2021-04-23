import { mount } from '@vue/test-utils'
import Auth from '@/components/Auth.vue'

describe('Auth.vue', () => {
  it('Disabled button if inputs are not required', async() => {
    const wrapper = mount(Auth)

    await wrapper.find('[data-test="email"]').setValue("")
    await wrapper.find('[data-test="password"]').setValue("")

    expect(wrapper.find("[data-button]").attributes('disabled'))
  })

  it('Entered wrong email', async() => {
    const wrapper = mount(Auth)

    await wrapper.find('[data-test="email"]').setValue("test")
    expect(wrapper.find("[data-error-email]").text()).toBe('This email is badly formatted')
  })

})

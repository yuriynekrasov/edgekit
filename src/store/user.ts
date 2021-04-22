import { computed, reactive } from 'vue';
import * as Request from '@/requests'

const state = reactive({
    email: '',
    password: '',
    error: ''
})

const getters = reactive({
    isLoggedIn: computed(() => state.email !== '')
})

const actions = {
    async login(email: string, password: string) {
        const user = await Request.login(email, password)
        if (!user) {
            state.error = 'The password is invalid or the user doesn’t have a password.'
            return false
        }
        state.email = user.email
        state.password = user.password
        state.error = ''

        return true
    },
    async logout() {
        state.email = ''
        state.password = ''
    }
}
export default { state, getters, ... actions }

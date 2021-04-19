<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="username">Username</label>
      <input
        id="username"
        v-model="form.username"
        placeholder="Username"
        type="text">
    </div>
    <div>
      <label for="password">Username</label>
      <input
        id="password"
        v-model="form.password"
        placeholder="Username"
        type="text">
    </div>
    <p>{{ userStore.state.error }}</p>
    <button>Login</button>
  </form>
</template>

<script>
import { defineComponent, reactive } from "vue";
import userStore from '@/store/user'

export default defineComponent({
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })

    const onSubmit = () => {
      userStore.login(form.username, form.password)
      form.username = ''
      form.password = ''
    }
    return { form, userStore, onSubmit }
  }
})
</script>

<style scoped>

</style>

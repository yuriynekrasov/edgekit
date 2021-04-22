<template>
  <div class="wrapper">
    <div class="login">
      <h1 class="login_title">Log in <br>
        with EdgeKit</h1>
      <form class="login_form" @submit.prevent="onSubmit">
        <div
            class="login_input-group">
          <input
              id="username"
              v-model="form.email"
              @input="v$.email.$touch"
              :class="{ error: v$.email.$errors.length }"
              placeholder="Work email"
              type="text"
              data-email>
          <div class="input-errors" v-if="v$.email.$error">
            <div class="error-msg">{{ v$.email.$errors[0].$message }}</div>
          </div>
        </div>
        <div class="login_input-group">
          <input
              :class="{ error: userStore.state.error}"
              id="password"
              v-model="form.password"
              placeholder="Password"
              type="password"
              data-password>
          <div class="input-errors input-errors__password" v-if="userStore.state.error">
            <div class="error-msg">{{ userStore.state.error }}</div>
          </div>
          <div class="input-group_forgot-pass">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div
          class="login_input-group">
          <button :disabled="filledForm" data-button>Log in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, getCurrentInstance } from "vue";

import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import userStore from '@/store/user';
import router from "@/router";
import Form from '@/interfaces/login'

export default defineComponent({
  setup(params, ctx) {
    const form : Form = reactive({
      email: 'q@q.qwe',
      password: '123123'
    })

    const rules = computed(() => {
      return {
        email: {
          email: helpers.withMessage('This email is badly formatted', email),
          required: helpers.withMessage('', required)
        },
        password: {
          required: helpers.withMessage('', required)
        }
      }
    })
    const v$ = useVuelidate(rules, form)

    const internalInstance = getCurrentInstance()

    const onSubmit = () => {
      const toast = internalInstance?.appContext?.config.globalProperties.$toast
      if (v$.value.$invalid) {
        return;
      }
      userStore.login(form.email, form.password)
      .then(() => {
        toast.success('Welcome')
        router.push('/')
      })
      .catch(e => {
        toast.error(e.message)
      })
    }
    const filledForm = computed(() => {
        return v$.value.$invalid
    })

    return { form, userStore, onSubmit, v$, filledForm }
  },
})
</script>


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
              type="text">
          <div class="input-errors" v-if="v$.email.$error">
            <div class="error-msg">{{ v$.email.$errors[0].$message }}</div>
          </div>
        </div>
        <div class="login_input-group">
          <input
              :class="{ error: userStore.state.error}"
              id="password"
              v-model="form.password"
              @input="clearError"
              placeholder="Password"
              type="password">
          <div class="input-errors input-errors__password" v-if="userStore.state.error">
            <div class="error-msg">{{ userStore.state.error }}</div>
          </div>
          <div class="input-group_forgot-pass">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div
          class="login_input-group">
          <button :disabled="filledForm">Log in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";

import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import userStore from '@/store/user';
import router from "@/router";

export default defineComponent({
  setup() {
    const form = reactive({
      email: '',
      password: ''
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

    const onSubmit = () => {
      if (v$.value.$invalid) return;
      userStore.login(form.email, form.password)
      router.push('/')
    }
    const filledForm = computed(() => {
        return v$.value.$invalid
    })

    return { form, userStore, onSubmit, v$, filledForm }
  },
})
</script>

<style scoped>
.login {
  margin: 0 auto;
  width: 800px;
  text-align: left;
}
.login_title {
  font-size: 48px;
  text-align: left;
  padding-top: 80px;
  color: black;
  line-height: 56px;
  margin-bottom: 40px;
}
.login_form {
  width: 1200px;
}
.login_input-group {
  display: flex;
  margin-bottom: 20px;
}
.login_input-group input{
  width: calc(512px - 1.6rem);
  border: 1px solid #ced4da;
  padding: .375rem .75rem;
  border-radius: .25rem;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
}
.login_input-group button {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  width: 512px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  color: #fff;
  background: #171717;
  border: 1px solid transparent;
}
.login_input-group button:hover {
  background: #2C5EF6;
}
.input-errors {
  width: 220px;
  padding: 5px 50px;
}
.error {
  border: solid 1px red !important;
}
.error-msg {
  color: red
}
.input-errors__password {
  border-right: solid 2px #c9c9c9;
}
.input-group_forgot-pass {
  display: flex;
  align-items: center;
  color: blue;
  padding-left: 40px;
  width: 100px;
}
button[disabled] {
  background: #d2d2d2;
}
button[disabled]:hover {
  background: #D1D1D1;
}
</style>

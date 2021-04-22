<template>
  <div id="nav">
    <logo/>
    <div class="links">
      <a href="#" class="links_sign-up">New user?</a>
      <router-link class="links_sign-in" to="/login">Sign up</router-link>
    </div>
  </div>
  <router-view/>
</template>
<script>
import { defineComponent } from "vue";
import Logo from "@/components/Logo";

export default defineComponent({
  components: {
    Logo,
  },
})

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  padding: 22px 32px;

  .links_sign-up {
    font-weight: bold;
    color: #9c9c9c;
    margin-right: 10px;
  }
  .links_sign-in {
    font-weight: bold;
    color: #000000;
  }
}
</style>

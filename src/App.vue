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
#nav {
  display: flex;
  justify-content: space-between;
  padding: 22px 32px;
  font-weight: 500;

  .links_sign-up {
    color: #9c9c9c;
    margin-right: 10px;
  }
  .links_sign-in {
    color: #171717;
  }
}
</style>

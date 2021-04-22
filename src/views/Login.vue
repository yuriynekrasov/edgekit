<template>
  <div class="home">
    <Auth/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Auth from '@/components/Auth.vue';

export default defineComponent({
  name: 'Login',
  components: {
    Auth,
  },
});
</script>

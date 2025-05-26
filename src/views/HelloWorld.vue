<template>
  <div class="greetings">
    <h1 class="green">{{ APP_NAME }}</h1>
    <h3>
      This boilerplate uses
      <ResourceLink
        text="Vite"
        link="https://vitejs.dev"
      /> +
      <ResourceLink
        text="Vue 3"
        link="https://vuejs.org"
      /> +
      <ResourceLink
        text="Pinia"
        link="https://pinia.vuejs.org"
      /> +
      <ResourceLink
        text="Vue Router"
        link="https://router.vuejs.org"
      /> +
      the
      <ResourceLink
        text="superior Options API"
        link="https://docs.google.com/presentation/d/1fsDhn_MptD6c-_ALgurQtvaRFkfbfukbbFGfEfckzvk/edit?usp=sharing"
      />.
    </h3>
  </div>
</template>

<script>
import { APP_NAME } from '@/helpers/constants.js';

import ResourceLink from '@/components/ResourceLink.vue';

export default {
  name: 'HelloWorld',
  components: {
    ResourceLink
  },
  constants: {
    APP_NAME
  }
};
</script>

<style scoped>
h1 {
  top: -10px;
  font-size: 2.6rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

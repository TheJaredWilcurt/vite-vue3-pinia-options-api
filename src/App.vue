<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'welcome' }">
        Welcome
      </RouterLink>
      <RouterLink :to="{ name: 'pinia' }">
        Pinia Demo
      </RouterLink>
      <RouterLink :to="{ name: 'resources' }">
        Resources
      </RouterLink>
    </nav>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
    />

  </header>

  <main>
    <RouterView />
  </main>
</template>

<script>
import { APP_NAME } from '@/helpers/constants.js';

export default {
  name: 'App',
  constants: {
    APP_NAME
  }
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  margin-bottom: 2rem;
  text-align: center;
}
nav a {
  background: #FFF3;
  border-radius: 0.5rem;
  margin: 2rem;
  padding: 0.5rem 1rem;
}
nav a:hover {
  background: #FFF5;
  color: #FFF;
}
.router-link-active {
  background: #FFF7;
  color: #FFF;
}
.router-link-active:hover {
  background: #FFF8;
}

.logo {
  display: block;
  width: 125px;
  height: 125px;
  margin: 0px auto 2rem;
}

</style>

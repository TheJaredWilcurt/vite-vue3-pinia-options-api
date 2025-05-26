<template>
  <WelcomeItem>
    <template #heading>Documentation</template>

    Vue's
    <ResourceLink
      text="official documentation"
      link="https://vuejs.org"
    />
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <ResourceLink
      text="Vite"
      link="https://vitejs.dev/guide/features.html"
    />.
    The recommended IDE setup is
    <ResourceLink
      text="Sublime Text"
      link="https://www.sublimetext.com"
    />
    +
    <ResourceLink
      text="Vue Syntax Highlighting"
      link="https://packagecontrol.io/packages/Vue%20Syntax%20Highlight"
    />.
    If you need to test your components and web pages, check out
    <ResourceLink
      text="Vitest"
      link="https://vitest.dev"
    />,
    <ResourceLink
      link="https://test-utils.vuejs.org"
      text="Vue Test-Utils"
    />,
    and
    <ResourceLink
      text="Vue Snapshot Serializer"
      link="https://TheJaredWilcurt.com/vue-snapshot-serializer"
    />.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <ResourceLink
      text="Pinia"
      link="https://pinia.vuejs.org"
    />,
    <ResourceLink
      text="Vue Router"
      link="https://router.vuejs.org"
    />,
    <ResourceLink
      text="Vue Test Utils"
      link="https://test-utils.vuejs.org"
    />, and
    <ResourceLink
      text="Vue Dev Tools"
      link="https://github.com/vuejs/devtools"
    />.
    If you need more resources, we suggest paying
    <ResourceLink
      text="Awesome Vue"
      link="https://github.com/vuejs/awesome-vue"
    />
    and
    <ResourceLink
      text="Awesome Vue 3"
      link="https://github.com/vuesomedev/awesome-vue-3"
    />
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Community</template>

    Stuck? Ask your question on
    <ResourceLink
      text="Vue Land"
      link="https://chat.vuejs.org"
    />,
    our official Discord server, or
    <ResourceLink
      text="StackOverflow"
      link="https://stackoverflow.com/questions/tagged/vue.js"
    />.
    You should also subscribe to
    <ResourceLink
      text="our mailing list"
      link="https://news.vuejs.org"
    />
    and follow the official
    <ResourceLink
      text="@vuejs"
      link="https://twitter.com/vuejs"
    />
    twitter account for latest news in the Vue world.
  </WelcomeItem>
</template>

<script>
import ResourceLink from '@/components/ResourceLink.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
  name: 'TheWelcome',
  components: {
    ResourceLink,
    WelcomeItem
  }
};
</script>

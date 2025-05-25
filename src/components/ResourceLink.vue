<template>
  <a
    v-text="text"
    :href="link"
    target="_blank"
    rel="noopener"
  ></a>
</template>

<script>
export default {
  name: 'ResourceLink',
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

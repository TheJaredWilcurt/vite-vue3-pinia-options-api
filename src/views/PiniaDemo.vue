<template>
  <div>
    <h2 class="green">🍍 Pinia Example:</h2>

    <ul>
      <li>
        <strong class="pinia-label">Count:</strong>
        <span data-test="count">
          {{ count }}
        </span>
      </li>
      <li>
        <strong class="pinia-label">Doubled Count:</strong>
        <span data-test="doubled">
          {{ doubledCount }}
        </span>
      </li>
      <li>
        <button
          data-test="increment"
          @click="incrementCount"
        >
          Increment Count
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import { counterStore } from '@/stores/counter.js';

export default {
  name: 'PiniaDemo',
  methods: {
    ...mapActions(counterStore, [
      'incrementCount'
    ])
  },
  computed: {
    ...mapState(counterStore, [
      'count',
      'doubledCount'
    ])
  }
};
</script>

<style>
.pinia-label {
  margin-right: 0.25em;
}
</style>

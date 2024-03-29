/* eslint-disable import/no-unused-modules */
import { defineStore } from 'pinia';

export const counterStore = defineStore('counter', {
  state: function () {
    return {
      count: 2
    };
  },
  actions: {
    incrementCount: function () {
      this.count = this.count + 1;
    }
  },
  getters: {
    doubledCount: function (state) {
      return state.count * 2;
    }
  }
});

<template>
  <button @click="handleClick" class="ripple"><slot /></button>
</template>

<script>
import { ripple } from "@/mixins/ripple";
export default {
  mixins: [ripple],
  methods: {
    handleClick(event) {
      this.rippleEffect(event);
    },
  },
};
</script>

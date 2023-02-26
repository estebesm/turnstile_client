<template>
  <button class="ripple" @click="handleClick">
    <slot />
    {{ variant }}
  </button>
</template>

<script>
import { ripple } from "@/mixins/ripple";
export default {
  mixins: [ripple],
  props: {
    variant: {
      type: String,
      validator: function (value) {
        const variants = ["outlined", "tonal", "text"];
        return variants.includes(value);
      },
    },
  },
  methods: {
    handleClick(event) {
      this.rippleEffect(event);
    },
  },
};
</script>

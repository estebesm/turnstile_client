<template>
  <div>
    <label v-if="label" class="block text-sm mb-2">{{ label }}</label>
    <input
      class="py-2 px-2 outline-offset-0 rounded bg-main outline-none focus:outline-primary placeholder:font-[400]"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
};
</script>

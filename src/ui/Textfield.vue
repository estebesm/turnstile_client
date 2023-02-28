<template>
  <div>
    <label v-show="label" class="block text-sm mb-2">{{ label }}</label>
    <input
      class="py-2 px-2 outline-offset-0 rounded-lg bg-main outline-none border border-secondary dark:border-main focus:outline-primary placeholder:font-[400]"
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

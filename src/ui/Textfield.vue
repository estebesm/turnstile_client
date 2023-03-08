<template>
  <div>
    <div v-if="props.title" class="text-sm font-[400] mb-1 pl-1">
      {{ props.title }}
    </div>
    <input
      class="py-2 px-2 outline-offset-0 rounded-lg bg-main outline-none border border-secondary dark:border-side focus:outline-primary placeholder:font-[400]"
      v-bind="$attrs"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  value: {
    type: [Number, String],
    default: "",
  },
});
</script>

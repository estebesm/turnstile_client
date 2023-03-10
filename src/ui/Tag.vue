<template>
  <div class="px-3.5 py-2 rounded-2xl flex justify-center items-center">
    <span class="text-sm font-[500] text-white whitespace-nowrap">{{
      props.title
    }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
});
</script>

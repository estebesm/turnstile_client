<template>
  <div>
    <div class="relative">
      <div v-if="props.title" class="text-sm mb-1 pr-1">{{ props.title }}</div>
      <Button
        class="flex relative z-0 justify-between items-center py-2 px-2 outline-offset-0 rounded-lg bg-main outline-none border border-secondary dark:border-main"
        type="button"
        v-bind="$attrs"
        :disabled="props.options.length < 2"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <span :class="{ 'text-main': props.options.length === 0 }">{{
          props.options.length === 0 || props.value === undefined
            ? "default"
            : props.value.name
        }}</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
          :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="absolute z-[1] left-0 right-0 mb-4 bg-main divide-y dark:divide-side rounded-b shadow-lg border-t border-t-side"
        >
          <li
            v-for="(option, index) in props.options"
            :key="index"
            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-black/30 cursor-pointer font-[400]"
            @mousedown.prevent="setValue(option)"
          >
            {{ option.name }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Button from "@/ui/Button.vue";

const emit = defineEmits(["update:value"]);

const props = defineProps({
  title: {
    type: String,
  },
  options: {
    type: Array,
  },
  value: {
    type: Object,
  },
});

const isOptionsExpanded = ref(false);

function setValue(option) {
  emit("update:value", option);
  isOptionsExpanded.value = false;
}
</script>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
button:disabled svg {
  display: none;
}
</style>

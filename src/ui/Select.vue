<template>
  <div>
    <div class="relative">
      <label v-show="label" class="block text-sm mb-2">{{ label }}</label>
      <Button
        class="flex justify-between items-center py-2 px-2 outline-offset-0 rounded-lg bg-main outline-none border border-secondary dark:border-main"
        type="button"
        v-bind="$attrs"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <span>{{ selectedOption }}</span>
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
          class="absolute left-0 right-0 mb-4 bg-main divide-y rounded-b shadow-lg overflow-hidden border-t border-t-side"
        >
          <li
            v-for="(option, index) in options"
            :key="index"
            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-black/30 cursor-pointer font-[400]"
            @mousedown.prevent="setOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Button from "./Button.vue";

const props = defineProps({
  label: {
    type: String,
  },
});

const isOptionsExpanded = ref(false);
const selectedOption = ref("Взрослый");
const options = ref([
  "Взрослый",
  "Взрослый тр.",
  "Детский",
  "Детский тр.",
  "Индивидуальный",
]);

function setOption(option) {
  selectedOption.value = option;
  isOptionsExpanded.value = false;
}
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
</style>

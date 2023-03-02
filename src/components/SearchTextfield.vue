<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      v-model="searchTerm"
      class="py-2 px-2 outline-offset-0 rounded-lg bg-side outline-none border border-gray-200 dark:border-main focus:outline-primary placeholder:font-[400] w-full pr-12"
      type="text"
      placeholder="Поиск..."
      @input="handleInput"
      @blur="closeDropdown"
    />
    <button
      class="absolute right-2 top-1 h-8 w-8 flex items-center justify-center text-secondary hover:text-primary transition-colors focus:outline-none"
      @click="handleButtonClick"
    >
      <svg
        id="Layer_1"
        height="24"
        style="enable-background: new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="fill-gray-500"
      >
        <path
          d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
        />
      </svg>
    </button>
    <div
      v-if="showDropdown"
      class="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg"
    >
      <ul
        class="absolute z-[1] left-0 right-0 mb-4 bg-main divide-y rounded-b shadow-lg border-t border-t-side"
      >
        <li
          v-for="(option, index) in props.results"
          :key="index"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-black/30 cursor-pointer font-[400]"
          @mousedown.prevent="handleOptionClick(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { debounce } from "@/helpers/utils.js";

const props = defineProps({
  results: {
    type: Array,
    required: true,
  },
  searchFn: {
    type: Function,
    required: true,
  },
});

const searchTerm = ref("");
const showDropdown = ref(false);
const searchFn = debounce(props.searchFn, 700);

function handleInput(e) {
  searchTerm.value = e.target.value;
  showDropdown.value = true;
  searchFn(searchTerm.value);
}

function closeDropdown() {
  showDropdown.value = false;
}

function handleButtonClick() {
  closeDropdown();
  searchFn(searchTerm.value);
}
function handleOptionClick(option) {
  searchTerm.value = option;
  closeDropdown();
  searchFn(searchTerm.value);
}
</script>
